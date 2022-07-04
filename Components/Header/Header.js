import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div>I am Header</div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/resume">Resume</Link>
      </nav>
    </div>
  );
}
