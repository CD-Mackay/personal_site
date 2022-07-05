import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div>I am Header</div>
      <nav className={styles.navigation}>
        <div className={styles.link}>
          <Link href="/">Home</Link>
        </div>
        <div className={styles.link}>
          <Link href="/resume">Resume</Link>
        </div>
      </nav>
    </div>
  );
}
