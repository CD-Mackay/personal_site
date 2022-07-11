import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <div className={styles.skills}>
      <h3>Skills</h3>
      <div className={styles.skills_grid}>
        <div className={styles.list}>
          <h5>Languages</h5>
          <ul>
            <li>Javascript</li>
            <li>Ruby</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>
        <div className={styles.list}>
          <h5>Libraries & Frameworks</h5>
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
          <h5>Testing</h5>
          <ul>
            <li>Mocha/Chai</li>
            <li>Jest</li>
            <li>Cypress</li>
            <li>Storybook</li>
          </ul>
        </div>
        <div className={styles.list}>
          <h5>Database Systems</h5>
          <ul>
            <li>SQL</li>
            <li>PostgreSQL</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <div className={styles.list}>
          <h5>Source & Project Management</h5>
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
