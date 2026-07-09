import { profile } from "@/data/portfolio";
import styles from "./page.module.css";

export default function LicenciasCertificacionesPage() {
  return (
    <section className={styles.certificationsPage}>
      <div className={styles.pageHeader}>
        <p className="eyebrow">Licencias y certificaciones</p>

        <h1>Formación continua y validación técnica</h1>

        <p>
          Espacio dedicado a certificaciones, licencias, cursos y constancias
          que respaldan mi formación profesional, aprendizaje continuo y
          especialización en distintas áreas del desarrollo de software.
        </p>
      </div>

      <div className={styles.certificationsGrid}>
        {profile.certifications.map((certification) => (
          <article
            className={styles.certificationCard}
            key={certification.title}>
            <div className={styles.certificateImage}>
              <span>{certification.imageLabel}</span>
            </div>

            <div className={styles.certificateContent}>
              <div className={styles.certificateMeta}>
                <span>{certification.type}</span>
                <strong>{certification.date}</strong>
              </div>

              <h2>{certification.title}</h2>

              <p className={styles.issuer}>
                Impartido por: <strong>{certification.issuer}</strong>
              </p>

              <p className={styles.description}>{certification.description}</p>

              <div className="chipList">
                {certification.skills.map((skill) => (
                  <span className="chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

              <div className={styles.certificateActions}>
                {certification.credentialUrl ? (
                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.primaryButton}>
                    Ver credencial
                  </a>
                ) : (
                  <span className={styles.disabledButton}>
                    Enlace pendiente
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className={styles.learningSection}>
        <p className="eyebrow">Aprendizaje continuo</p>

        <h2>Me mantengo en constante actualización</h2>

        <p>
          Además de mi experiencia práctica en proyectos reales, sigo
          fortaleciendo mis conocimientos en desarrollo móvil, frontend,
          backend, cloud, arquitectura de software, UX/UI, ciberseguridad e
          inteligencia artificial aplicada.
        </p>
      </section>
    </section>
  );
}
