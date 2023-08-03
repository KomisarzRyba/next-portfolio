'use client';

import { CommentRequest, CommentValidator } from '@/lib/comment';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { LoadingButton } from './ui/loading-button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Textarea } from './ui/textarea';
import { toast } from './ui/use-toast';
import { useSWRConfig } from 'swr';

interface CommentFieldProps {
	resourceId: string;
}

const CommentField: React.FC<CommentFieldProps> = ({ resourceId }) => {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors, isDirty },
	} = useForm<CommentRequest>({
		resolver: zodResolver(CommentValidator),
		defaultValues: {
			resourceId: resourceId,
			commentContent: '',
			commentTitle: '',
		},
	});

	const { mutate } = useSWRConfig();

	const { mutate: addComment, isLoading } = useMutation({
		mutationFn: async (payload: CommentRequest) => {
			const { data } = await axios.post('/api/comment', payload);
			return data;
		},
		onError: (error: Error) => {
			console.log(error.message);
			toast({
				title: 'Something went wrong!',
				description:
					'Could not register your comment at this time. Please try again later.',
				variant: 'destructive',
				duration: 5000,
			});
		},
		onSuccess: () => {
			reset();
			mutate(resourceId);
			toast({
				title: 'Comment added!',
				description: 'Thank you for your contribution.',
				duration: 5000,
			});
		},
	});

	return (
		<div className='flex justify-end'>
			<Popover>
				<PopoverTrigger asChild>
					<Button className='group-[open]:opacity-50'>
						Add comment
					</Button>
				</PopoverTrigger>
				<PopoverContent side='left' align='end'>
					<form
						onSubmit={handleSubmit((data) => addComment(data))}
						className='flex flex-col gap-4'
					>
						<div className='flex justify-between gap-2'>
							<Input
								className='text-2xl font-bold'
								placeholder='Title'
								{...register('commentTitle')}
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<Label htmlFor='content'>Comment</Label>
							<Textarea
								id='content'
								{...register('commentContent')}
								className='resize-y placeholder:text-destructive'
								placeholder={
									errors.commentContent &&
									errors.commentContent.message
								}
							/>
						</div>
						<div className='flex gap-2 items-center'>
							<Label htmlFor='author'>by</Label>
							<Input
								id='author'
								{...register('authorName')}
								className='placeholder:text-destructive'
								placeholder={
									errors.authorName &&
									errors.authorName.message
								}
							/>
						</div>
						<div className='flex justify-end gap-4'>
							<Button
								variant='outline'
								type='button'
								onClick={() => reset()}
							>
								Reset
							</Button>
							<LoadingButton type='submit' isLoading={isLoading}>
								Comment
							</LoadingButton>
						</div>
					</form>
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default CommentField;
