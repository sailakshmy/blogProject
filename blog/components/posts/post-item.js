import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./post-item.module.css";

const PostItem = ({ post }) => {
  const { image, title, date, excerpt, slug } = post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  const imageAlt = `Image for ${title}`;
  const postPath = `/posts/${slug}`;
  return (
    <li className={styles.post}>
      <Link href={postPath}>
        <div className={styles.image}>
          <Image
            src={imagePath}
            alt={imageAlt}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <time>{formattedDate} </time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
