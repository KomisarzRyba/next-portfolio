'use client';

import { ChatBubbleIcon } from '@radix-ui/react-icons';
import axios from 'axios';
import { Comment } from 'prisma/prisma-client';
import React from 'react';
import useSWR from 'swr';
import CommentCard from './CommentCard';
import CommentField from './CommentField';

interface CommentSectionProps {
	resourceId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ resourceId }) => {
	const getAllComments = async (resourceId: string) =>
		(await axios.get(`/api/comments/${resourceId}`)).data;
	const { data } = useSWR(resourceId, getAllComments);
	const comments = data as Comment[];
	return (
		<div className='flex flex-col gap-8'>
			{comments && comments.length > 0 ? (
				<div className='space-y-8'>
					<div className='flex items-center gap-4'>
						<ChatBubbleIcon className='w-8 h-8' />
						<h2 className='text-2xl font-bold'>Comments</h2>
					</div>
					<div className='w-full flex flex-col gap-2'>
						{comments.map((comment) => (
							<CommentCard key={comment.id} comment={comment} />
						))}
					</div>
				</div>
			) : (
				<div className='flex items-center gap-4'>
					<ChatBubbleIcon className='w-8 h-8' />
					<h2 className='text-2xl font-bold'>No comments yet...</h2>
				</div>
			)}
			<CommentField resourceId={resourceId} />
		</div>
	);
};

export default CommentSection;
