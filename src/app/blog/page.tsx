import PostList from '@/components/PostList';
import { getPostsData } from '@/lib/post-reader';

const page = () => {
	const { posts, allTags } = getPostsData();

	return (
		<main className='container max-w-2xl mt-4 mb-8'>
			<h1 className='text-4xl sm:text-6xl my-8'>my notes 📝</h1>
			<PostList posts={posts} tags={allTags} />
		</main>
	);
};

export default page;
