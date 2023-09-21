'use client';

import React, { PropsWithChildren, ReactNode } from 'react';
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
import useOctokit from '@/hooks/useOctokit';
import { useQuery } from 'react-query';
import { repo } from '@/lib/repo';
import { Skeleton } from './ui/skeleton';
import Image from 'next/image';

type RepoCardProps = {
	repoName?: string;
	demoUrl?: string;
	overrides?: RepoCardOverrides;
};

type RepoCardOverrides = {
	name?: string;
	description?: ReactNode;
};

const RepoCard: React.FC<PropsWithChildren<RepoCardProps>> = ({
	repoName,
	demoUrl,
	overrides,
	children,
}) => {
	const { octokit } = useOctokit();
	const { data } = useQuery({
		queryFn: async () => {
			const { data } = await octokit.request(
				'GET /repos/KomisarzRyba/' + repoName
			);
			return repo.parse(data);
		},
		queryKey: ['repo', repoName],
		enabled: !overrides || !!repoName,
	});
	return (
		<Card className='flex flex-col w-full h-full'>
			<CardHeader>
				<CardTitle>
					{overrides?.name || data?.name || (
						<div className='flex flex-col gap-1'>
							<Skeleton className='w-[25%] h-6' />
							<Skeleton className='w-full h-4' />
							<Skeleton className='h-4 w-[75%]' />
							<Skeleton className='w-[50%] h-4' />
						</div>
					)}
				</CardTitle>
				<CardDescription>
					{overrides?.description || data?.description}
				</CardDescription>
			</CardHeader>
			<CardContent className='flex-grow'>
				{children || (
					<div className='relative w-full h-[320px]'>
						<Image
							src={
								'/project-screenshots/' +
								(overrides?.name || data?.name) +
								'.png'
							}
							alt={
								'screenshot of a project: ' +
								(overrides?.name || data?.name)
							}
							placeholder='blur'
							blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNU+w8AAVEBJyqFqRcAAAAASUVORK5CYII='
							fill
						/>
					</div>
				)}
			</CardContent>
			<CardFooter>
				<div className='flex justify-start gap-2'>
					<Link
						href={demoUrl || '/'}
						target='_blank'
						className={buttonVariants({
							className:
								!demoUrl && 'pointer-events-none bg-primary/50',
						})}
					>
						{demoUrl ? 'Demo' : 'Demo coming soon...'}
					</Link>
					{data?.html_url && (
						<Link
							href={data?.html_url || '/'}
							target='_blank'
							className={buttonVariants({ variant: 'secondary' })}
						>
							<GitHubLogoIcon />
						</Link>
					)}
				</div>
			</CardFooter>
		</Card>
	);
};

export default RepoCard;
