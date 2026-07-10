import Link from "next/link";
import { profile } from "@/data/portfolio";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/icons/SocialIcons";
import styles from "./Footer.module.css";

const socialLinks = [
  {
    label: "GitHub",
    href: profile.socials.github,
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: profile.socials.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "Instagram",
    href: profile.socials.instagram,
    icon: InstagramIcon,
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.brandColumn}>
          <h2>{profile.shortName}</h2>
          <p className={styles.role}>{profile.role}</p>
          <p>
            Creando soluciones digitales funcionales, mantenibles y orientadas a
            necesidades reales.
          </p>
        </div>

        <div className={styles.linksColumn}>
          <h3>Enlaces rápidos</h3>

          <Link href="/">Inicio</Link>
          <Link href="/sobre-mi">Sobre mí</Link>
          <Link href="/licencias-certificaciones">Certificaciones</Link>
          <Link href="/proyectos">Proyectos</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/contacto">Contacto</Link>
        </div>

        <div>
          <h3>Redes profesionales</h3>

          <div className={styles.socialLinks}>
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                  aria-label={`Visitar ${social.label}`}>
                  <Icon className={styles.socialIcon} />
                  <span>{social.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span>
          © {new Date().getFullYear()} {profile.shortName}. Todos los derechos
          reservados.
        </span>

        <span>Desarrollado con Next.js y TypeScript.</span>
      </div>
    </footer>
  );
}
