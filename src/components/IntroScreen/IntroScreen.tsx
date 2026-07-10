"use client";

import { useEffect, useState } from "react";
import styles from "./IntroScreen.module.css";

type IntroScreenProps = {
  onComplete: () => void;
};

const INTRO_DURATION = 2400;
const WELCOME_DURATION = 800;

export function IntroScreen({ onComplete }: IntroScreenProps) {
  const [showWelcome, setShowWelcome] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const progressTimer = window.setTimeout(() => {
      setShowWelcome(true);
    }, INTRO_DURATION);

    const leaveTimer = window.setTimeout(() => {
      setIsLeaving(true);
    }, INTRO_DURATION + WELCOME_DURATION);

    const completeTimer = window.setTimeout(
      () => {
        onComplete();
      },
      INTRO_DURATION + WELCOME_DURATION + 650,
    );

    return () => {
      window.clearTimeout(progressTimer);
      window.clearTimeout(leaveTimer);
      window.clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`${styles.intro} ${isLeaving ? styles.leaving : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Cargando portafolio">
      <div className={styles.backgroundGrid} aria-hidden="true" />

      <div className={styles.content}>
        {!showWelcome ? (
          <div className={styles.loadingContent}>
            <p className={styles.loadingLabel}>Cargando...</p>

            <div className={styles.progressTrack}>
              <div className={styles.progressBar} />
            </div>

            <div className={styles.progressFooter}>
              <span>Preparando portafolio</span>
              <span>100%</span>
            </div>
          </div>
        ) : (
          <h1 className={styles.welcome}>Bienvenido</h1>
        )}
      </div>
    </div>
  );
}
