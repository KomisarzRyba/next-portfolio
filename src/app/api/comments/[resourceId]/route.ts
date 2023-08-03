import { db } from '@/lib/db';

export async function GET(
	req: Request,
	{ params }: { params: { resourceId: string } }
) {
	try {
		const { resourceId } = params;
		const comments = await db.comment.findMany({
			where: {
				resourceId,
			},
			orderBy: {
				createdAt: 'desc',
			},
		});

		return new Response(JSON.stringify(comments), {
			status: 200,
		});
	} catch (e) {
		if (e instanceof Error) {
			console.log(e.stack);
			return new Response(e.message, {
				status: 500,
			});
		}
	}
}
