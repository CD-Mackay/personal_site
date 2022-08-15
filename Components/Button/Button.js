// CSS Imports
import styles from "./Button.module.css";

export default function Button({onClick, text}) {

  /**
   * A re-usable Button component to make global styling easier.
   */
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
}
