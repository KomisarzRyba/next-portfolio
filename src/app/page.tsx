import AboutSection from '@/components/AboutSection';
import ContactForm from '@/components/ContactForm';
import HeroSection from '@/components/HeroSection';

export default function Home() {
	return (
		<div className='container pb-12'>
			<HeroSection />
			<AboutSection />
			<ContactForm />
		</div>
	);
}
