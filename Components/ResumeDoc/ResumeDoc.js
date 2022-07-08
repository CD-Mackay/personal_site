import styles from "./ResumeDoc.module.css";


export default function ResumeDoc() {
  return (
    <div className={styles.page}>
      <div className={styles.contact}>The blue side</div>
      <div className={styles.experience}>The white side</div>
    </div>
  );
}
