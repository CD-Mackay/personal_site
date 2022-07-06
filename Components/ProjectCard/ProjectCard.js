import styles from "./ProjectCard.module.css";
import Image from "next/image";

export default function ProjectCard({ name, tech }) {
  
  return (
    <div className={styles.card}>
      <Image
        src="https://github.com/CD-Mackay/personal_site/blob/main/public/mini_arcade_screen.png"
        alt="application screenshot"
        layout="fill"
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
