import Link from "next/link";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Certificaciones", href: "/licencias-certificaciones" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contacto", href: "/contacto" },
];

export function Navbar() {
  return (
    <header className={styles.navbarWrapper}>
      <nav className={styles.navbar}>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={styles.navLink}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
