import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './ui/tooltip';

const HeroSection = () => {
	return (
		<div className='container h-[92vh] bg-secondary rounded-b-xl border'>
			<div className='h-full flex items-center justify-around'>
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
									<p className='text-4xl p-4'>
										👂: [aan-tech]
									</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</h1>
					<h2 className='text-3xl sm:text-4xl font-light'>
						I{"'"}m a software developer
					</h2>
					<h2 className='text-lg font-extralight'>
						...and this is my slice of the internet{' '}
						<span className='text-2xl'>🍕</span>
					</h2>
				</div>
			</div>
			{/* <ProjectList /> */}
		</div>
	);
};

export default HeroSection;
