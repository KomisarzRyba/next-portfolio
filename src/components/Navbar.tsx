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
	});

	return (
		<motion.div
			variants={{
				visible: {
					y: 0,
				},
				hidden: {
					y: -64,
				},
			}}
			animate={hidden ? 'hidden' : 'visible'}
			className='sticky top-0 inset-x-0 h-16 border-b z-50 bg-background'
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
						<div className='p-4 rounded-md h-full border flex items-center'>
							<CodeIcon className='w-6 h-6' />
							<p className='hidden sm:block font-light text-xs ml-4'>
								I&apos;m working on it...
							</p>
						</div>
					</PopoverTrigger>
					<PopoverContent className='mt-4'>
						<p className='sm:hidden text-lg'>
							I&apos;m working on it...
						</p>
						<p className='text-sm'>
							You can check out my latest version of this website{' '}
							<a
								href='https://antek.dev'
								target='_blank'
								className='font-bold hover:underline underline-offset-2'
							>
								here
							</a>
							{'.'}
						</p>
					</PopoverContent>
				</Popover>
				<div className='flex items-center w-fit gap-3 justify-between'>
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
