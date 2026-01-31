"use client";

import React from "react";
import { Chivo_Mono } from "next/font/google";

const chivoMono = Chivo_Mono({ subsets: ["latin"], weight: ["100", "400"] });

interface AboutJSONStatsProps {
  stats: {
    birthday: string;
    favoriteFood: string;
    languages: string[];
    coffeeOrTea: string;
    musicType: string;
  };
}

export default function AboutJSONStats({ stats }: AboutJSONStatsProps) {
  return (
    <div
      className={`${chivoMono.className} text-xs leading-relaxed text-zinc-700 dark:text-zinc-300`}
    >
      <span className="text-zinc-400 dark:text-zinc-500">{"{"}</span>
      <div className="ml-3">
        <div>
          <span className="text-zinc-600 dark:text-zinc-400">birthday</span>
          <span className="text-zinc-400 dark:text-zinc-500">: </span>
          <span className="text-amber-600 dark:text-amber-400">&quot;{stats.birthday}&quot;</span>
          <span className="text-zinc-400 dark:text-zinc-500">,</span>
        </div>
        <div>
          <span className="text-zinc-600 dark:text-zinc-400">favoriteFood</span>
          <span className="text-zinc-400 dark:text-zinc-500">: </span>
          <span className="text-amber-600 dark:text-amber-400">&quot;{stats.favoriteFood}&quot;</span>
          <span className="text-zinc-400 dark:text-zinc-500">,</span>
        </div>
        <div>
          <span className="text-zinc-600 dark:text-zinc-400">coffeeOrTea</span>
          <span className="text-zinc-400 dark:text-zinc-500">: </span>
          <span className="text-amber-600 dark:text-amber-400">&quot;{stats.coffeeOrTea}&quot;</span>
        </div>
        <div>
          <div>
            <span className="text-zinc-600 dark:text-zinc-400">musicType</span>
            <span className="text-zinc-400 dark:text-zinc-500">: </span>
            <span className="text-amber-600 dark:text-amber-400">&quot;{stats.musicType}&quot;</span>
            <span className="text-zinc-400 dark:text-zinc-500">,</span>
          </div>
          <div>
            <span className="text-zinc-600 dark:text-zinc-400">languages</span>
            <span className="text-zinc-400 dark:text-zinc-500">: [</span>
          </div>
          <div className="ml-3">
            {stats.languages.map((lang, i) => (
              <div key={lang}>
                <span className="text-amber-600 dark:text-amber-400">&quot;{lang}&quot;</span>
                {i < stats.languages.length - 1 && (
                  <span className="text-zinc-400 dark:text-zinc-500">,</span>
                )}
              </div>
            ))}
          </div>
          <div>
            <span className="text-zinc-400 dark:text-zinc-500">]</span>
          </div>
        </div>
      </div>
      <span className="text-zinc-400 dark:text-zinc-500">{"}"}</span>
    </div>
  );
}
