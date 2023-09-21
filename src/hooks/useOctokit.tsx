import { Octokit } from '@octokit/rest';
import { createContext } from 'react';

const useOctokit = () => {
	const octokit = new Octokit({
		auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
		userAgent: 'portfolio-page',
	});
	const octokitContext = createContext<Octokit>(octokit);

	return { octokit, octokitContext };
};

export default useOctokit;
