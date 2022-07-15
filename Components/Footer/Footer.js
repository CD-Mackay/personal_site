import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.footer_text}>Connor Mackay</p>
        <Link href="https://github.com/CD-Mackay">Github</Link>
        <Link href="https://www.linkedin.com/in/connor-mackay-800992bb/">
          LinkedIn
        </Link>
      </div>
    </div>
  );
}
