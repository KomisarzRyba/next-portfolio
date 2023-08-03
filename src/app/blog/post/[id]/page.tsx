import CommentSection from '@/components/CommentSection';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { getFormattedDateString } from '@/lib/date-formatter';
import { db } from '@/lib/db';
import { getPost, getPostsData } from '@/lib/post-reader';
import { cn } from '@/lib/utils';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

interface PostPageProps {
	params: {
		id: string;
	};
}

export const generateStaticParams = async () => {
	const { posts } = getPostsData();

	try {
		await db.resource.createMany({
			data: posts.map((post) => ({
				id: post.id,
				createdAt: new Date(post.date),
			})),
			skipDuplicates: true,
		});
	} catch (error) {
		console.error(error);
	}

	return posts.map((post) => ({
		id: post.id,
	}));
};

export const generateMetadata = ({ params }: PostPageProps) => {
	const { posts } = getPostsData();
	const { id } = params;
	const post = posts.find((post) => post.id === id);
	const title = post?.title ?? 'Post not found';
	const abstract = post?.abstract ?? 'Post not found';
	const metadata: Metadata = {
		title,
		abstract,
	};
	return metadata;
};

const page: React.FC<PostPageProps> = async ({ params }) => {
	const { posts } = getPostsData();
	const { id } = params;

	if (!posts.find((post) => post.id === id)) {
		return notFound();
	}

	const { title, date, htmlContent } = await getPost(id);
	const pubDate = getFormattedDateString(date);

	return (
		<div className='my-12 container'>
			<main className='prose mx-auto dark:prose-invert prose-xl'>
				<div className='bg-secondary rounded-md px-8 py-4 flex items-center'>
					<Link
						href={'/blog'}
						className={cn(
							buttonVariants({
								variant: 'outline',
							}),
							'hidden sm:flex'
						)}
					>
						<ArrowLeftIcon />
					</Link>
					<div className='flex flex-col justify-center ml-6'>
						<h1 className='text-2xl sm:text-3xl mb-0'>{title}</h1>
						<p className='my-0 text-lg font-light'>
							Posted by Antek on {pubDate}
						</p>
					</div>
				</div>
				<article className='my-12'>
					<section
						dangerouslySetInnerHTML={{
							__html: htmlContent,
						}}
					/>
				</article>
			</main>
			<Separator className='my-8' />
			<section className='max-w-2xl mx-auto'>
				<CommentSection resourceId={id} />
			</section>
		</div>
	);
};

export default page;
