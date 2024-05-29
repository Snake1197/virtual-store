import styles from "./Hero.module.css";

interface HeroProps {
  first: string;
  second: string;
}

function Hero({ first, second }: HeroProps) {
  return (
    <>
      <section className={styles["hero-section"]}>
        <article className={styles["hero-title"]}>
          <span className={styles["hero-span"]}>{first}</span>
          <span className={styles["hero-span"]}>{second}</span>
        </article>
      </section>
    </>
  );
}
export default Hero;
