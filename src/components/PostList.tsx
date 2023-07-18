'use client';

import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import ActiveTags from './ActiveTags';
import PostFilterMenu from './PostFilterMenu';
import PostThumbnail from './PostThumbnail';

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
		<>
			<div className='flex h-fit pb-4 justify-between items-center'>
				<ActiveTags
					filter={filter}
					setFilter={setFilter}
					className='flex-1 p-2'
				/>
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
		</>
	);
};

export default PostList;
