"use client";

import { useEffect, useState } from "react";

/**
 * Sortie mondiale de GTA VI : jeudi 19 novembre 2026, minuit heure de Paris
 * (déblocage à minuit heure locale sur PS5 / Xbox Series X|S).
 */
export const RELEASE_DATE_ISO = "2026-11-19T00:00:00+01:00";
export const RELEASE_TIMESTAMP = new Date(RELEASE_DATE_ISO).getTime();

export type LaunchPhase = "prelaunch" | "launch-week" | "post-launch";

/** Jours après la sortie pendant lesquels on garde le ton « c'est sorti ! ». */
const LAUNCH_WEEK_DAYS = 14;

export function getLaunchPhase(now: number = Date.now()): LaunchPhase {
  if (now < RELEASE_TIMESTAMP) return "prelaunch";
  if (now < RELEASE_TIMESTAMP + LAUNCH_WEEK_DAYS * 86_400_000) return "launch-week";
  return "post-launch";
}

export function isReleased(now: number = Date.now()): boolean {
  return now >= RELEASE_TIMESTAMP;
}

/**
 * Hook client : renvoie la phase actuelle et se met à jour à la seconde
 * où le jeu sort (sans rechargement de page).
 * Côté serveur / premier rendu on renvoie la phase calculée au build ;
 * l'effet corrige immédiatement au montage.
 */
export function useLaunchPhase(): LaunchPhase {
  const [phase, setPhase] = useState<LaunchPhase>(() => getLaunchPhase());

  useEffect(() => {
    setPhase(getLaunchPhase());
    const msUntilRelease = RELEASE_TIMESTAMP - Date.now();
    if (msUntilRelease <= 0) return;
    // setTimeout est limité à ~24,8 jours ; au-delà on ne programme rien.
    if (msUntilRelease > 2_000_000_000) return;
    const t = setTimeout(() => setPhase(getLaunchPhase()), msUntilRelease + 500);
    return () => clearTimeout(t);
  }, []);

  return phase;
}
