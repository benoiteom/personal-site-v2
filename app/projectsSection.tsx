"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
  MotionValue,
} from "framer-motion";
import { projects } from "./helpers/config";
import { useProjectContext } from "./context/projectContext";
import ProjectContentPanel from "./projectContentPanel";
import Image from "next/image";
import { Chivo_Mono } from "next/font/google";

const chivoMono = Chivo_Mono({ subsets: ["latin"], weight: ["100", "400"] });

// Progress indicator that updates in real-time during scroll
function ProjectProgressIndicator({
  index,
  totalProjects,
  scrollYProgress,
}: {
  index: number;
  totalProjects: number;
  scrollYProgress: MotionValue<number>;
}) {
  const projectStart = index / totalProjects;
  const projectEnd = (index + 1) / totalProjects;

  // Transform scroll progress to this project's progress (0-100%)
  const width = useTransform(scrollYProgress, (progress) => {
    if (progress <= projectStart) return "0%";
    if (progress >= projectEnd) return "100%";
    const projectProgress = (progress - projectStart) / (projectEnd - projectStart);
    return `${projectProgress * 100}%`;
  });

  return (
    <div className="relative w-16 h-2 rounded-md bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
      <motion.div
        className="absolute inset-y-0 left-0 bg-zinc-950 dark:bg-zinc-400 rounded-md"
        style={{ width }}
      />
    </div>
  );
}

interface ProjectsSectionProps {
  width: number;
  scrollRef: any;
  isMobile: boolean;
}

export default function ProjectsSection({
  width,
  scrollRef,
  isMobile,
}: ProjectsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const totalProjects = projects.length;
  const { activeProjectIndex, setActiveProjectIndex } = useProjectContext();
  // Note: activeProject from context is used by sidebar; we use local displayProject here

  // Track when component has mounted to avoid hydration issues with useScroll
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Local display index for the content panel - always has a valid value
  // (0 when above section, last when below, actual index when inside)
  const [displayProjectIndex, setDisplayProjectIndex] = useState(0);
  const displayProject = projects[displayProjectIndex];

  // Only pass refs to useScroll after mount to ensure they're hydrated
  const { scrollYProgress } = useScroll({
    container: isMounted && !isMobile ? scrollRef : undefined,
    target: isMounted && !isMobile ? sectionRef : undefined,
    offset: ["start start", "end end"],
  });

  // Track when we enter/exit the projects section to update active project index
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress > 0 && progress < 1) {
      // Inside projects section - set the active project
      const newIndex = Math.floor(progress * totalProjects);
      const clampedIndex = Math.min(Math.max(newIndex, 0), totalProjects - 1);
      if (clampedIndex !== activeProjectIndex) {
        setActiveProjectIndex(clampedIndex);
      }
      if (clampedIndex !== displayProjectIndex) {
        setDisplayProjectIndex(clampedIndex);
      }
    } else {
      // Outside projects section - clear sidebar project but keep display project
      if (activeProjectIndex !== null) {
        setActiveProjectIndex(null);
      }
      // Show first project when above, last project when below
      const boundaryIndex = progress <= 0 ? 0 : totalProjects - 1;
      if (boundaryIndex !== displayProjectIndex) {
        setDisplayProjectIndex(boundaryIndex);
      }
    }
  });

  // Mobile layout - simplified stacked cards
  if (isMobile) {
    return (
      <div id="projects" className="pb-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="mb-16 px-4 w-full"
          >
            {/* Image */}
            <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
              <Image
                src={project.images[0]}
                alt={project.title[0]}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h2
              className={`${chivoMono.className} text-3xl text-zinc-950 dark:text-zinc-100 mb-2`}
            >
              {project.title[0]}
              {project.title.length > 1 && (
                <span className="text-xl align-top">{project.title[1]}</span>
              )}
            </h2>

            {/* Description */}
            <p
              className={`${chivoMono.className} text-sm font-thin text-zinc-700 dark:text-zinc-300 mb-4`}
            >
              {project.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full">
                {project.type}
              </span>
              <span
                className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full flex items-center gap-2 ${
                  project.status === "In development"
                    ? "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400"
                    : project.status === "Completed"
                    ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                    : "bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                }`}
              >
                {project.status === "In development" && (
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-current"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
                {project.status}
              </span>
            </div>

            {/* Visit Link */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${chivoMono.className} inline-flex items-center gap-2 text-sm font-thin text-zinc-700 dark:text-zinc-300 opacity-70 hover:opacity-100 transition-opacity`}
              >
                Visit
                <svg
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
          </div>
        ))}
      </div>
    );
  }

  // Desktop/Tablet layout - content panel only (spiral is in sidebar)
  // Available width for content = viewport - sidebar - matches experience section
  const availableWidth = `calc(100vw - ${width + 16}px)`;

  return (
    <div
      id="projects"
      ref={sectionRef}
      className="relative flex justify-center"
      style={{
        // Each project gets ~100vh of scroll space
        height: `${totalProjects * 100}vh`,
        width: availableWidth,
      }}
    >
      {/* Sticky container that holds the visible content */}
      <div
        className="sticky top-0 h-screen flex-grow flex items-center max-w-[600px] px-8"
      >
        {/* Content Panel */}
        <div>
          <ProjectContentPanel
            title={displayProject.title}
            desc={displayProject.desc}
            type={displayProject.type}
            status={displayProject.status}
            link={displayProject.link}
            projectIndex={displayProjectIndex}
          />

          {/* Project progress indicators */}
          <div className="flex gap-2 mt-8">
            {projects.map((_, i) => (
              <ProjectProgressIndicator
                key={i}
                index={i}
                totalProjects={totalProjects}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
