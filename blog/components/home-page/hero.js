import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/Sai.png" alt="Sai" width={1000} height={1000} />
      </div>
      <h1>This is Sai</h1>
      <p>My first blog page</p>
    </section>
  );
};

export default Hero;
