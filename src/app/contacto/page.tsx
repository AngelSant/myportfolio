import {
  ExternalLink,
  Mail,
  MessageCircle,
  Smartphone,
  CodeXml,
  PanelsTopLeft,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/icons/SocialIcons";
import styles from "./page.module.css";

const socialIconMap = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  Instagram: InstagramIcon,
};

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
            revisar mis perfiles profesionales para conocer mi experiencia,
            proyectos y trabajo reciente.
          </p>

          <div className={styles.mainActions}>
            <a
              href={profile.contact.email.href}
              className={styles.primaryButton}>
              <Mail size={18} aria-hidden="true" />
              Enviar correo
            </a>

            <a
              href={profile.contact.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryButton}>
              <MessageCircle size={18} aria-hidden="true" />
              Escribir por WhatsApp
            </a>
          </div>
        </article>

        <aside className={styles.contactCards}>
          <a href={profile.contact.email.href} className={styles.contactCard}>
            <span className={styles.iconBox}>
              <Mail aria-hidden="true" />
            </span>

            <span className={styles.contactLabel}>
              {profile.contact.email.label}
            </span>

            <strong>{profile.contact.email.value}</strong>

            <ExternalLink className={styles.externalIcon} aria-hidden="true" />
          </a>

          <a
            href={profile.contact.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            className={styles.contactCard}>
            <span className={styles.iconBox}>
              <MessageCircle aria-hidden="true" />
            </span>

            <span className={styles.contactLabel}>
              {profile.contact.whatsapp.label}
            </span>

            <strong>{profile.contact.whatsapp.value}</strong>

            <ExternalLink className={styles.externalIcon} aria-hidden="true" />
          </a>

          {profile.contact.links.map((link) => {
            const Icon =
              socialIconMap[link.label as keyof typeof socialIconMap];

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={styles.contactCard}>
                <span className={styles.iconBox}>
                  <Icon aria-hidden="true" />
                </span>

                <span className={styles.contactLabel}>{link.label}</span>
                <strong>{link.value}</strong>

                <ExternalLink
                  className={styles.externalIcon}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </aside>
      </div>

      <section className={styles.availabilitySection}>
        <p className="eyebrow">Disponibilidad</p>
        <h2>Áreas en las que puedo colaborar</h2>

        <div className={styles.availabilityGrid}>
          <article>
            <span className={styles.availabilityIcon}>
              <Smartphone aria-hidden="true" />
            </span>

            <h3>Desarrollo móvil</h3>
            <p>Aplicaciones móviles con Flutter, Firebase, APIs y mapas.</p>
          </article>

          <article>
            <span className={styles.availabilityIcon}>
              <PanelsTopLeft aria-hidden="true" />
            </span>

            <h3>Desarrollo web</h3>
            <p>Plataformas web, dashboards, formularios y sistemas internos.</p>
          </article>

          <article>
            <span className={styles.availabilityIcon}>
              <CodeXml aria-hidden="true" />
            </span>

            <h3>Full-stack</h3>
            <p>
              Frontend, backend, bases de datos, autenticación y despliegue.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}
