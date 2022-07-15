import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <div className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.skills_grid}>
        <div className={styles.list}>
          <h3 className={styles.skill_header}>Languages</h3>
          <ul>
            <li>Javascript</li>
            <li>Ruby</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>
        <div className={styles.list}>
          <h3 className={styles.skill_header}>Libraries & Frameworks</h3>
          <ul>
            <li>ReactJS</li>
            <li>Ruby on Rails</li>
            <li>NextJS</li>
            <li>Jquery</li>
            <li>Ajax</li>
            <li>ExpressJs</li>
          </ul>
        </div>
        <div className={styles.list}>
          <h3 className={styles.skill_header}>Testing</h3>
          <ul>
            <li>Mocha/Chai</li>
            <li>Jest</li>
            <li>Cypress</li>
            <li>Storybook</li>
          </ul>
        </div>
        <div className={styles.list}>
          <h3 className={styles.skill_header}>Database Systems</h3>
          <ul>
            <li>SQL</li>
            <li>PostgreSQL</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <div className={styles.list}>
          <h3 className={styles.skill_header}>Source & Project Management</h3>
          <ul>
            <li>Github</li>
            <li>GitKraken</li>
            <li>Jira</li>
            <li>Jenkins</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
