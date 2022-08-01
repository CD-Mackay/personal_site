import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
import { PROJECT_DATA } from "../../public/data/data";
export default function Projects() {

  return (
    <div className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.grid}>
        {PROJECT_DATA.map((proj, index) => {
          return (
            <ProjectCard
              key={index}
              name={proj.name}
              tech={proj.tech}
              description={proj.description}
              url={proj.url}
              image={proj.image}
            />
          );
        })}
      </div>
    </div>
  );
}
