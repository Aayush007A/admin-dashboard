import { statCards } from "../../lib/data";
import type { StatCard as StatCardType } from "../../lib/types";
import * as LucideIcons from "lucide-react";
import { Fragment } from "react";

export function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((card: StatCardType) => {
        const LucideIcon = (LucideIcons as Record<string, any>)[card.icon];
        return (
          <div
            key={card.label}
            className={
              "glass-card p-6 rounded-2xl flex flex-col gap-2 border shadow-xl hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.98] transition-all duration-300 ease-out " +
              `bg-gradient-to-br ${card.color}`
            }
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-white/30 dark:bg-zinc-900/30">
                {LucideIcon ? <LucideIcon className="size-6 text-white drop-shadow" /> : null}
              </div>
              <span className="text-lg font-semibold text-white drop-shadow">
                {card.label}
              </span>
            </div>
            <div className="flex items-end gap-2 mt-4">
              <span className="text-3xl font-bold text-white drop-shadow">
                {card.value}
              </span>
              <span className="text-sm font-medium text-white/80">
                {card.change}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
