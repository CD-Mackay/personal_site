import SkillsList from "../SkillsList/SkillsList";
import styles from "./Skills.module.css";
import { SKILLS_DATA } from "../../public/data/data";

export default function Skills() {

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
