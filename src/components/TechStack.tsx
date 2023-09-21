import { Icons } from './Icons';
import TechStackItem from './TechStackItem';
import { ScrollArea } from './ui/scroll-area';

const TechStack = () => {
	return (
		<div className=''>
			<h2 className='pb-2 text-4xl font-medium'>
				<span className='font-thin'>||</span> tech I ❤️
			</h2>
			<ScrollArea className='h-[35vh] min-h-[200px] my-4 rounded-xl border bg-card'>
				<div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-4'>
					<TechStackItem
						title='React'
						icon={<Icons.react className='inline w-8 h-8 mr-4' />}
					>
						I&apos;ve been using React extensively since the
						beginning of my web development journey, and I truly
						enjoy it.
					</TechStackItem>
					<TechStackItem
						title='TypeScript'
						icon={
							<Icons.typescript className='inline w-8 h-8 mr-4' />
						}
					>
						No other language has made me feel as productive as
						TypeScript. It makes JavaScript easier to maintain, and
						it&apos;s a joy to work with.
					</TechStackItem>
					<TechStackItem
						title='Next.js'
						icon={<Icons.next className='inline w-8 h-8 mr-4' />}
					>
						Next.js is my go-to framework for building React apps.
						It &apos;s easy to use, and I find the new app router
						intuitive.
					</TechStackItem>
					<TechStackItem
						title='Tailwind CSS'
						icon={
							<Icons.tailwind className='inline w-8 h-8 mr-4' />
						}
					>
						I love how easy it is to create beautiful, responsive
						UIs with Tailwind. I use it in all of my projects.
					</TechStackItem>
					<TechStackItem
						title='React Query'
						icon={
							<Icons.reactQuery className='inline w-8 h-8 mr-4' />
						}
					>
						React Query is my favorite data fetching library.
						It&apos;s easy to use, and provides a lot of useful
						features out of the box.
					</TechStackItem>
					<TechStackItem
						title='Zod'
						icon={<Icons.zod className='inline w-8 h-8 mr-4' />}
					>
						Zod helps me write type-safe code. I use it for
						validating data from the server or from client-side
						forms.
					</TechStackItem>
					<TechStackItem
						title='Unity'
						icon={<Icons.unity className='inline w-8 h-8 mr-4' />}
					>
						Unity holds a special place in my heart. It opened the
						door to game programming for me. I am very familiar with
						the engine, and I use it to take part in game jams.
					</TechStackItem>
					<TechStackItem
						title='C&#35;'
						icon={<Icons.csharp className='inline w-8 h-8 mr-4' />}
					>
						C&#35; was the language I wrote my first line of code
						in. It introduced me to the OOP paradigm, and helped me
						understand the core concepts of programming.
					</TechStackItem>
					<TechStackItem
						title='PostgreSQL'
						icon={
							<Icons.postgres className='inline w-8 h-8 mr-4' />
						}
					>
						According to the 2023 StackOverflow survey, PostgreSQL
						is the most loved database among professional
						developers. I use it in all of my projects.
					</TechStackItem>
					<TechStackItem
						title='Lodash'
						icon={<Icons.lodash className='inline w-8 h-8 mr-4' />}
					>
						Lodash is an awesome utility library. Very useful when
						solving the puzzles from{' '}
						<a
							href='https://adventofcode.com/'
							target='_blank'
							className='font-medium hover:underline underline-offset-2'
						>
							Advent of Code
						</a>
						.
					</TechStackItem>
					<TechStackItem
						title='Git'
						icon={<Icons.git className='inline w-8 h-8 mr-4' />}
					>
						Version control is essential in software development.
						{` `}
						<code className='bg-muted-foreground text-muted py-0.5 px-1.5 rounded text-sm'>
							git reset HEAD~1
						</code>{' '}
						saved my butt more than once.
					</TechStackItem>
					<TechStackItem
						title='GitHub'
						icon={<Icons.github className='inline w-8 h-8 mr-4' />}
					>
						GitHub allows me for easy collaboration with my team. I
						also use it to host my personal projects. You can check
						them out{' '}
						<a
							href='https://github.com/KomisarzRyba'
							target='_blank'
							className='font-medium hover:underline underline-offset-2'
						>
							here
						</a>
						.
					</TechStackItem>
					<TechStackItem
						title='Vercel'
						icon={<Icons.vercel className='inline w-8 h-8 mr-4' />}
					>
						Vercel is like Apple of hosting. It offers an easy to
						use, and all-in-one solution for hosting Next.js apps,
						now offering some storage options as well. This site is
						hosted on Vercel.
					</TechStackItem>
					<TechStackItem
						title='Google'
						icon={<Icons.google className='inline w-8 h-8 mr-4' />}
					>
						<span className='font-medium'>This is not a joke.</span>{' '}
						In my opinion, it is crucial in the{' '}
						<span className='italic'>blazingly-fast</span> growing
						world of software development to be able to search the
						web for answers effectively.
					</TechStackItem>
				</div>
			</ScrollArea>
		</div>
	);
};

export default TechStack;
