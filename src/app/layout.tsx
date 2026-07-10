import type { Metadata } from "next";
import Script from "next/script";
import { PortfolioShell } from "@/components/PortfolioShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Angel Santana | Mobile App Developer & Full-Stack Developer",
  description:
    "Portafolio digital de Angel Santana, Ingeniero en Software especializado en desarrollo móvil, web y soluciones full-stack.",
};

const themeInitializationScript = `
  (() => {
    try {
      const storedTheme = localStorage.getItem("portfolio-theme");
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const theme =
        storedTheme === "light" || storedTheme === "dark"
          ? storedTheme
          : systemPrefersDark
            ? "dark"
            : "light";

      document.documentElement.dataset.theme = theme;
    } catch {
      document.documentElement.dataset.theme = "light";
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <PortfolioShell>{children}</PortfolioShell>

        <Script id="portfolio-theme-initializer" strategy="beforeInteractive">
          {themeInitializationScript}
        </Script>
      </body>
    </html>
  );
}
