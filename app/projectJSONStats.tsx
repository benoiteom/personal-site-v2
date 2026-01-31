"use client";

import React from "react";
import { Chivo_Mono } from "next/font/google";

const chivoMono = Chivo_Mono({ subsets: ["latin"], weight: ["100", "400"] });

interface ProjectJSONStatsProps {
  status: string;
  tech: string[];
  dates: string;
}

export default function ProjectJSONStats({
  status,
  tech,
  dates,
}: ProjectJSONStatsProps) {
  return (
    <div
      className={`${chivoMono.className} text-xs leading-relaxed text-zinc-700 dark:text-zinc-300`}
    >
      <span className="text-zinc-400 dark:text-zinc-500">{"{"}</span>
      <div className="ml-3">
        <div>
          <span className="text-zinc-600 dark:text-zinc-400">status</span>
          <span className="text-zinc-400 dark:text-zinc-500">: </span>
          <span className="text-amber-600 dark:text-amber-400">&quot;{status}&quot;</span>
          <span className="text-zinc-400 dark:text-zinc-500">,</span>
        </div>
        <div>
          <span className="text-zinc-600 dark:text-zinc-400">dates</span>
          <span className="text-zinc-400 dark:text-zinc-500">: </span>
          <span className="text-amber-600 dark:text-amber-400">&quot;{dates}&quot;,</span>
        </div>
        <div>
          <span className="text-zinc-600 dark:text-zinc-400">tech</span>
          <span className="text-zinc-400 dark:text-zinc-500">: [</span>
        </div>
        <div className="ml-3">
          {tech.slice(0, 3).map((t, i) => (
            <div key={t}>
              <span className="text-amber-600 dark:text-amber-400">&quot;{t}&quot;</span>
              {i < Math.min(tech.length, 3) - 1 && (
                <span className="text-zinc-400 dark:text-zinc-500">,</span>
              )}
            </div>
          ))}
          {tech.length > 3 && (
            <div className="text-zinc-400 dark:text-zinc-500">
              {`// +${tech.length - 3} more`}
            </div>
          )}
        </div>
        <div>
          <span className="text-zinc-400 dark:text-zinc-500">]</span>
        </div>
      </div>
      <span className="text-zinc-400 dark:text-zinc-500">{"}"}</span>
    </div>
  );
}
