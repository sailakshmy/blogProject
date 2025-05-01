import PostContent from "@/components/posts/postDetails/post-content";
import { getPostData, getPostFiles } from "@/lib/posts-util";
import React from "react";

const PostDetailsPage = ({ post }) => {
  console.log("post", post);
  return <PostContent post={post} />;
};

export default PostDetailsPage;

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFiles = getPostFiles();
  console.log("pis", postFiles);
  const slugs = postFiles?.map((postFile) => postFile.replace(/\.md$/, ""));
  return {
    paths: slugs?.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}
