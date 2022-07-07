import styles from "./ProjectCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from 'react-icons/bs';

export default function ProjectCard({ name, tech, url }) {
  
  return (
    <div className={styles.card}>
      <Image
        src="/staffing_app_screen.png"
        alt="application screenshot"
        layout="intrinsic"
        width={400}
        height={200}
      />
      <h6>{name}</h6>
      <ul>
        {tech.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
      <Link href={url} target="_blank">
        <BsGithub />
      </Link>
    </div>
  );
}
