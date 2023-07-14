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

interface ProjectCardProps {}

const ProjectCard: React.FC<ProjectCardProps> = ({}) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Title</CardTitle>
				<CardDescription>Short description</CardDescription>
			</CardHeader>
			<CardContent>Content</CardContent>
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
