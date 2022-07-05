import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        Hi there! Im Connor and I make websites!
      </div>
    </div>
  );
}
