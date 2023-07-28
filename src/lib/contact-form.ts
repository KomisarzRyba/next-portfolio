import z from 'zod';

export const ContactFormValidator = z.object({
	senderName: z.string().min(1),
	senderEmail: z.string().email(),
	messageContent: z.string().min(1),
});

export type ContactFormRequest = z.infer<typeof ContactFormValidator>;
