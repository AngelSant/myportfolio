import { profile } from "@/data/portfolio";
import styles from "./page.module.css";

export default function ContactoPage() {
  return (
    <section className={styles.contactPage}>
      <div className={styles.contactHero}>
        <p className="eyebrow">Contacto</p>

        <h1>{profile.contact.title}</h1>

        <p>{profile.contact.description}</p>
      </div>

      <div className={styles.contactGrid}>
        <article className={styles.mainContactCard}>
          <span className={styles.cardLabel}>Contacto directo</span>

          <h2>¿Tienes una idea o proyecto en mente?</h2>

          <p>
            Puedes escribirme directamente por correo o WhatsApp. También puedes
            revisar mis perfiles profesionales para conocer más sobre mi
            trabajo, experiencia y proyectos.
          </p>

          <div className={styles.mainActions}>
            <a
              href={profile.contact.email.href}
              className={styles.primaryButton}>
              Enviar correo
            </a>

            <a
              href={profile.contact.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryButton}>
              Escribir por WhatsApp
            </a>
          </div>
        </article>

        <aside className={styles.contactCards}>
          <a href={profile.contact.email.href} className={styles.contactCard}>
            <span>{profile.contact.email.label}</span>
            <strong>{profile.contact.email.value}</strong>
          </a>

          <a
            href={profile.contact.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            className={styles.contactCard}>
            <span>{profile.contact.whatsapp.label}</span>
            <strong>{profile.contact.whatsapp.value}</strong>
          </a>

          {profile.contact.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={styles.contactCard}>
              <span>{link.label}</span>
              <strong>{link.value}</strong>
            </a>
          ))}
        </aside>
      </div>

      <section className={styles.availabilitySection}>
        <p className="eyebrow">Disponibilidad</p>
        <h2>Áreas en las que puedo colaborar</h2>

        <div className={styles.availabilityGrid}>
          <div>
            <h3>Desarrollo móvil</h3>
            <p>Aplicaciones móviles con Flutter, Firebase, APIs y mapas.</p>
          </div>

          <div>
            <h3>Desarrollo web</h3>
            <p>Plataformas web, dashboards, formularios y sistemas internos.</p>
          </div>

          <div>
            <h3>Full-stack</h3>
            <p>
              Frontend, backend, bases de datos, autenticación y despliegue.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
