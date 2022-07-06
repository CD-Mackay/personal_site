import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        <h1>Connor Mackay</h1>
        <p>Toronto based Web Developer</p>
      </div>
    </div>
  );
}
