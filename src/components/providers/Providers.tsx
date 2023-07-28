'use client';

import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import OctokitProvider from './Octokit';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from '../ui/toaster';

const Providers = ({ children }: { children: React.ReactNode }) => {
	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<OctokitProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='dark' //this needs to be set to 'system'; temp fix
						enableSystem
					>
						<Toaster />
						{children}
					</ThemeProvider>
				</OctokitProvider>
			</QueryClientProvider>
		</>
	);
};

export default Providers;
