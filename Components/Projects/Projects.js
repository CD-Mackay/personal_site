// Component Imports
import ProjectCard from "../ProjectCard/ProjectCard";

// Asset Imports
import { PROJECT_DATA } from "../../public/data/data";

// CSS Imports
import styles from "./Projects.module.css";

export default function Projects() {

  /**
   * Grid component for displaying completed projects. Located on homepage.
   * * Imports data from public/data and maps to produce <ProjectCard /> Components
   */
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
