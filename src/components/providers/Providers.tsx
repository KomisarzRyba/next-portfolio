'use client';

import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import OctokitProvider from './Octokit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Providers = ({ children }: { children: React.ReactNode }) => {
	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<OctokitProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
					>
						{children}
					</ThemeProvider>
				</OctokitProvider>
			</QueryClientProvider>
		</>
	);
};

export default Providers;
