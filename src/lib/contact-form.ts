import z from 'zod';

export const ContactFormValidator = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	message: z.string().min(1),
});

export type ContactFormRequest = z.infer<typeof ContactFormValidator>;
