"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Award,
  BriefcaseBusiness,
  FolderKanban,
  Home,
  UserRound,
  Wrench,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle/ThemeToggle";
import styles from "./Navbar.module.css";

const navItems = [
  {
    label: "Inicio",
    href: "/",
    icon: Home,
  },
  {
    label: "Sobre mí",
    href: "/sobre-mi",
    icon: UserRound,
  },
  {
    label: "Certificaciones",
    href: "/licencias-certificaciones",
    icon: Award,
  },
  {
    label: "Proyectos",
    href: "/proyectos",
    icon: FolderKanban,
  },
  {
    label: "Servicios",
    href: "/servicios",
    icon: Wrench,
  },
  {
    label: "Contacto",
    href: "/contacto",
    icon: BriefcaseBusiness,
  },
];

export function Navbar() {
  const pathname = usePathname();

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className={styles.navbarWrapper}>
      <nav className={styles.navbar} aria-label="Navegación principal">
        <div className={styles.linksWrapper}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = isActiveRoute(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                aria-current={isActive ? "page" : undefined}>
                <Icon
                  className={styles.navIcon}
                  size={17}
                  strokeWidth={2}
                  aria-hidden="true"
                />

                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className={styles.separator} aria-hidden="true" />

        <ThemeToggle />
      </nav>
    </header>
  );
}
