import Providers from '@/components/providers/Providers';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Antek',
	description: "Antek's dev portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning className='scroll-smooth'>
			<body className={cn(inter.className, 'antialiased')}>
				<Navbar />
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
