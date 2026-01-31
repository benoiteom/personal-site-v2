"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Chivo_Mono } from "next/font/google";

const chivoMono = Chivo_Mono({ subsets: ["latin"], weight: ["100", "400"] });

interface ProjectContentPanelProps {
  title: string[];
  desc: string;
  type: string;
  status: string;
  link?: string;
  projectIndex: number;
}

export default function ProjectContentPanel({
  title,
  desc,
  type,
  status,
  link,
  projectIndex,
}: ProjectContentPanelProps) {
  return (
    <div className="flex flex-col justify-center h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={projectIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {/* Title */}
          <h2
            className={`${chivoMono.className} text-4xl md:text-5xl text-zinc-950 dark:text-zinc-100 mb-4`}
          >
            {title[0]}
            {title.length > 1 && (
              <span className="text-2xl md:text-3xl align-top">{title[1]}</span>
            )}
          </h2>

          {/* Description */}
          <p
            className={`${chivoMono.className} text-sm font-thin text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6`}
          >
            {desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full">
              {type}
            </span>
            <span
              className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full flex items-center gap-2 ${
                status === "In development"
                  ? "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400"
                  : status === "Completed"
                  ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                  : status === "Closed"
                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                  : "bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
              }`}
            >
              {status === "In development" && (
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-current"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
              {status}
            </span>
          </div>

          {/* Visit Link */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${chivoMono.className} relative inline-flex items-center gap-2 text-sm font-thin text-zinc-700 dark:text-zinc-300 opacity-70 hover:opacity-100 transition-opacity`}
            >
              <div className="absolute -inset-x-2 inset-y-0 rounded-full bg-zinc-100 dark:bg-zinc-950 blur transition-all duration-500" />
              <span className="relative">Visit</span>
              <svg
                className="relative"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <path d="M15 3h6v6" />
                <path d="M10 14L21 3" />
              </svg>
            </a>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
