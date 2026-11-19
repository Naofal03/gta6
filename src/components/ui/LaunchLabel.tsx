"use client";

import { useLaunchPhase } from "@/lib/launch";

/** Affiche `pre` avant la sortie de GTA 6 et `post` après — utilisable dans des composants serveur. */
export default function LaunchLabel({ pre, post }: { pre: string; post: string }) {
  const phase = useLaunchPhase();
  return <>{phase === "prelaunch" ? pre : post}</>;
}
