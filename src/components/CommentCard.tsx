import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from './ui/card';
import { formatTimeToNow } from '@/lib/utils';
import { Comment } from 'prisma/prisma-client';

interface CommentProps {
	comment: Comment;
}

const CommentCard: React.FC<CommentProps> = ({ comment }) => {
	const { title, authorName, updatedAt, content } = comment;
	return (
		<Card className='h-full'>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>
					{`Posted ${formatTimeToNow(
						new Date(updatedAt)
					)} by ${authorName}`}
				</CardDescription>
			</CardHeader>
			<CardContent>{content}</CardContent>
		</Card>
	);
};

export default CommentCard;
