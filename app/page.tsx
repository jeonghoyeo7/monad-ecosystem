import projects from '../data/projects.json'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.textWall}>
        {projects.map((project, index) => (
          <span key={index}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              {project.name}
            </a>
            {index < projects.length - 1 && ' '}
          </span>
        ))}
      </div>
    </main>
  )
}
