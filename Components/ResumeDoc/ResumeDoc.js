import Link from "next/link";
import styles from "./ResumeDoc.module.css";

export default function ResumeDoc() {
  return (
    <div className={styles.page}>
      <div className={styles.contact}>
        <h2>Connor Mackay</h2>
        <h6>Toronto Web Developer</h6>
        <p>Contact</p>
        <p>647-393-4597</p>
        <p>connor.mackay@gmail.com</p>
        <div className={styles.links}>
          <Link href="">Github: CD-Mackay</Link>
          <Link href="">Linkedin: Connor Mackay</Link>
        </div>
      </div>
      <div className={styles.experience}>The white side</div>
    </div>
  );
}
