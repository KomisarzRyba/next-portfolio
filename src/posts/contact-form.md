---
title: "Building a Contact Form with Google's APIs: OAuth2 and Gmail"
date: '2023-07-30'
tags: ['express', 'typescript', 'redis', 'gmail-api']
---

As a full stack developer, having a professional portfolio website is crucial to showcase your skills and projects. One essential feature for such a website is a contact form that allows visitors to reach out to you easily.

In this post, I'll walk you through the process of building a contact form for your portfolio website, leveraging Google's OAuth2 and Gmail APIs. The frontend is built using React and shadcn-ui library, while the backend will be implemented as a separate Express.js application. We'll use Zod for server-side request payload validation and Redis to store the OAuth2 refresh key for authorization.

### Prerequisites

Before we dive into the implementation, make sure you have the following set up:

1. Node.js and npm: Ensure you have Node.js and npm (Node Package Manager) installed on your machine.

1. Google APIs Credentials: Create a project on the Google Developer Console and enable the Gmail API. Obtain the OAuth 2.0 client ID and client secret.

1. Upstash Account: Sign up for an Upstash account and get the REST URL and token from the dashboard. In this example, we'll use @upstash/redis package to interact with Redis. _Btw you can use any provider you want, I chose Upstash, because it has a free tier that perfectly satisfies the requirements of this project._

## Backend - Express.js Application

The backend of our contact form is powered by an Express.js application written in TypeScript. We'll use various libraries and APIs to handle OAuth2 authorization and sending emails via Gmail.

### Setting Up the Server

We start by creating an Express app and configuring necessary middleware:

```typescript
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

// Enable CORS to allow cross-origin requests from your frontend domain
app.use(cors({ origin: 'https://www.antekolesik.dev' }));

// Parse incoming JSON data
app.use(express.json());
```

The `cors` middleware is used to enable Cross-Origin Resource Sharing, allowing requests from your frontend domain (in my case it's [https://www.antekolesik.dev](https://www.antekolesik.dev)). Adjust the origin property to match your actual frontend domain.

### Google OAuth2 Integration

We'll use Google's OAuth2 to authorize our backend to send emails on our behalf. For this, you need to obtain the OAuth 2.0 client ID and client secret from the Google Developer Console.

```typescript
import { google } from 'googleapis';
import url from 'url';

const oauth2client = new google.auth.OAuth2(
	process.env.GOOGLE_OAUTH_CLIENT_ID!,
	process.env.GOOGLE_OAUTH_CLIENT_SECRET!,
	process.env.GOOGLE_OAUTH_REDIRECT_URI!
);

const scopes = [
	'https://mail.google.com/',
	'https://www.googleapis.com/auth/gmail.addons.current.action.compose',
	'https://www.googleapis.com/auth/gmail.compose',
	'https://www.googleapis.com/auth/gmail.modify',
	'https://www.googleapis.com/auth/gmail.send',
];

const authorizationUrl = oauth2client.generateAuthUrl({
	access_type: 'offline',
	scope: scopes,
	include_granted_scopes: true,
});
```

Here, we create an OAuth2 client using the obtained client ID, client secret, and redirect URI. We define the required scopes for accessing Gmail's API. The authorizationUrl will be used to redirect you to the Google consent screen for authentication.

It is worth noting now that the OAuth2 authorization flow is a bit different for server-side applications. In this case, we'll need to manually exchange the authorization code for an access token and refresh token. We'll handle this in the OAuth2 callback route.

### Redis for Token Storage

We use Redis to store the OAuth2 refresh token, which allows us to maintain a long-lasting authorization with Gmail.

```typescript
import { Redis } from '@upstash/redis/nodejs';

const redis = new Redis({
	url: process.env.UPSTASH_REDIS_REST_URL!,
	token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});
```

### OAuth2 Callback

After you grant permission on the Google consent screen, you will be redirected to our specified callback URL. We'll handle the callback to exchange the authorization code for an access token and store the refresh token in Redis.

```typescript
app.get('/oauth2callback', async (req, res) => {
	try {
		const q = url.parse(req.url, true).query;
		const { tokens } = await oauth2client.getToken(q.code as string);
		await redis.json.set('token', '$', JSON.stringify(tokens));
		oauth2client.setCredentials(tokens);
		res.status(200).send();
	} catch (e) {
		console.log(e);
		res.status(500).send();
	}
});
```

Make sure to add the callback URL to the list of authorized redirect URIs in the Google Developer Console.

_When you deploy your application, you must visit the authorizationUrl to initiate the OAuth2 flow. After you grant permission on the Google consent screen, you will be redirected to the callback URL, and the refresh token will be stored in Redis._

### Validating the request payload

We'll use Zod to validate the request payload. The following schema defines the expected request payload for the contact form. It also matches the schema we defined for the form validation on the frontend, which is not discussed in this post. Copy the code below to a file named `message.ts` in the `lib` directory:

```typescript
// lib/message.ts
import z from 'zod';

export const MessageSchema = z.object({
	senderName: z.string().min(1),
	senderEmail: z.string().email(),
	messageContent: z.string().min(1),
});

export type Message = z.infer<typeof MessageSchema>;
```

### Sending Emails via Gmail API

Now that we have the necessary authorization, we can send emails using the Gmail API.

```typescript
import { webSafeBase64Encode } from './lib/encoder';
import { MessagePayloadSchema } from './lib/message';

app.post('/send', async (req, res) => {
	try {
		// Validate the request payload using the MessagePayloadSchema
		const { senderName, senderEmail, messageContent } =
			MessagePayloadSchema.parse(req.body);

		const message = `From: ${senderName} <${senderEmail}>\nTo: Antek <example@gmail.com>\nSubject: New message from Portfolio\n\nSender: ${senderName} <${senderEmail}>\n${messageContent}`;

		const token = await redis.json.get('token');
		oauth2client.setCredentials(JSON.parse(token));

		const { data } = await gmail.users.messages.send({
			userId: 'me',
			requestBody: {
				raw: webSafeBase64Encode(message),
			},
		});
		res.status(200).send(data);
	} catch (e: any) {
		console.log(e);
		res.status(500).send(e);
	}
});
```

We validate the incoming request payload using the MessagePayloadSchema defined with Zod. If the payload is valid, we compose the email message and send it using the Gmail API. Note that in this example, the emails will be sent to 'example@gmail.com' as a demonstration. Make sure to replace it with your own email address.

Google's API requres us to encode the message in web-safe base64url format. We'll define a `webSafeBase64Encode` function in `lib/encoder.ts` file to encode the message:

```typescript
// lib/encoder.ts
export const webSafeBase64Encode = (data: string) => {
	return btoa(data).replace(/\+/g, '-').replace(/\//g, '_');
};
```

## Conclusion

In this backend implementation, we integrated Google's OAuth2 and Gmail APIs to enable the contact form on your portfolio website to send emails on your behalf. The server is built with Express.js, TypeScript, and Zod for request payload validation. Redis is used to store the OAuth2 refresh token for maintaining long-term authorization.

Keep in mind that this is a basic example, and you can extend the functionality as per your requirements. For example, you may want to add error handling, logging, or implement advanced email features like attachments or templates.

I hope this breakdown helps you understand the backend implementation better. Happy coding and best of luck with your portfolio website!
