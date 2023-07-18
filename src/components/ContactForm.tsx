'use client';

import { ContactFormRequest, ContactFormValidator } from '@/lib/contact-form';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { LoadingButton } from './ui/loading-button';
import { Textarea } from './ui/textarea';

const ContactForm: React.FC = () => {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors, isDirty },
	} = useForm<ContactFormRequest>({
		resolver: zodResolver(ContactFormValidator),
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
	});

	const sendMessage = async (data: ContactFormRequest) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit((data) => sendMessage(data))}>
			<Card className='w-fit'>
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
							{...register('name')}
							className='min-w-fit z-10'
						/>
						{errors.name && (
							<motion.p
								initial={{ opacity: 0, x: 40, y: 0 }}
								animate={{ opacity: 1, y: -40 }}
								className='absolute z-0 text-destructive text-xs font-medium'
							>
								{errors.name.message}
							</motion.p>
						)}
					</div>
					<div className='flex items-center space-x-4'>
						<Label className='font-light' htmlFor='email'>
							Email
						</Label>
						<Input
							id='email'
							{...register('email')}
							className='min-w-fit z-10'
						/>
						{errors.email && (
							<motion.p
								initial={{ opacity: 0, x: 40, y: 0 }}
								animate={{ opacity: 1, y: -40 }}
								className='absolute z-0 text-destructive text-xs font-medium'
							>
								{errors.email.message}
							</motion.p>
						)}
					</div>
					<div className='col-span-1 sm:col-span-2 space-y-2'>
						<Label className='font-light ' htmlFor='message'>
							Message
						</Label>
						<Textarea id='message' rows={5} className='resize-y' />
					</div>
				</CardContent>
				<CardFooter className='flex justify-end'>
					<LoadingButton type='submit'>Send</LoadingButton>
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
