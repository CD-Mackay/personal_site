// Component Imports
import SkillsList from "../SkillsList/SkillsList";

// Asset Imports
import { SKILLS_DATA } from "../../public/data/data";

// CSS Imports
import styles from "./Skills.module.css";

export default function Skills() {

  /**
   * Renders Wrapper component for lists of skills. 
   * * Imports data from public/data and maps to produce <SkillsList /> Components.
   */
  return (
    <div className={styles.skills}>
      <h2 className={styles.skills_header}>Skills</h2>
      <div className={styles.skills_grid}>
        {SKILLS_DATA.map((skill, index) => {
          return (
            <SkillsList
              heading={skill.heading}
              key={index}
              skills={skill.skills}
            />
          );
        })}
      </div>
    </div>
  );
}
