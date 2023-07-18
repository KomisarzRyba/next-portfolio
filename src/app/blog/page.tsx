import PostList from '@/components/PostList';
import { getPostsData } from '@/lib/post-reader';

const page = () => {
	const { posts, allTags } = getPostsData();

	return (
		<main className='container max-w-2xl mt-4 mb-8'>
			<h1 className='text-6xl sm:8xl my-8'>
				my notes <span className='text-6xl'>📝</span>
			</h1>
			<PostList posts={posts} tags={allTags} />
		</main>
	);
};

export default page;
