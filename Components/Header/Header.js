import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.header_content}>
          <p>To save as pdf:   1. Right click, click &lsquo;Print&lsquo;   2. Change Destination to &lsquo;Save as PDF&lsquo;   3. Press Save</p>
          </div>
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
