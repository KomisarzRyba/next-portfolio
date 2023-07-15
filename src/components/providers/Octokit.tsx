'use client';

import { Octokit } from '@octokit/rest';
import React, { PropsWithChildren, createContext } from 'react';

const octokit = new Octokit({
	auth: process.env.GITHUB_TOKEN,
	userAgent: 'portfolio-page',
});
export const OctokitContext = createContext<Octokit>(octokit);

const OctokitProvider: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<OctokitContext.Provider value={octokit}>
			{children}
		</OctokitContext.Provider>
	);
};

export default OctokitProvider;
