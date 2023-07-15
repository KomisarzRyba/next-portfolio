import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './ui/tooltip';

const HeroSection = () => {
	return (
		<div className='container h-[95vh] bg-secondary'>
			<div className='h-full flex items-center justify-around'>
				<div className='space-y-2'>
					<h1 className='text-8xl'>
						hi there! I{"'"}m{' '}
						<TooltipProvider>
							<Tooltip
								disableHoverableContent
								delayDuration={100}
							>
								<TooltipTrigger>Antek</TooltipTrigger>
								<TooltipContent>
									<p className='text-4xl p-4'>
										👂: [aan-tech]
									</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</h1>
					<h2 className='text-4xl font-light'>
						I{"'"}m a software developer
					</h2>
					<h2 className='text-lg font-extralight'>
						...and this is my slice of the internet 🍕
					</h2>
				</div>
			</div>
			{/* <ProjectList /> */}
		</div>
	);
};

export default HeroSection;
