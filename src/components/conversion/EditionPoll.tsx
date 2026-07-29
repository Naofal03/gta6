"use client";

import { useState } from "react";
import { Vote, CheckCircle2 } from "lucide-react";

const INITIAL_VOTES = {
  standard: 342,
  ps5pro_bundle: 894,
  ultimate_collector: 1250,
  pc_digital: 512,
};

export default function EditionPoll() {
  const [votes, setVotes] = useState(INITIAL_VOTES);
  const [userVoted, setUserVoted] = useState<string | null>(null);

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  const handleVote = (key: keyof typeof INITIAL_VOTES) => {
    if (userVoted) return;
    setVotes((prev) => ({ ...prev, [key]: prev[key] + 1 }));
    setUserVoted(key);
  };

  const getPercentage = (count: number) => {
    return Math.round((count / totalVotes) * 100);
  };

  return (
    <div className="glass p-6 rounded-sm border border-orange/30 my-10 relative overflow-hidden bg-orange/5">
      <div className="flex items-center gap-2 mb-4">
        <Vote className="text-orange" size={20} />
        <h4 className="text-xl font-bebas text-white tracking-wide uppercase">
          Sondage Communautaire GTA 6 HQ
        </h4>
      </div>

      <p className="text-sm font-inter text-muted mb-6">
        Quelle édition ou quel pack prévoyez-vous d&apos;acheter pour le lancement de GTA 6 ? ({totalVotes.toLocaleString()} votes)
      </p>

      <div className="space-y-4">
        {[
          { key: "ultimate_collector", label: "Édition Collector / Ultimate GTA 6", link: "https://www.amazon.fr/dp/B0DGPRH17W?tag=638nao0229707-21" },
          { key: "ps5pro_bundle", label: "PS5 Pro + GTA 6 (Pack Console 4K 60fps)", link: "https://www.amazon.fr/dp/B0DGPRH17W?tag=638nao0229707-21" },
          { key: "pc_digital", label: "Édition PC Supérieure (Steam / Rockstar)", link: "https://www.amazon.fr/dp/B0C89PXG7G?tag=638nao0229707-21" },
          { key: "standard", label: "Édition Standard Physique (PS5 / Xbox)", link: "https://www.amazon.fr/dp/B0DGPRH17W?tag=638nao0229707-21" },
        ].map((item) => {
          const voteKey = item.key as keyof typeof INITIAL_VOTES;
          const pct = getPercentage(votes[voteKey]);
          const isSelected = userVoted === voteKey;

          return (
            <div key={item.key} className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono text-white">
                <span className="flex items-center gap-2">
                  {isSelected && <CheckCircle2 size={14} className="text-orange" />}
                  {item.label}
                </span>
                <span className="font-bold text-gold">{pct}%</span>
              </div>
              
              <div
                onClick={() => handleVote(voteKey)}
                className={`w-full bg-black/50 h-8 rounded-sm overflow-hidden cursor-pointer relative border transition-all ${
                  userVoted
                    ? isSelected
                      ? "border-orange bg-orange/20"
                      : "border-border/20 opacity-70"
                    : "border-border/40 hover:border-cyan"
                }`}
              >
                <div
                  className={`h-full transition-all duration-500 ${
                    isSelected ? "bg-orange" : "bg-cyan/40"
                  }`}
                  style={{ width: `${pct}%` }}
                />
                <span className="absolute inset-0 flex items-center justify-between px-4 text-xs font-mono text-white font-bold select-none">
                  <span>{userVoted ? `${votes[voteKey]} votes` : "Cliquer pour voter"}</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {userVoted && (
        <div className="mt-6 pt-4 border-t border-border/20 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono text-trust">
            ✓ Votre vote a bien été enregistré !
          </span>
          <a
            href="https://www.amazon.fr/dp/B0DGPRH17W?tag=638nao0229707-21"
            target="_blank"
            rel="nofollow sponsored"
            className="text-xs font-bebas bg-orange text-white px-4 py-2 rounded-sm hover:bg-[#FF5712] transition-colors shimmer-btn"
          >
            VÉRIFIER LA DISPONIBILITÉ SUR AMAZON →
          </a>
        </div>
      )}
    </div>
  );
}
