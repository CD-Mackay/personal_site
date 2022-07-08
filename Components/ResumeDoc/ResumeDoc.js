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
      <div className={styles.experience}>
        <h3>Profile</h3>
        <p>
          A graduate from Lighthouse Labs Development program looking to turn a
          passion for technology into a long-term career. I am an enthusiastic,
          fast-learning team player seeking an entry level technology role
          supporting the development, testing and deployment of dynamic
          front-end interfaces for clients.
        </p>
        <h3>Skills</h3>
        <h3>Education</h3>
        <h3>Work Experience</h3>
        
      </div>
    </div>
  );
}
