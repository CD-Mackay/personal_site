import styles from './ProjectCard.module.css';

export default function ProjectCard({name, tech}) {
  return (
    <div className={styles.card}>
      <h6>{name}</h6>
      <ul>
        {tech.map((element, index) => {
          return <li key={index}>{element}</li>
        })}
      </ul>
    </div>
  )
};