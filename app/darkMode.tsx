import React from "react";
import { Chivo_Mono } from "next/font/google";
import { useThemeContext } from "./context/themeContext.tsx";
import { useProjectContext } from "./context/projectContext";
import { AnimatePresence, motion } from "framer-motion";

const chivoMono = Chivo_Mono({ subsets: ["latin"], weight: ["100", "400"] });

export default function DarkMode() {
  const { isDarkMode, setIsDarkMode } = useThemeContext();
  const { isInProjectsSection, isInAboutSection } = useProjectContext();

  const handleUpdateTheme = (isDarkMode: boolean) => {
    setIsDarkMode(isDarkMode);
  };

  const isHidden = isInProjectsSection || isInAboutSection;

  return (
    <div className={`relative z-20 h-full w-full overflow-hidden ${chivoMono.className}`}>
      <AnimatePresence mode="wait">
        {!isHidden && (
          <motion.div
            key="dark-mode-toggles"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{
              x: { duration: 0.8, ease: [0, 0.7, 0.3, 1] },
              y: { duration: 0.4, ease: "easeOut" },
              opacity: { duration: 0.4 }
            }}
            className="absolute inset-0"
          >
            {/* Dark mode toggle */}
            <div
              className="absolute top-[33%] right-[20%] cursor-pointer"
              onClick={() => handleUpdateTheme(true)}
            >
              <div className="absolute -top-2 -left-2 w-16 h-8 transition-all duration-500 rounded-full bg-zinc-100 dark:bg-zinc-950 opacity-90 blur" />
              <p
                className={`relative text-sm font-thin transition-all duration-500 ${
                  isDarkMode
                    ? "text-zinc-100"
                    : "text-zinc-950 opacity-50 hover:opacity-100"
                }`}
              >
                Dark
              </p>
            </div>

            {/* Light mode toggle */}
            <div
              className="absolute top-[66%] right-[20%] cursor-pointer"
              onClick={() => handleUpdateTheme(false)}
            >
              <div className="absolute -top-2 -left-2 w-16 h-8 transition-all duration-500 rounded-full bg-zinc-100 dark:bg-zinc-950 opacity-90 blur" />
              <p
                className={`relative text-sm font-thin transition-all duration-500 ${
                  !isDarkMode
                    ? "text-zinc-950"
                    : "text-zinc-100 opacity-50 hover:opacity-100"
                }`}
              >
                Light
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}