import React from "react";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

const PostContent = () => {
  const DUMMY_POST = {
    slug: "getting-started-with-nextJs5",
    title: "Getting started with NextJS5",
    excerpt:
      "NextJS is a React framework for Production - it makes building full stack react apps and sites a breeze and ships with built-in SSR",
    image: "getting-started-nextjs.png",
    date: "2025-04-20",
    content: "# This is the markdown content for the first post",
  };
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
