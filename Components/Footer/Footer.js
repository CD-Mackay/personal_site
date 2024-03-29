// Framework Imports
import Link from "next/link";

// Asset Imports
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

// CSS Imports
import styles from "./Footer.module.css";


export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.footer_text}>Connor Mackay</p>
        <Link href="https://github.com/CD-Mackay">
          <a target="_blank">
            <AiFillGithub fontSize="24px" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/connor-mackay-800992bb/">
          <a target="_blank">
            <AiFillLinkedin fontSize="24px" />
          </a>
        </Link>
      </div>
    </div>
  );
}
