import { DotFilledIcon, DotIcon } from '@radix-ui/react-icons';
import TechStack from './TechStack';

const AboutSection = () => {
	return (
		<div className='container py-12 grid gap-12 grid-cols-1 md:grid-cols-2'>
			<div id='about' className='text-lg leading-8'>
				<div className='flex items-center'>
					<DotFilledIcon className='inline w-8 h-8 mr-4 text-muted-foreground' />
					<h2 className='text-4xl pb-2'>a little about me</h2>
				</div>
				<p className='py-4'>
					I{"'"}m a passionate full-stack developer with a knack for
					creating functional, and impactful experiences. With a
					vibrant blend of creativity and technical expertise, I
					thrive on turning ideas into reality and crafting solutions
					that bring a smile to your face.
				</p>
				<p className='py-4'>
					After just a few months of teaching myself the craft of
					programming, I was invited to join{' '}
					<a
						href='http://www.neurontherapy.io/'
						className='font-semibold hover:underline underline-offset-2'
					>
						NeurON Therapy
					</a>{' '}
					as a developer. Thanks to my dilligence and passion for
					learning, I was able to quickly become a key member of the
					team, and was promoted to lead developer within 6 months.
				</p>
			</div>
			<TechStack />
		</div>
	);
};

export default AboutSection;
