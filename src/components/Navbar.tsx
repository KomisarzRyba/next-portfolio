'use client';

import { cn } from '@/lib/utils';
import { CodeIcon, CrumpledPaperIcon } from '@radix-ui/react-icons';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import ScrollLink from './ScrollLink';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { buttonVariants } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

const Navbar: React.FC = () => {
	const pathname = usePathname();
	const [hidden, setHidden] = React.useState(false);
	const { scrollY } = useScroll();
	useEffect(() => {
		scrollY.on('change', () => {
			const curr = scrollY.get();
			if (curr > 200 && curr > scrollY.getPrevious()) setHidden(true);
			else if (curr < scrollY.getPrevious()) setHidden(false);
		});
	}, []);

	return (
		<motion.div
			variants={{
				visible: {
					y: 0,
				},
				hidden: {
					y: -120,
				},
			}}
			animate={hidden ? 'hidden' : 'visible'}
			className='sticky top-0 inset-x-0 h-fit border-b z-50 bg-background'
		>
			<div className='container h-full py-4 flex justify-between'>
				<Link href={'/'} className='flex items-center gap-3 w-fit'>
					<CrumpledPaperIcon className='w-8 h-8 sm:w-6 sm:h-6' />
					<p className='text-2xl font-extralight hidden sm:inline-block'>
						Antek
					</p>
				</Link>
				<Popover>
					<PopoverTrigger>
						<Alert className='w-fit h-fit px-8 hover:bg-secondary text-left'>
							<CodeIcon className='w-4 h-4 mr-2' />
							<AlertTitle className='text-sm'>
								I&apos;m working on it!
							</AlertTitle>
							<AlertDescription className='text-xs'>
								This site is under construction.
							</AlertDescription>
						</Alert>
					</PopoverTrigger>
					<PopoverContent>
						<p className='text-sm'>
							You can check out my latest version of this website{' '}
							<a
								href='https://antek.dev'
								target='_blank'
								className='font-medium hover:underline underline-offset-2'
							>
								here
							</a>
							{'.'}
						</p>
					</PopoverContent>
				</Popover>
				<div className='flex items-center w-fit gap-6 justify-between'>
					{pathname === '/' ? (
						<ScrollLink targetId='about'>about</ScrollLink>
					) : (
						<Link
							href={'/#about'}
							className={cn(
								buttonVariants({ variant: 'link' }),
								'text-muted-foreground hover:text-foreground text-xl font-light underline-offset-8 p-0'
							)}
						>
							about
						</Link>
					)}
					<Link
						href={'/blog'}
						className={cn(
							buttonVariants({ variant: 'link' }),
							'text-muted-foreground hover:text-foreground text-xl font-light underline-offset-8 p-0'
						)}
					>
						notes
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default Navbar;
