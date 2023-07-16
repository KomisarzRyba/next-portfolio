'use client';

import Link from 'next/link';
import React from 'react';
import { buttonVariants } from './ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';
import { usePathname } from 'next/navigation';
import { getFormattedDateString } from '@/lib/date-formatter';
import { Badge } from './ui/badge';

interface PostThumbnailProps {
	post: Blogpost;
}

const PostThumbnail: React.FC<PostThumbnailProps> = ({ post }) => {
	const pathname = usePathname();
	return (
		<Card id={post.id} className='bg-card shadow-md'>
			<CardHeader>
				<CardTitle>{post.title}</CardTitle>
				<CardDescription className='pt-1 flex items-center'>
					{getFormattedDateString(post.date)}
					<div className='inline-flex gap-2 ml-4'>
						{post.tags?.map((tag) => (
							<Badge
								key={tag}
								variant='outline'
								className='font-light'
							>
								{tag}
							</Badge>
						))}
					</div>
				</CardDescription>
			</CardHeader>
			<CardContent>{post.abstract}</CardContent>
			<CardFooter className='flex gap-3'>
				<Link
					href={`${pathname}/post/${post.id}`}
					className={buttonVariants()}
				>
					Read more
				</Link>
			</CardFooter>
		</Card>
	);
};

export default PostThumbnail;
