"use client";

import Smoke from "./smoke";
import { useEffect, useRef, useState } from "react";
import Project from "./project";
import Experience from "./experience";
import { experience, projects } from "./helpers/config";
import About from "./about";
import Cursor from "./cursor";
import Landing from "./landing";
import { ratio } from "./helpers/swirl";
import { ScrollProvider } from "./context/scrollContext.tsx";
import { ThemeProvider } from "./context/themeContext.tsx";
import MobileLanding from "./mobileLanding.tsx";
import Contact from "./contact.tsx";
import Photography from "./photography.tsx";
import { ModalProvider } from "./context/modalContext.jsx";
import Modal from "./modal.tsx";

export default function Home() {
  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const scrollRef = useRef(null);

  useEffect(() => {
    setDimensions();

    // TODO: causes refresh if scroll all the way to the bottom on phone
    window.addEventListener("resize", () => location.reload());
    return () => window.removeEventListener("resize", () => location.reload());
  });

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
        <ModalProvider>
          <main className="bg-zinc-100 dark:bg-zinc-950 transition duration-500">
            <Smoke />
            {!!width && !isMobile && (
              <Cursor width={width} isTablet={isTablet} />
            )}
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

                    <div
                      className="relative mt-8 px-8"
                      style={{ width: `calc(100vw - ${width + 16}px)` }}
                    >
                      {/* PROJECTS */}
                      <div id="projects">
                        {projects.map((project, i) => (
                          <Project
                            key={i}
                            title={project.title}
                            colors={project.colors}
                            desc={project.desc}
                            status={project.status}
                            type={project.type}
                            dates={project.dates}
                            tech={project.tech}
                            images={project.images}
                            isMobile={isMobile}
                          />
                        ))}
                      </div>

                      <div className="py-28" />

                      {/* EXPERIENCE */}
                      <div className="flex justify-center">
                        <div id="experience">
                          {experience.map((e, i) => (
                            <Experience
                              key={i}
                              company={e.company}
                              title={e.title}
                              date={e.date}
                              data={e.data}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="py-28" />

                      {/* ABOUT */}
                      <div id="about">
                        <About />
                      </div>

                      {/* CONTACT */}
                      <div id="contact">
                        <Contact />
                      </div>

                      <div className="py-28" />

                      {/* PHOTOGRAPHY */}
                      <div id="photography">
                        <Photography />
                      </div>

                      <div className="py-20" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </main>

          <Modal />
        </ModalProvider>
      </ScrollProvider>
    </ThemeProvider>
  );
}
