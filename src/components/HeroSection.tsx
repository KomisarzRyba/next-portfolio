import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './ui/tooltip';

const HeroSection = () => {
	return (
		<section className='container h-[92vh] bg-secondary rounded-b-xl border'>
			<div className='flex items-center justify-around h-full'>
				<div className='space-y-2'>
					<h1 className='text-6xl sm:text-8xl'>
						hi there! I{"'"}m{' '}
						<TooltipProvider>
							<Tooltip
								disableHoverableContent
								delayDuration={100}
							>
								<TooltipTrigger>Antek</TooltipTrigger>
								<TooltipContent>
									<p className='p-4 text-4xl'>
										👂: [aan-tech]
									</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</h1>
					<h2 className='text-3xl font-light sm:text-4xl'>
						I{"'"}m a software developer
					</h2>
					<h2 className='text-lg font-extralight'>
						...and this is my slice of the internet{' '}
						<span className='text-2xl'>🍕</span>
					</h2>
				</div>
			</div>
			{/* <ProjectList /> */}
		</section>
	);
};

export default HeroSection;
