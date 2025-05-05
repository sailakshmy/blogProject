import React from "react";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

const PostContent = ({ post }) => {
  // const DUMMY_POST = {
  //   slug: "getting-started-with-nextJs5",
  //   title: "Getting started with NextJS5",
  //   excerpt:
  //     "NextJS is a React framework for Production - it makes building full stack react apps and sites a breeze and ships with built-in SSR",
  //   image: "getting-started-nextjs.png",
  //   date: "2025-04-20",
  //   content: "# This is the markdown content for the first post",
  // };
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const custommRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={custommRenderers}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
