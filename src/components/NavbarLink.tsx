import React, { PropsWithChildren } from 'react';
import { Button } from './ui/button';

interface NavbarLinkProps {
	targetId: string;
}

const NavbarLink: React.FC<PropsWithChildren<NavbarLinkProps>> = ({
	children,
	targetId,
}) => {
	return (
		<Button
			variant='link'
			className='text-muted-foreground hover:text-foreground text-xl font-light p-0'
			onClick={() => {
				const target = document.getElementById(targetId);
				window.scrollTo({
					top: target?.offsetTop,
					behavior: 'smooth',
				});
			}}
		>
			{children}
		</Button>
	);
};

export default NavbarLink;
