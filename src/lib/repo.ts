import { z } from 'zod';

export const repo = z.object({
	name: z.string(),
	description: z.string(),
	html_url: z.string().url(),
});
