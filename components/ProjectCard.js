import styles from '@/styles/projects.module.css'
import { StarIcon } from '@/components/icons/icons.js'

export default function ProjectCard({
  name,
  desc,
  star_count,
  href,
  language,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <p>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </p>
        <p className={styles.stars}>
          {star_count}
          <StarIcon />
        </p>
      </div>
      <p className={styles.description}>{desc}</p>
      <span className={styles.language}>{language}</span>
    </div>
  )
}
