import useOctokit from '@/hooks/useOctokit';
import React, { PropsWithChildren, createContext } from 'react';

const OctokitProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const { octokit, octokitContext } = useOctokit();
	return (
		<octokitContext.Provider value={octokit}>
			{children}
		</octokitContext.Provider>
	);
};

export default OctokitProvider;
