import styles from "./Button.module.css";

export default function Button({onClick, text}) {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
}
