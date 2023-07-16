'use client';

import { CrumpledPaperIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React, { useEffect } from 'react';
import ScrollLink from './ScrollLink';
import { motion, useScroll } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

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
					y: -100,
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
