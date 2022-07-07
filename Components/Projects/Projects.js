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
          image="/staffing_app_screen.png"
        />
        <ProjectCard
          name={"Notes App"}
          tech={["ReactJS", "DraftJS", "Axios", "Express", "Postgresql"]}
          url="https://github.com/CD-Mackay/notes-app"
          image="/staffing_app_screen.png"
        />
        <ProjectCard
          name={"HelpMeHelpYou"}
          tech={["ReactJS", "Axios", "Rails", "Postgresql", "Socket.io"]}
          url="https://github.com/alan-mak/HelpMeHelpYou"
          image="/mini_arcade_screen.png"
        />
        <ProjectCard
          name={"Mini Arcade"}
          tech={["ReactJS"]}
          url="https://github.com/CD-Mackay/mini-arcade"
          image="/mini_arcade_screen.png"
        />
      </div>
    </div>
  );
}
