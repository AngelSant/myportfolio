import { profile } from "@/data/portfolio";
import styles from "./page.module.css";

export default function ProyectosPage() {
  return (
    <section className={styles.projectsPage}>
      <div className={styles.pageHeader}>
        <p className="eyebrow">Proyectos</p>
        <h1>Soluciones que he desarrollado</h1>
        <p>
          Una selección de proyectos profesionales, institucionales e
          independientes donde he participado en desarrollo móvil, frontend,
          full-stack, cloud, integraciones y mantenimiento de plataformas.
        </p>
      </div>

      <div className={styles.projectsGrid}>
        {profile.projects.map((project) => (
          <article className={styles.projectCard} key={project.title}>
            <div className={styles.projectImage}>
              <span>{project.imageLabel}</span>
            </div>

            <div className={styles.projectContent}>
              <div className={styles.projectMeta}>
                <span>{project.type}</span>
                <strong>{project.status}</strong>
              </div>

              <h2>{project.title}</h2>
              <p>{project.description}</p>

              <div className={styles.projectHighlights}>
                <h3>Aspectos destacados</h3>
                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.projectStack}>
                {project.stack.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.projectActions}>
                {project.siteUrl ? (
                  <a
                    href={project.siteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.primaryButton}>
                    Ver proyecto
                  </a>
                ) : (
                  <span className={styles.disabledButton}>
                    Vista no disponible
                  </span>
                )}

                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.secondaryButton}>
                    Ver código
                  </a>
                ) : (
                  <span className={styles.disabledButton}>
                    Repositorio privado
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
