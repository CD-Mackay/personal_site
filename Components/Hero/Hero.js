// CSS Imports
import styles from "./Hero.module.css";

export default function Hero() {

  /**
   * Renders Hero Component for homepage
   */
  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        <h1>Connor Mackay&#39;s Site</h1>
        <p className={styles.hero_body}>
          I am a full-stack developer specializing in ReactJs and other front-end
          technology. I have experience working with teams of a wide variety of
          disciplines and skills levels, and believe I am able to contribute in
          any professional environment.
        </p>
        <p className={styles.hero_body}>
          I have always had a lifelong fascination with how technology shapes
          our way of experiencing the world. This curiosity has led me to a
          career in web development, where I hope to put my passion and
          curiosity to use laying down the next stages of online infrastructure.
        </p>
      </div>
      <div />
    </div>
  );
}
