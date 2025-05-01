import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostFiles = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostData = (postIdentifier) => {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postContent = {
    slug: postSlug,
    ...data,
    content,
  };
  return postContent;
};

export const getAllPosts = () => {
  const postFiles = getPostFiles();
  const sortedPosts = postFiles
    .map((postFile) => getPostData(postFile))
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return sortedPosts;
};

export const getAllFeaturedPosts = () => {
  const allPosts = getAllPosts();
  return allPosts?.filter((post) => post.isFeatured);
};
