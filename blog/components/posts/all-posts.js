import React from "react";
import styles from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

const AllPosts = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts Page</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
