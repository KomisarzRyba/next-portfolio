import React from 'react';
import ProjectCard from './ProjectCard';

const HeroSection = () => {
	return (
		<div className='container h-96'>
			<div className='h-full flex items-center justify-around'>
				<div className='space-y-2'>
					<h1 className='text-7xl'>Hi there! I'm Antek</h1>
					<h2 className='text-2xl'>
						...and this is my slice of the internet
					</h2>
				</div>
			</div>
			<div className='flex justify-center gap-4'>
				<ProjectCard />
			</div>
		</div>
	);
};

export default HeroSection;
