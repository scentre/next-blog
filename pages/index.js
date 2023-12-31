import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-post";
import { getAllPosts, getFeaturedPosts } from "@/lib/posts-util";

const inter = Inter({ subsets: ["latin"] });

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

export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  console.log(featuredPosts);
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 6100,
  };
}
