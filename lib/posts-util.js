import fs from "fs";

import matter from "gray-matter";

const postsDirectory = `${process.cwd()}/posts`;

export function getPostData(fileName) {
  const postSlug = fileName.replace(/\.md$/, "");
  const filePath = `${postsDirectory}/${postSlug}.md`;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  let sortedPosts = allPosts.sort((a, b) => a.date > b.date);
  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  console.log("all", allPosts);
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
