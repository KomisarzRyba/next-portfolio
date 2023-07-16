import fs from 'fs';
import matter from 'gray-matter';
import { all } from 'hast-util-to-html/lib';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'src/posts');

export const getPostsData = () => {
	const allTags = new Set<string>();
	const fileNames = fs.readdirSync(postsDir);
	const allPostsData = fileNames.map((fileName) => {
		const id = fileName.replace('.md', '');

		const fullPath = path.join(postsDir, fileName);
		const fileContent = fs.readFileSync(fullPath, 'utf8');

		const matterResult = matter(fileContent);

		for (let tag of matterResult.data.tags) {
			allTags.add(tag);
		}

		const post: Blogpost = {
			id,
			title: matterResult.data.title,
			date: matterResult.data.date,
			abstract: matterResult.data.abstract,
			tags: matterResult.data.tags,
		};

		return post;
	});
	allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1)); // for some fucking reason this mutates the array
	return { posts: allPostsData, allTags: Array.from(allTags) };
};

export const getPost = async (id: string) => {
	const fullPath = path.join(postsDir, `${id}.md`);
	const fileContent = fs.readFileSync(fullPath, 'utf8');
	const matterResult = matter(fileContent);
	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);
	const htmlContent = processedContent.toString();
	const postWithContent: Blogpost & { htmlContent: string } = {
		id,
		title: matterResult.data.title,
		date: matterResult.data.date,
		abstract: matterResult.data.abstract,
		tags: matterResult.data.tags,
		htmlContent,
	};
	return postWithContent;
};
