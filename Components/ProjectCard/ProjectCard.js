import styles from "./ProjectCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export default function ProjectCard({ name, tech, url, image, description }) {

  return (
    <div className={styles.card}>
      <div className={styles.project_wrapper}>
        <div className={styles.image_wrapper}>
          <Image
            src={image}
            alt="application screenshot"
            layout="responsive"
            unoptimized={true}
            width={400}
            height={200}
          />
        </div>
        <h5 className={styles.project_header}>{name}</h5>
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
