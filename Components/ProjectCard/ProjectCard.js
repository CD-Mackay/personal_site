import styles from "./ProjectCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export default function ProjectCard({ name, tech, url, image, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.project_wrapper}>
          <Image
            src={image}
            alt="application screenshot"
            layout="responsive"
            width={400}
            height={200}
          />
        <h5>{name}</h5>
        {/* <ul>
          {tech.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul> */}
        <p>{description}</p>
        <h6>Technology</h6>
        <p>{tech}</p>
      </div>
      <div className={styles.anchor}>
        <Link href={url} target="_blank">
          <BsGithub fontSize="22px" />
        </Link>
      </div>
    </div>
  );
}
