import styles from "./ProjectCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export default function ProjectCard({ name, tech, url, image }) {
  return (
    <div className={styles.card}>
      <div>
        <Image
          src={image}
          alt="application screenshot"
          layout="intrinsic"
          width={400}
          height={200}
        />
        <h6 className={styles.header}>{name}</h6>
        <ul>
          {tech.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      </div>
      <div className={styles.anchor}>
        <Link href={url} target="_blank">
          <BsGithub />
        </Link>
      </div>
    </div>
  );
}
