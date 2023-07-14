import { CrumpledPaperIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';
import NavbarLink from './NavbarLink';

const Navbar: React.FC = () => {
	return (
		<div className='sticky top-0 inset-x-0 h-fit border-b z-50 bg-background'>
			<div className='container py-4 flex justify-between'>
				<Link href={'/'} className='flex items-center gap-3 w-fit'>
					<CrumpledPaperIcon className='w-8 h-8 sm:w-6 sm:h-6 hover:animate-spin' />
					<p className='text-2xl font-extralight hidden sm:inline-block'>
						Antek
					</p>
				</Link>
				<div className='flex items-center w-fit gap-4 justify-between text-xl font-light'>
					<NavbarLink href='/about'>About</NavbarLink>
					<NavbarLink href='/about'>About</NavbarLink>
					<NavbarLink href='/about'>About</NavbarLink>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
