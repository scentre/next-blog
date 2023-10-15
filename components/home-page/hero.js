import classes from "./hero.module.css";
import Image from "next/image";
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/mypic.jpeg"
          alt="my image"
          width={300}
          height={300}
        />
      </div>

      <h1>hi im ebuka</h1>
      <p>i blog about web development</p>
    </section>
  );
};

export default Hero;
