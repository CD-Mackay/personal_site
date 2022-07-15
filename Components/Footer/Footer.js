import styles from "./Footer.module.css";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.footer_text}>Connor Mackay</p>
        <Link href="https://github.com/CD-Mackay"><AiFillGithub fontSize="24px" /></Link>
        <Link href="https://www.linkedin.com/in/connor-mackay-800992bb/">
          <AiFillLinkedin fontSize="24px" />
        </Link>
      </div>
    </div>
  );
}
