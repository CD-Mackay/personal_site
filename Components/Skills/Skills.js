import ProjectCard from "../ProjectCard/ProjectCard";
import SkillsList from "../SkillsList/SkillsList";
import styles from "./Skills.module.css";

export default function Skills() {

  //// MAKE MINI COMPONENTS FOR EACH SUBHEADING W/LIST AND MAP OUT AN OBJECT DUUUUH

  const SKILLS_DATA = [
    {
      heading: "Languages",
      skills: ["Javascript", "Ruby", "HTML5", "CSS3"]
    },
    {
      heading: "Libraries & Frameworks",
      skills: ["ReactJS", "Ruby on Rails", "NextJS", "Jquery", "Ajax", "ExpressJs"]
    },
    {
      heading: "Testing",
      skills: ["Mocha/Chai", "Jest", "Cypress", "Storybook"]
    },
    {
      heading: "Database Systems",
      skills: ["SQL", "PostgreSQL", "GraphQL"]
    },
    {
      heading: "Source & Project Management",
      skills: ["Github", "GitKraken", "Jira", "Jenkins"]
    },
  ]
  return (
    <div className={styles.skills}>
      <h2 className={styles.skills_header}>Skills</h2>
      <div className={styles.skills_grid}>
        {SKILLS_DATA.map((skill, index) => {
          return <SkillsList heading={skill.heading} key={index} skills={skill.skills} />
        })}
      </div>
    </div>
  );
}
