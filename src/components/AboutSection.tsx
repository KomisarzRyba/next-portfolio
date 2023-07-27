import TechStack from './TechStack';

const AboutSection = () => {
	return (
		<div id='about' className='py-12 grid gap-16 grid-cols-1'>
			<div>
				<h2 className='text-4xl pb-2 font-medium'>
					<span className='font-thin'>||</span> about me
				</h2>
				<div className='leading-8 max-w-2xl mx-auto flex flex-col h-full justify-center items-center'>
					<p className='py-2'>
						I{"'"}m a passionate full-stack developer with a knack
						for creating functional, and impactful experiences. With
						a vibrant blend of creativity and technical expertise, I
						thrive on turning ideas into reality and crafting
						solutions that bring a smile to your face.
					</p>
					<p className='py-2'>
						After just a few months of teaching myself the craft of
						programming, I was invited to join{' '}
						<a
							href='http://www.neurontherapy.io/'
							className='font-bold hover:underline underline-offset-2'
						>
							NeurON Therapy
						</a>{' '}
						as a developer. Thanks to my dilligence and passion for
						learning, I was able to quickly become a key member of
						the team, and was promoted to lead developer within 6
						months.
					</p>
				</div>
			</div>
			<TechStack />
		</div>
	);
};

export default AboutSection;
