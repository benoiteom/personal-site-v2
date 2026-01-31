"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { aboutMe } from "./helpers/config";
import { useProjectContext } from "./context/projectContext";
import { Chivo_Mono } from "next/font/google";

const chivoMono = Chivo_Mono({ subsets: ["latin"], weight: ["100", "400"] });

interface AboutSectionProps {
  width: number;
  scrollRef: any;
  isMobile: boolean;
}

export default function AboutSection({
  width,
  scrollRef,
  isMobile,
}: AboutSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { setIsInAboutSection } = useProjectContext();

  // Track when component has mounted to avoid hydration issues with useScroll
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    container: isMounted && !isMobile ? scrollRef : undefined,
    target: isMounted && !isMobile ? sectionRef : undefined,
    offset: ["start center", "end center"],
  });

  // Track when we enter/exit the about section
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const isInSection = progress > 0 && progress < 1;
    setIsInAboutSection(isInSection);
  });

  // Mobile layout - simplified
  if (isMobile) {
    return (
      <div id="about" className="px-4 pb-16">
        <h2
          className={`${chivoMono.className} text-3xl text-zinc-950 dark:text-zinc-100 mb-8`}
        >
          About Me
        </h2>
        {aboutMe.map((text, i) => (
          <p
            key={i}
            className="animate duration-500 mt-6 text-zinc-950 dark:text-zinc-100"
          >
            {text}
          </p>
        ))}
      </div>
    );
  }

  // Desktop/Tablet layout - content panel only (image is in sidebar)
  const availableWidth = `calc(100vw - ${width + 16}px)`;

  return (
    <div
      id="about"
      ref={sectionRef}
      className="relative flex justify-center"
      style={{
        // Give some scroll space for the section
        height: "100vh",
        width: availableWidth,
      }}
    >
      {/* Sticky container that holds the visible content */}
      <div className="sticky top-0 h-screen flex-grow flex items-center max-w-[600px] px-8">
        <div>
          <h2
            className={`${chivoMono.className} text-4xl text-zinc-950 dark:text-zinc-100 mb-8`}
          >
            About Me
          </h2>
          {aboutMe.map((text, i) => (
            <p
              key={i}
              className="animate duration-500 mt-6 text-zinc-700 dark:text-zinc-300 leading-relaxed"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
