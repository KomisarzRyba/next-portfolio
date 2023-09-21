import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import HeroSection from '@/components/HeroSection';

export default function Home() {
	return (
		<main className='container pb-12'>
			<HeroSection />
			<AboutSection />
			<ContactSection />
		</main>
	);
}
