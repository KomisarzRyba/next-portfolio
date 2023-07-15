import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import TechStackItem from './TechStackItem';
import { Icons } from './Icons';
import { ScrollArea } from './ui/scroll-area';
import { HeartFilledIcon } from '@radix-ui/react-icons';

const TechStack = () => {
	return (
		<Card className='h-fit bg-muted'>
			<CardHeader>
				<CardTitle className='text-center'>
					Tech I use and
					<HeartFilledIcon className='inline w-6 h-6 ml-2 text-red-500' />
				</CardTitle>
			</CardHeader>
			<CardContent>
				<Accordion type='single' defaultValue='webdev'>
					<AccordionItem value='webdev'>
						<AccordionTrigger>
							<h3 className='text-lg'>Web development</h3>
						</AccordionTrigger>
						<AccordionContent>
							<ScrollArea className='h-[300px] w-full rounded-md p-2'>
								<TechStackItem
									title='React'
									icon={
										<Icons.react className='inline w-8 h-8 mr-4' />
									}
								>
									I{"'"}ve been using React extensively since
									the beginning of my web development journey,
									and I truly enjoy it.
								</TechStackItem>
								<TechStackItem
									title='TypeScript'
									icon={
										<Icons.typescript className='inline w-8 h-8 mr-4' />
									}
								>
									No other language has made me feel as
									productive as TypeScript. I love the type
									safety. It make the code easier to maintain,
									and it{"'"}s a joy to work with.
								</TechStackItem>
								<TechStackItem
									title='Next.js'
									icon={
										<Icons.next className='inline w-8 h-8 mr-4' />
									}
								>
									Next.js is my go-to framework for building
									React apps. It{"'"}s easy to use, and I find
									the new app router intuitive.
								</TechStackItem>
								<TechStackItem
									title='Tailwind CSS'
									icon={
										<Icons.tailwind className='inline w-8 h-8 mr-4' />
									}
								>
									I love how easy it is to create beautiful,
									responsive UIs with Tailwind. I use it in
									all of my projects.
								</TechStackItem>
							</ScrollArea>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='gamedev'>
						<AccordionTrigger>
							<h3 className='text-lg'>Game development</h3>
						</AccordionTrigger>
						<AccordionContent>Hello</AccordionContent>
					</AccordionItem>
					<AccordionItem value='other'>
						<AccordionTrigger>
							<h3 className='text-lg'>Other tools</h3>
						</AccordionTrigger>
						<AccordionContent>Hello</AccordionContent>
					</AccordionItem>
				</Accordion>
			</CardContent>
		</Card>
	);
};

export default TechStack;
