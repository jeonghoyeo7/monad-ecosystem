import projects from '../data/projects.json'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
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

        <footer className={styles.footer}>
          <div className={styles.footerLine}>
            Total projects: {projects.length}
          </div>
          <div className={styles.footerLine}>
            Made with love by port
          </div>
          <div className={styles.footerLine}>
            <a
              href="https://github.com/portdeveloper/monad-ecosystem"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              GitHub
            </a>
            {' · '}
            <a
              href="https://github.com/portdeveloper/monad-ecosystem/issues"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              Issues
            </a>
            {' · '}
            <a
              href="https://github.com/portdeveloper/monad-ecosystem/pulls"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              PRs
            </a>
          </div>
          <div className={styles.footerLine}>
            Last updated: November 4, 2025
          </div>
        </footer>
      </div>
    </main>
  )
}
