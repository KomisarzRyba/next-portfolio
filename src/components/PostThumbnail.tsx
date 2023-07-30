'use client';

import { getFormattedDateString } from '@/lib/date-formatter';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Badge } from './ui/badge';
import { buttonVariants } from './ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';
import { ScrollArea } from './ui/scroll-area';

interface PostThumbnailProps {
	post: Blogpost;
	activeTags: string[];
	setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

const PostThumbnail: React.FC<PostThumbnailProps> = ({
	post,
	activeTags,
	setFilter,
}) => {
	const pathname = usePathname();
	return (
		<motion.div
			layout
			initial={{ x: -1500 }}
			animate={{ x: 0 }}
			exit={{ x: -1500 }}
		>
			<Card id={post.id} className='bg-card shadow-md'>
				<CardHeader className='w-full'>
					<CardTitle>
						<Link
							href={`${pathname}/post/${post.id}`}
							className='hover:underline underline-offset-2'
						>
							{post.title}
						</Link>
					</CardTitle>
					<CardDescription className='py-1 flex items-center'>
						{getFormattedDateString(post.date)}
					</CardDescription>
					<ScrollArea orientation='horizontal'>
						<div className='py-1 flex flex-nowrap gap-2 w-full h-fit'>
							{post.tags?.map((tag) => (
								<Badge
									key={tag}
									variant={
										activeTags?.includes(tag)
											? 'default'
											: 'secondary'
									}
									className='cursor-pointer min-w-fit h-fit'
									onClick={() => {
										setFilter((prev) => {
											if (prev.includes(tag)) {
												return prev.filter(
													(t) => t !== tag
												);
											} else {
												return [...prev, tag];
											}
										});
									}}
								>
									{tag}
								</Badge>
							))}
						</div>
					</ScrollArea>
				</CardHeader>
				<CardContent>{post.abstract}</CardContent>
				<CardFooter className='flex gap-3 justify-end'>
					<Link
						href={`${pathname}/post/${post.id}`}
						className={buttonVariants()}
					>
						Read more
					</Link>
				</CardFooter>
			</Card>
		</motion.div>
	);
};

export default PostThumbnail;
