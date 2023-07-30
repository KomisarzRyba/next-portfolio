'use client';

import useOctokit from '@/hooks/useOctokit';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useQuery } from 'react-query';
import ProjectCard from './ProjectCard';

type Repo = {
	id: string;
	name: string;
	description: string | null;
};

const ProjectList = () => {
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

	return (
		<div className='h-64 flex justify-center items-center gap-4'>
			{isFetching ? (
				<ReloadIcon className='w-32 h-32 animate-spin' />
			) : (
				data?.map((repo) => (
					<ProjectCard
						key={repo.id}
						title={repo.name}
						description={repo.description}
					/>
				))
			)}
		</div>
	);
};

export default ProjectList;
