import styles from './ProjectCard.module.css';

export default function ProjectCard({name}) {
  return (
    <div className={styles.card}>
      <h6>{name}</h6>
    </div>
  )
};