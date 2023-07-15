import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

interface ProjectCardProps {
	title: string;
	description?: string | null;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
	return (
		<Card className='h-full flex flex-col'>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className='flex-grow'>
				<p>Content</p>
			</CardContent>
			<CardFooter>
				<div className='flex justify-start gap-2'>
					<Link href={'/'} className={buttonVariants()}>
						Demo
					</Link>
					<Link
						href={'/'}
						className={buttonVariants({ variant: 'secondary' })}
					>
						<GitHubLogoIcon />
					</Link>
				</div>
			</CardFooter>
		</Card>
	);
};

export default ProjectCard;
