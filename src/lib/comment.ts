import z from 'zod';

export const CommentValidator = z.object({
	resourceId: z.string().min(1),
	authorName: z.string().min(1),
	commentTitle: z.string().min(1).optional(),
	commentContent: z.string().min(1),
});

export type CommentRequest = z.infer<typeof CommentValidator>;
