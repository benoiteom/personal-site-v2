"use client";

import Smoke from "./smoke";
import { useEffect, useRef, useState } from "react";
import Experience from "./experience";
import { experience } from "./helpers/config";
import AboutSection from "./aboutSection";
import Landing from "./landing";
import { ratio } from "./helpers/swirl";
import { ScrollProvider } from "./context/scrollContext.tsx";
import { ThemeProvider } from "./context/themeContext.tsx";
import { ProjectProvider } from "./context/projectContext.tsx";
import MobileLanding from "./mobileLanding.tsx";
import ProjectsSection from "./projectsSection.tsx";

export default function Home() {
  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const scrollRef = useRef(null);

  useEffect(() => {
    setDimensions();

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  });

  const onResize = () => {
    if (window.innerWidth / window.innerHeight < 1) return;
    location.reload();
  };

  const setDimensions = () => {
    if (window.innerWidth / window.innerHeight < 1) {
      setWidth(0);
      setIsMobile(true);
      setIsTablet(false);
    } else if (window.innerWidth / window.innerHeight < 1.5) {
      setWidth((window.innerHeight - 32) / ratio);
      setIsMobile(false);
      setIsTablet(true);
    } else {
      setWidth((window.innerHeight - 32) / ratio);
      setIsMobile(false);
      setIsTablet(false);
    }
  };

  return (
    <ThemeProvider>
      <ScrollProvider>
        <ProjectProvider>
          <main className="bg-zinc-100 dark:bg-zinc-950 transition duration-500">
          <Smoke />
          <div
            id="scroll-wrapper"
            ref={scrollRef}
            className="w-full h-screen overflow-auto"
          >
            <div id="scroll-content" style={{ minHeight: "500vh" }}>
              {(!!width || isMobile) && (
                <>
                  {/* LANDING PAGE */}
                  {!isMobile ? (
                    <Landing
                      width={width}
                      scrollRef={scrollRef}
                      isTablet={isTablet}
                    />
                  ) : (
                    <MobileLanding scrollRef={scrollRef} />
                  )}

                  {/* PROJECTS */}
                  <ProjectsSection
                    width={width}
                    scrollRef={scrollRef}
                    isMobile={isMobile}
                  />

                  
                  <div
                    className="relative px-8"
                    style={{ width: `calc(100vw - ${width + 16}px)` }}
                  >
                    <div className="py-8" />

                    {/* EXPERIENCE */}
                    {!!scrollRef && (
                      <div className="flex justify-center">
                        <div id="experience">
                          {experience.map((e, i) => (
                            <Experience
                              key={i}
                              scrollRef={scrollRef}
                              company={e.company}
                              title={e.title}
                              date={e.date}
                              data={e.data}
                              details={e.details}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="py-28" />
                  </div>

                  {/* ABOUT - Rendered outside px-8 container for scroll detection like Projects */}
                  <AboutSection
                    width={width}
                    scrollRef={scrollRef}
                    isMobile={isMobile}
                  />

                  <div className="py-4" />

                </>
              )}
            </div>
          </div>
        </main>
        </ProjectProvider>
      </ScrollProvider>
    </ThemeProvider>
  );
}
