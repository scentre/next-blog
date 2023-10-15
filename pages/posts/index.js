import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";

const DUMMY_POSTS = [
  {
    title: "welcome",
    slug: "we-are-one",
    image: "mypic.jpeg",
    excerpt: "nexjs is the most pppppp",
    date: "2023-03-10",
  },
  {
    title: "welcome",
    slug: "we-are-two",
    image: "mypic.jpeg",
    excerpt: "nexjs is the most pppppp",
    date: "2023-03-10",
  },
  {
    title: "welcome",
    slug: "we-are-three",
    image: "mypic.jpeg",
    excerpt: "nexjs is the most pppppp",
    date: "2023-03-10",
  },
  {
    title: "welcome",
    slug: "we-are-four",
    image: "mypic.jpeg",
    excerpt: "nexjs is the most pppppp",
    date: "2023-03-10",
  },
  {
    title: "welcome",
    slug: "we-are-five",
    image: "mypic.jpeg",
    excerpt: "nexjs is the most pppppp",
    date: "2023-03-10",
  },
];

function AllPostsPage({ posts }) {
  return <AllPosts post={posts} />;
}

export default AllPostsPage;

export function getStaticProps() {
  const allposts = getAllPosts();

  return {
    props: {
      posts: allposts,
    },
  };
}
