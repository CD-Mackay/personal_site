import styles from "./ProjectCard.module.css";
import Image from "next/image";

export default function ProjectCard({ name, tech }) {
  
  return (
    <div className={styles.card}>
      <Image
        src="/staffing_app_screen.png"
        alt="application screenshot"
        layout="intrinsic"
        width={400}
        height={400}
      />
      <h6>{name}</h6>
      <ul>
        {tech.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </div>
  );
}
