import { PropsWithChildren, ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Icons } from './Icons';

interface TechStackItemProps {
	title: string;
	icon: ReactNode;
}

const TechStackItem: React.FC<PropsWithChildren<TechStackItemProps>> = ({
	title,
	icon,
	children,
}) => {
	return (
		<Card className='my-2 first:mt-0 last:mb-0'>
			<CardHeader>
				<CardTitle>
					{icon}
					{title}
				</CardTitle>
			</CardHeader>
			<CardContent className='leading-6'>{children}</CardContent>
		</Card>
	);
};

export default TechStackItem;
