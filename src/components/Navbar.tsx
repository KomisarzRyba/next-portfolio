'use client';

import { cn } from '@/lib/utils';
import { CodeIcon, CrumpledPaperIcon } from '@radix-ui/react-icons';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import ScrollLink from './ScrollLink';
import { buttonVariants } from './ui/button';

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
			className='sticky inset-x-0 top-0 z-50 h-16 border-b bg-background'
		>
			<div className='container flex justify-between h-full py-4'>
				<Link href={'/'} className='flex items-center gap-3 w-fit'>
					<CrumpledPaperIcon className='w-8 h-8 sm:w-6 sm:h-6' />
					<p className='hidden text-2xl font-extralight sm:inline-block'>
						Antek
					</p>
				</Link>
				<div className='items-center hidden h-full p-4 border rounded-md md:flex bg-secondary'>
					<CodeIcon className='w-6 h-6' />
					<p className='hidden ml-2 text-sm font-light md:block'>
						Preview site! Work in progress...
					</p>
				</div>
				<div className='flex items-center justify-between gap-3 w-fit'>
					<Link
						href={'/blog'}
						className={cn(
							buttonVariants({ variant: 'link' }),
							'text-muted-foreground hover:text-foreground text-xl font-light underline-offset-8 p-0'
						)}
					>
						notes
					</Link>
					<Link
						href={'/portfolio'}
						className={cn(
							buttonVariants({ variant: 'link' }),
							'text-muted-foreground hover:text-foreground text-xl font-light underline-offset-8 p-0'
						)}
					>
						projects
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
