import { CommentValidator } from '@/lib/comment';
import { db } from '@/lib/db';
import { Prisma } from '@prisma/client';

export async function POST(req: Request) {
	const { resourceId, authorName, commentContent, commentTitle } =
		CommentValidator.parse(await req.json());

	const comment: Prisma.CommentCreateInput = {
		resource: {
			connect: {
				id: resourceId,
			},
		},
		title: commentTitle,
		content: commentContent,
		author: {
			connectOrCreate: {
				where: {
					name: authorName,
				},
				create: {
					name: authorName,
				},
			},
		},
	};
	await db.comment.create({
		data: comment,
	});

	return new Response('Comment created', {
		status: 201,
	});
}
