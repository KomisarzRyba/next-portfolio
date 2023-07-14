import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

interface NavbarLinkProps {
	href: string;
}

const NavbarLink: React.FC<PropsWithChildren<NavbarLinkProps>> = ({
	children,
	href,
}) => {
	return (
		<Link
			href={href}
			className='text-muted-foreground hover:text-foreground'
		>
			{children}
		</Link>
	);
};

export default NavbarLink;
