'use client';

import { ContactFormRequest, ContactFormValidator } from '@/lib/contact-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { motion } from 'framer-motion';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Button } from './ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { LoadingButton } from './ui/loading-button';
import { Textarea } from './ui/textarea';
import { toast } from './ui/use-toast';

const ContactForm: React.FC = () => {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors, isDirty },
	} = useForm<ContactFormRequest>({
		resolver: zodResolver(ContactFormValidator),
		defaultValues: {
			senderName: '',
			senderEmail: '',
			messageContent: '',
		},
	});

	const { mutate: sendMessage, isLoading } = useMutation({
		mutationFn: async (payload: ContactFormRequest) => {
			const apiUri = process.env.NEXT_PUBLIC_CONTACT_MAIL_API_URI;
			const { data } = await axios.post(apiUri!, payload);
			return data;
		},
		onError: (error: Error) => {
			console.log(error.message);
			toast({
				title: 'Something went wrong!',
				description:
					'Could not send the message at this time. Please try again later.',
				variant: 'destructive',
				duration: 5000,
			});
		},
		onSuccess: () => {
			reset();
			toast({
				title: 'Message sent!',
				description: 'I will get back to you as soon as possible.',
				duration: 5000,
			});
		},
	});

	return (
		<form onSubmit={handleSubmit((data) => sendMessage(data))}>
			<Card>
				<CardHeader>
					<CardTitle>let&apos;s get in touch!</CardTitle>
					<CardDescription>
						I would love to hear from you. Whether you&apos;d like
						to collaborate or just want to say hi, feel free to drop
						me a message.
					</CardDescription>
				</CardHeader>
				<CardContent className='grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4'>
					<div className='flex items-center space-x-4'>
						<Label className='font-light' htmlFor='name'>
							Name
						</Label>
						<Input
							id='name'
							{...register('senderName')}
							className='min-w-fit z-10'
						/>
						{errors.senderName && (
							<motion.p
								initial={{ opacity: 0, x: 40, y: 0 }}
								animate={{ opacity: 1, y: -40 }}
								className='absolute z-0 text-destructive text-xs font-medium'
							>
								{errors.senderName.message}
							</motion.p>
						)}
					</div>
					<div className='flex items-center space-x-4'>
						<Label className='font-light' htmlFor='email'>
							Email
						</Label>
						<Input
							id='email'
							{...register('senderEmail')}
							className='min-w-fit z-10'
						/>
						{errors.senderEmail && (
							<motion.p
								initial={{ opacity: 0, x: 40, y: 0 }}
								animate={{ opacity: 1, y: -40 }}
								className='absolute z-0 text-destructive text-xs font-medium'
							>
								{errors.senderEmail.message}
							</motion.p>
						)}
					</div>
					<div className='col-span-1 sm:col-span-2 space-y-2'>
						<Label className='font-light ' htmlFor='message'>
							Message
						</Label>
						<Textarea
							id='message'
							{...register('messageContent')}
							rows={5}
							className='resize-y'
						/>
						{errors.messageContent && (
							<motion.p
								initial={{ opacity: 0, x: 40, y: 0 }}
								animate={{ opacity: 1, y: -40 }}
								className='absolute z-0 text-destructive text-xs font-medium'
							>
								{errors.messageContent.message}
							</motion.p>
						)}
					</div>
				</CardContent>
				<CardFooter className='flex justify-end'>
					<LoadingButton type='submit' isLoading={isLoading}>
						Send
					</LoadingButton>
					<Button
						type='button'
						variant='secondary'
						disabled={!isDirty}
						className='ml-4'
						onClick={() => reset()}
					>
						Clear
					</Button>
				</CardFooter>
			</Card>
		</form>
	);
};

export default ContactForm;
