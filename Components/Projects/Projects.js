import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <h3>Projects</h3>
      <div className={styles.grid}>
        <ProjectCard
          name={"Staffify"}
          tech={["ReactJs"]}
          url="https://github.com/CD-Mackay/staffing-app"
        />
        <ProjectCard
          name={"Notes App"}
          tech={["ReactJS", "DraftJS", "Axios", "Express", "Postgresql"]}
          url="https://github.com/CD-Mackay/notes-app"
        />
        <ProjectCard
          name={"HelpMeHelpYou"}
          tech={["ReactJS", "Axios", "Rails", "Postgresql", "Socket.io"]}
          url="https://github.com/alan-mak/HelpMeHelpYou"
        />
        <ProjectCard
          name={"Mini Arcade"}
          tech={["ReactJS"]}
          url="https://github.com/CD-Mackay/mini-arcade"
        />
      </div>
    </div>
  );
}
