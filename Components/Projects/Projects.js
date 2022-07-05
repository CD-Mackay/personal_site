import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <div>
      <h3>Projects</h3>
      <ProjectCard name={"Staffify"} tech={["ReactJs"]}/>
      <ProjectCard name={"Notes App"} tech={["ReactJS", "DraftJS", "Axios", "Express", "Postgresql"]} />
      <ProjectCard name={"HelpMeHelpYou"} tech={["ReactJS", "Axios", "Rails", "Postgresql", "Socket.io"]} />
      <ProjectCard name={"Mini Arcade"}  tech={["ReactJS"]}/>
    </div>
  )
};