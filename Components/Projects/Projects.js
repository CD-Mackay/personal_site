import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.grid}>
        <ProjectCard
          name={"Staffify"}
          tech={["ReactJs"]}
          description="A human resources app for managing employees and teams. Employees can be assigned to projects, flagged for performance and affiliated with technical skills."
          url="https://github.com/CD-Mackay/staffing-app"
          image="/staffing_app_screen.png"
        />
        <ProjectCard
          name={"Notes App"}
          tech="ReactJS, DraftJS, Axios, Express, Postgresql"
          description="Intended as a practice project to expand my knowledge of React libraries, the Notes App uses DraftJS to allow rich text-editing. Notes can be categorized and searched for based on tags."
          url="https://github.com/CD-Mackay/notes-app"
          image="/notes_app_screen.png"
        />
        <ProjectCard
          name={"Mini Arcade"}
          tech={["ReactJS"]}
          description="Working with React in a way I am unfamiliar with. Inspired by a practice tic-tac-toe project I made, the concept was expanded into a series of mini-games."
          url="https://github.com/CD-Mackay/mini-arcade"
          image="/mini_arcade_screen.png"
        />
        <ProjectCard
          name={"HelpMeHelpYou"}
          tech="ReactJS, Axios, Rails, Posgresql, Socket.io"
          description="Collaborated with Alan Mak and Justin Chan. HelpMeHelpYou is a community based app, allowing helpful neighbors to connect with their neighbors in need. An anonymous chat function allows the poster to verify the helper before providing a physical address."
          url="https://github.com/alan-mak/HelpMeHelpYou"
          image="/helpmehelpyou.png"
        />
      </div>
    </div>
  );
}
