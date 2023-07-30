'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from '../ui/toaster';
import OctokitProvider from './Octokit';
import { ThemeProvider } from './ThemeProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<OctokitProvider>
					<ThemeProvider attribute='class' defaultTheme='system'>
						<Toaster />
						{children}
					</ThemeProvider>
				</OctokitProvider>
			</QueryClientProvider>
		</>
	);
};

export default Providers;
