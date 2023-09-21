import RepoCard from '@/components/RepoCard';
import { buttonVariants } from '@/components/ui/button';
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { FC } from 'react';

const PortfolioPage: FC = () => {
	return (
		<main>
			<header className='p-4 bg-scroll bg-repeat border-b bg-muted bg-project-pattern'>
				<Card className='container w-fit bg-background/80'>
					<CardHeader>
						<CardTitle>Stuff I make</CardTitle>
						<CardDescription>
							Take a look at some of the projects I have been
							working on.
						</CardDescription>
					</CardHeader>
					<CardFooter className='justify-center'>
						<Link
							href='https://github.com/KomisarzRyba'
							className={buttonVariants({ className: 'gap-2' })}
						>
							<GitHubLogoIcon className='w-4 h-4' />
							KomisarzRyba
						</Link>
					</CardFooter>
				</Card>
			</header>
			<section className='container grid items-center grid-cols-1 gap-8 py-12 md:grid-cols-2 xl:grid-cols-3'>
				<RepoCard
					repoName='chlebbit'
					demoUrl='https://chlebbit.vercel.app/'
				/>
				<RepoCard
					repoName='stork'
					overrides={{
						description:
							'RideStork: Winner of the Waymo challenge at ShellHacks 2023 Hackathon 🏆. A carpooling service created in just 36 hours!',
					}}
				/>
				<RepoCard
					demoUrl='https://trawomania.pl'
					overrides={{
						name: 'trawomania',
						description: (
							<span>
								Trawomania is a private project I am working on
								for a client in Poland. It is a custom site for
								his business. Features{' '}
								<a
									href='https://resend.com/'
									target='_blank'
									className='font-bold hover:underline'
								>
									Resend
								</a>{' '}
								and Google Maps integrations, and a custom cost
								calculator for customers.
							</span>
						),
					}}
				/>
			</section>
		</main>
	);
};

export default PortfolioPage;
