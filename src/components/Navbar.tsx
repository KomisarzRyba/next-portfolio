'use client';

import { cn } from '@/lib/utils';
import { CodeIcon, CrumpledPaperIcon } from '@radix-ui/react-icons';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import ScrollLink from './ScrollLink';
import { buttonVariants } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Alert } from './ui/alert';

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
				<div className='p-4 rounded-md h-full bg-secondary border flex items-center'>
					<CodeIcon className='w-6 h-6' />
					<p className='hidden md:block font-light text-s ml-4'>
						Preview site! Work in progress...
					</p>
				</div>
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
					{pathname === '/' ? (
						<ScrollLink targetId='contact'>contact</ScrollLink>
					) : (
						<Link
							href={'/#contact'}
							className={cn(
								buttonVariants({ variant: 'link' }),
								'text-muted-foreground hover:text-foreground text-xl font-light underline-offset-8 p-0'
							)}
						>
							contact
						</Link>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default Navbar;
