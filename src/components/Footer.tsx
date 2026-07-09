import Link from "next/link";
import { profile } from "@/data/portfolio";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div>
          <h2>{profile.shortName}</h2>
          <p>{profile.role}</p>
          <p>Creando soluciones digitales funcionales y mantenibles.</p>
        </div>

        <div>
          <h3>Enlaces rápidos</h3>
          <Link href="/">Inicio</Link>
          <Link href="/sobre-mi">Sobre mí</Link>
          <Link href="/proyectos">Proyectos</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/contacto">Contacto</Link>
        </div>

        <div>
          <h3>Sígueme</h3>
          <a href={profile.socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.socials.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        © {new Date().getFullYear()} {profile.shortName}. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
