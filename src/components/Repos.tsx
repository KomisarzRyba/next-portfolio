'use client';

import useOctokit from '@/hooks/useOctokit';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useQuery } from 'react-query';
import RepoCard from './RepoCard';

type Repo = {
	id: string;
	name: string;
	description: string | null;
};

const Repos = () => {
	const { octokit } = useOctokit();
	const { data, isFetching } = useQuery({
		queryFn: async () => {
			const res = await octokit.request('GET /users/KomisarzRyba/repos', {
				headers: {
					'X-GitHub-Api-Version': '2022-11-28',
				},
			});
			return res.data as Repo[];
		},
		queryKey: ['repos_query'],
	});

	return isFetching ? (
		<ReloadIcon className='w-32 h-32 animate-spin' />
	) : (
		data?.map((repo) => (
			<RepoCard
				key={repo.id}
				title={repo.name}
				description={repo.description}
			/>
		))
	);
};

export default Repos;
