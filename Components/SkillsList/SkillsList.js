// CSS Imports
import styles from "./SkillsList.module.css";

export default function SkillsList({ heading, skills }) {

  /**
   * Renders list of skills for applicable category. 
   * * Child component of <Skills />, recieves props from <Skills />
   */
  return (
    <div className={styles.list}>
      <h3 className={styles.skill_header}>{heading}</h3>
      <ul>
        {skills.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
    </div>
  );
}
