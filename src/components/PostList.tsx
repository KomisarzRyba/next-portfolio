'use client';

import React, { useEffect, useState } from 'react';
import PostThumbnail from './PostThumbnail';
import { Badge } from './ui/badge';
import { AnimatePresence, motion } from 'framer-motion';
import PostFilterMenu from './PostFilterMenu';

interface PostListProps {
	posts: Blogpost[];
	tags: string[];
}

const PostList: React.FC<PostListProps> = ({ posts, tags }) => {
	const [filter, setFilter] = useState<string[]>([]);
	const [displayPost, setDisplayPost] = useState<Blogpost[]>([...posts]);
	useEffect(() => {
		const filteredPosts = posts.filter((post) => {
			return filter.every((tag) => post.tags?.includes(tag));
		});
		setDisplayPost(filteredPosts);
	}, [filter]);
	return (
		<div>
			<div className='flex justify-between'>
				<div className='flex h-16 gap-2 py-4'>
					<AnimatePresence>
						{filter.length > 0 &&
							filter.map((tag) => (
								<motion.div
									key={tag}
									layout
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									exit={{ scale: 0 }}
								>
									<Badge
										className='cursor-pointer w-fit h-fit'
										onClick={() => {
											setFilter((prev) =>
												prev.filter((t) => t !== tag)
											);
										}}
									>
										{tag}
									</Badge>
								</motion.div>
							))}
					</AnimatePresence>
				</div>
				<PostFilterMenu
					tags={tags}
					filter={filter}
					setFilter={setFilter}
				/>
			</div>
			<div className='flex flex-col gap-8'>
				<AnimatePresence>
					{displayPost.map((post) => (
						<PostThumbnail
							key={post.id}
							post={post}
							activeTags={filter}
							setFilter={setFilter}
						/>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default PostList;
