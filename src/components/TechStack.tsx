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
									productive as TypeScript. Type safety is a
									game-changer. It make the code easier to
									maintain, and it{"'"}s a joy to work with.
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
								<TechStackItem
									title='React Query'
									icon={
										<Icons.reactQuery className='inline w-8 h-8 mr-4' />
									}
								>
									React Query is my favorite data fetching
									library. It{"'"}s easy to use, and provides
									a lot of useful features out of the box.
								</TechStackItem>
								<TechStackItem
									title='Zod'
									icon={
										<Icons.zod className='inline w-8 h-8 mr-4' />
									}
								>
									Zod helps me write type-safe code. I use it
									for validating data from the server or from
									client-side forms.
								</TechStackItem>
							</ScrollArea>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='gamedev'>
						<AccordionTrigger>
							<h3 className='text-lg'>Game development</h3>
						</AccordionTrigger>
						<AccordionContent>
							<ScrollArea className='h-[300px] w-full rounded-md p-2'>
								<TechStackItem
									title='Unity'
									icon={
										<Icons.unity className='inline w-8 h-8 mr-4' />
									}
								>
									Unity holds a special place in my heart. It
									opened the door to game programming for me.
									I am very familiar with the engine, and I
									use it to take part in game jams.
								</TechStackItem>
								<TechStackItem
									title='C&#35;'
									icon={
										<Icons.csharp className='inline w-8 h-8 mr-4' />
									}
								>
									C&#35; was the language I wrote my first
									line of code in. It introduced me to the OOP
									paradigm, and helped me understand the core
									concepts of programming.
								</TechStackItem>
							</ScrollArea>
						</AccordionContent>
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
