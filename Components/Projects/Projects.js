import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <div>
      <h3>Projects</h3>
      <ProjectCard name={"Staffify"} />
      <ProjectCard name={"Notes App"} />
      <ProjectCard name={"HelpMeHelpYou"} />
      <ProjectCard name={"Mini Arcade"} />
    </div>
  )
};