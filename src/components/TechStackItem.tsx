import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { cn } from '@/lib/utils';

interface TechStackItemProps extends HTMLAttributes<HTMLDivElement> {
	title: string;
	icon: ReactNode;
}

const TechStackItem: React.FC<PropsWithChildren<TechStackItemProps>> = ({
	title,
	icon,
	children,
	className,
	...props
}) => {
	return (
		<Card className={cn(className, 'bg-secondary')} {...props}>
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
