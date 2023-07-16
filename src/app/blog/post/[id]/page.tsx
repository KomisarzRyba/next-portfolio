import { buttonVariants } from '@/components/ui/button';
import { getFormattedDateString } from '@/lib/date-formatter';
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

export const generateStaticParams = () => {
	const posts = getPostsData();
	return posts.map((post) => ({
		id: post.id,
	}));
};

export const generateMetadata = ({ params }: PostPageProps) => {
	const posts = getPostsData();
	const { id } = params;
	const post = posts.find((post) => post.id === id);
	const title = post ? post.title : 'Post not found';
	const metadata: Metadata = {
		title,
	};
	return metadata;
};

const page: React.FC<PostPageProps> = async ({ params }) => {
	const posts = getPostsData();
	const { id } = params;

	if (!posts.find((post) => post.id === id)) {
		return notFound();
	}

	const { title, date, htmlContent } = await getPost(id);
	const pubDate = getFormattedDateString(date);

	return (
		<main className='container prose prose-xl mt-8'>
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
			<article className='my-16'>
				<section
					dangerouslySetInnerHTML={{
						__html: htmlContent,
					}}
				/>
			</article>
		</main>
	);
};

export default page;
