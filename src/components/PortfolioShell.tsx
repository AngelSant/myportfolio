"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Footer } from "./Footer";
import { IntroScreen } from "./IntroScreen/IntroScreen";
import { Navbar } from "./Navbar";
import styles from "./PortfolioShell.module.css";

type PortfolioShellProps = {
  children: React.ReactNode;
};

type IntroStatus = "checking" | "visible" | "ready";

const INTRO_SESSION_KEY = "portfolio-intro-viewed";

export function PortfolioShell({ children }: PortfolioShellProps) {
  const pathname = usePathname();
  const [introStatus, setIntroStatus] = useState<IntroStatus>("checking");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const introViewed =
        window.sessionStorage.getItem(INTRO_SESSION_KEY) === "true";

      const shouldShowIntro = pathname === "/" && !introViewed;

      setIntroStatus(shouldShowIntro ? "visible" : "ready");
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname]);

  const completeIntro = useCallback(() => {
    window.sessionStorage.setItem(INTRO_SESSION_KEY, "true");
    setIntroStatus("ready");
  }, []);

  const showIntro = introStatus === "visible";
  const isReady = introStatus === "ready";

  return (
    <>
      {showIntro && <IntroScreen onComplete={completeIntro} />}

      <div
        className={`${styles.application} ${
          isReady ? styles.ready : styles.waiting
        }`}
        aria-hidden={!isReady}>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </div>
    </>
  );
}
