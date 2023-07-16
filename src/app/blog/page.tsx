import PostThumbnail from '@/components/PostThumbnail';
import { getSortedPostsData } from '@/lib/post-reader';

const page = () => {
	const posts = getSortedPostsData();

	return (
		<main className='container my-4'>
			<h1 className='text-7xl my-8'>
				my notes <span className='text-6xl'>📝</span>
			</h1>
			<div className='flex flex-col gap-8'>
				{posts.map((post) => (
					<PostThumbnail post={post} />
				))}
			</div>
		</main>
	);
};

export default page;
