import Link from "next/link";
import styles from "./Header.module.css";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  console.log(router.pathname);

  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        {router.pathname === "/resume" && (
          <p>
            To save as pdf: 1. Right click, click &lsquo;Print&lsquo; 2. Change
            Destination to &lsquo;Save as PDF&lsquo; 3. Press Save
          </p>
        )}
      </div>
      <nav className={styles.navigation}>
        {router.pathname === "/resume" && (
          <div className={styles.link}>
            <Link href="/">Home</Link>
          </div>
        )}
        {router.pathname === "/" && (
          <div className={styles.link}>
            <Link href="/resume">Resume</Link>
          </div>
        )}
      </nav>
    </div>
  );
}
