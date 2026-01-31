"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { projects, aboutStats } from "../helpers/config";

interface ProjectContextType {
  activeProjectIndex: number | null;
  setActiveProjectIndex: (index: number | null) => void;
  activeProject: typeof projects[0] | null;
  isInProjectsSection: boolean;
  // About section state
  isInAboutSection: boolean;
  setIsInAboutSection: (isIn: boolean) => void;
  aboutStats: typeof aboutStats;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [isInAboutSection, setIsInAboutSection] = useState(false);

  const activeProject = activeProjectIndex !== null ? projects[activeProjectIndex] : null;
  const isInProjectsSection = activeProjectIndex !== null;

  return (
    <ProjectContext.Provider
      value={{
        activeProjectIndex,
        setActiveProjectIndex,
        activeProject,
        isInProjectsSection,
        isInAboutSection,
        setIsInAboutSection,
        aboutStats,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjectContext() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error("useProjectContext must be used within a ProjectProvider");
  }
  return context;
}
