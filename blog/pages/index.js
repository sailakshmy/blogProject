import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import React from "react";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextJs",
    title: "Getting started with NextJS",
    excerpt:
      "NextJS is a React framework for Production - it makes building full stack react apps and sites a breeze and ships with built-in SSR",
    image: "getting-started-nextjs.png",
    date: "2025-04-20",
  },
  {
    slug: "getting-started-with-nextJs2",
    title: "Getting started with NextJS 2",
    excerpt:
      "NextJS is a React framework for Production - it makes building full stack react apps and sites a breeze and ships with built-in SSR",
    image: "getting-started-nextjs.png",
    date: "2025-04-20",
  },
  {
    slug: "getting-started-with-nextJs3",
    title: "Getting started with NextJS3",
    excerpt:
      "NextJS is a React framework for Production - it makes building full stack react apps and sites a breeze and ships with built-in SSR",
    image: "getting-started-nextjs.png",
    date: "2025-04-20",
  },
  {
    slug: "getting-started-with-nextJs4",
    title: "Getting started with NextJS4",
    excerpt:
      "NextJS is a React framework for Production - it makes building full stack react apps and sites a breeze and ships with built-in SSR",
    image: "getting-started-nextjs.png",
    date: "2025-04-20",
  },
  {
    slug: "getting-started-with-nextJs5",
    title: "Getting started with NextJS5",
    excerpt:
      "NextJS is a React framework for Production - it makes building full stack react apps and sites a breeze and ships with built-in SSR",
    image: "getting-started-nextjs.png",
    date: "2025-04-20",
  },
];

const Homepage = () => {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </div>
  );
};

export default Homepage;
