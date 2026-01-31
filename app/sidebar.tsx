import { Chivo_Mono } from "next/font/google";
import Image from "next/image";
import { ratio } from "./helpers/swirl";
import SwirlBlock from "./swirlBlock";
import DarkMode from "./darkMode";
import { useScrollContext } from "./context/scrollContext";
import { useProjectContext } from "./context/projectContext";
import { AnimatePresence, motion } from "framer-motion";
import ProjectJSONStats from "./projectJSONStats";
import AboutJSONStats from "./aboutJSONStats";
import Swirl from "./svg/swirl";

const chivoMono = Chivo_Mono({ subsets: ["latin"], weight: ["100", "400"] });

export default function Sidebar({
  width,
  isSpiralComplete,
}: {
  width: number;
  isSpiralComplete: boolean;
}) {
  const { scrollToById, hasScrolled } = useScrollContext();
  const { activeProject, isInProjectsSection, isInAboutSection, aboutStats } = useProjectContext();

  const getLengthByIndex = (i: number) => {
    return width * (1 / ratio) ** (i - 1);
  };

  return (
    <aside style={{ width }}>
      <SwirlBlock
        width={getLengthByIndex(1)}
        sideWidths={{ t: 1, r: 1, b: 0, l: 1 }}
        timingDelay={1.8}
        borderOffset={{ t: 0, r: 0, b: 0, l: 0 }}
        position={{ top: 0, right: 0 }}
        arcCorner="tr"
      >
        {isSpiralComplete && (
          <div className="absolute inset-y-[2px] inset-x-[1px] overflow-hidden rounded-tr-[100%]">
            <AnimatePresence mode="popLayout">
              {isInProjectsSection && activeProject ? (
                /* Project Images - animate in from bottom, out to left */
                <motion.div
                  key={`project-images-${activeProject?.images?.[0] ?? 'none'}`}
                  initial={{ y: '100%', x: 0, opacity: 0 }}
                  animate={{ y: 0, x: 0, opacity: 1 }}
                  exit={{ x: '-100%', opacity: 0 }}
                  transition={{
                    y: { duration: 0.8, ease: [0, 0.7, 0.3, 1] },
                    x: { duration: 0.4, ease: "easeIn" },
                    opacity: { duration: 0.4 }
                  }}
                  className="absolute inset-0 z-20 flex items-center justify-center"
                >
                  {/* Left image - positioned higher */}
                  <div
                    className="absolute rounded-lg border-2 border-zinc-950 dark:border-zinc-100 overflow-hidden shadow-lg"
                    style={{
                      left: '10%',
                      top: '35%',
                      zIndex: 2,
                      maxWidth: '50%'
                    }}
                  >
                    <Image
                      src={activeProject.images[0]}
                      alt={activeProject.title[0]}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Right image - positioned lower */}
                  <div
                    className="absolute rounded-lg border-2 border-zinc-950 dark:border-zinc-100 overflow-hidden shadow-lg"
                    style={{
                      right: '20%',
                      bottom: '15%',
                      zIndex: 1,
                      maxWidth: '50%'
                    }}
                  >
                    <Image
                      src={activeProject.images[1] || activeProject.images[0]}
                      alt={activeProject.title[0]}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>
              ) : isInAboutSection ? (
                /* About Section - Profile Image */
                <motion.div
                  key="about-image"
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ x: '-100%', opacity: 0 }}
                  transition={{
                    y: { duration: 0.8, ease: [0, 0.7, 0.3, 1] },
                    x: { duration: 0.4, ease: "easeIn" },
                    opacity: { duration: 0.4 }
                  }}
                  className="absolute inset-0 z-20 flex items-center justify-center"
                >
                  {/* Profile image */}
                  <div
                    className="absolute left-[4%] bottom-[4%] z-2 max-w-[60%] rounded-[10px] border-2 border-zinc-950 dark:border-zinc-100"
                  >
                    <Image
                      src="/about.png"
                      alt="Profile"
                      width={400}
                      height={400}
                      className="w-full h-auto"
                    />
                    {/* Fun fact text */}
                    <Swirl height={32} width={54} className="animate duration-500 text-zinc-950 dark:text-zinc-300 rotate-[10deg] mt-3 -ml-10 absolute -right-7 bottom-[22%] z-3 scale-y-[-1]" />
                    <div
                      className={`${chivoMono.className} absolute -right-36 bottom-[8%] z-3`}
                    >
                      <p className="text-sm font-thin text-zinc-950 dark:text-zinc-300">fun fact:</p>
                      <p className="text-sm font-thin text-zinc-950 dark:text-zinc-300">I like plants!</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* Tagline Section */
                <motion.div
                  key="tagline"
                  initial={{ y: '100%', x: 0, opacity: 0 }}
                  animate={{ y: 0, x: 0, opacity: 1 }}
                  exit={{ x: '-100%', opacity: 0 }}
                  transition={{
                    y: { duration: 0.8, ease: [0, 0.7, 0.3, 1] },
                    x: { duration: 0.4, ease: "easeIn" },
                    opacity: { duration: 0.4 }
                  }}
                  className={`absolute bottom-[8%] left-[8%] z-20 ${chivoMono.className}`}
                >
                  <p className="text-3xl font-thin tracking-wider text-zinc-950 dark:text-zinc-200 leading-tight">
                    I Create AI
                    <br />
                    Enabled Web
                    <br />
                    Experiences
                  </p>
                  <p className="text-sm font-thin text-zinc-950 dark:text-zinc-100 mt-4 mr-8 opacity-70 leading-relaxed">
                    Mixing creativity with technology to create
                    engaging user experiences. I love solving complex
                    problems with elegant, well designed solutions.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </SwirlBlock>
      <SwirlBlock
        width={getLengthByIndex(2)}
        sideWidths={{ t: 1, r: 1, b: 1, l: 0 }}
        timingDelay={1.6}
        borderOffset={{ t: -1, r: 0, b: 0, l: 0 }}
        position={{ top: getLengthByIndex(1), right: 0 }}
        arcCorner="br"
      >
        {isSpiralComplete && (
          <div className="relative w-full h-full overflow-hidden">
            <AnimatePresence mode="popLayout">
              {isInProjectsSection && activeProject ? (
                /* Project JSON Stats */
                <motion.div
                  key={`project-stats-${activeProject?.title?.[0] ?? 'none'}`}
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{
                    x: { duration: 0.8, ease: [0, 0.7, 0.3, 1] },
                    y: { duration: 0.4, ease: "easeIn" },
                    opacity: { duration: 0.4 }
                  }}
                  className="relative z-20 w-full h-full p-8"
                >
                  <ProjectJSONStats
                    status={activeProject.status}
                    tech={activeProject.tech}
                    dates={activeProject.dates}
                  />
                </motion.div>
              ) : isInAboutSection ? (
                /* About JSON Stats */
                <motion.div
                  key="about-stats"
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{
                    x: { duration: 0.8, ease: [0, 0.7, 0.3, 1] },
                    y: { duration: 0.4, ease: "easeIn" },
                    opacity: { duration: 0.4 }
                  }}
                  className="relative z-20 w-full h-full p-8"
                >
                  <AboutJSONStats stats={aboutStats} />
                </motion.div>
              ) : (
                /* Navigation Links */
                <motion.div
                  key="nav-links"
                  initial={{ x: '-100%', y: 0, opacity: 0 }}
                  animate={{ y: 0, x: 0, opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{
                    x: { duration: 0.8, ease: [0, 0.7, 0.3, 1] },
                    y: { duration: 0.4, ease: "easeIn" },
                    opacity: { duration: 0.4 }
                  }}
                  className="relative z-20 pt-3 pl-10"
                  style={{ width: "fit-content" }}
                >
                  <div className="relative cursor-pointer w-fit-content p-2 m-3 my-7">
                    <div className="absolute transition-all duration-500 top-2 left-0 w-full h-8 rounded-full bg-zinc-100 dark:bg-zinc-950 blur" />
                    <p
                      className={`${chivoMono.className} relative transition-all duration-500 projects-nav cursor-pointer font-thin opacity-50 hover:opacity-100 text-zinc-950 dark:text-zinc-100`}
                      onClick={() => scrollToById("projects")}
                    >
                      Projects
                    </p>
                  </div>
                  <div className="relative cursor-pointer w-fit-content p-2 m-3 my-7">
                    <div className="absolute transition-all duration-500 top-2 left-0 w-full h-8 rounded-full bg-zinc-100 dark:bg-zinc-950 blur" />
                    <p
                      className={`${chivoMono.className} relative transition-all duration-500 experience-nav cursor-pointer font-thin opacity-50 hover:opacity-100 text-zinc-950 dark:text-zinc-100`}
                      onClick={() => scrollToById("experience")}
                    >
                      Experience
                    </p>
                  </div>
                  <div className="relative cursor-pointer w-fit-content p-2 m-3 my-7">
                    <div className="absolute transition-all duration-500 top-2 left-0 w-full h-8 rounded-full bg-zinc-100 dark:bg-zinc-950 blur" />
                    <p
                      className={`${chivoMono.className} relative transition-all duration-500 about-nav cursor-pointer font-thin opacity-50 hover:opacity-100 text-zinc-950 dark:text-zinc-100`}
                      onClick={() => scrollToById("about")}
                    >
                      About Me
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </SwirlBlock>
      <SwirlBlock
        width={getLengthByIndex(3)}
        sideWidths={{ t: 0, r: 1, b: 1, l: 1 }}
        timingDelay={1.4}
        borderOffset={{ t: 0, r: -1, b: 0, l: 0 }}
        position={{
          top: getLengthByIndex(1) + getLengthByIndex(4),
          right: getLengthByIndex(2),
        }}
        arcCorner="bl"
      >
        {isSpiralComplete && (
          <div className="relative z-20 w-full h-full overflow-hidden">
            <AnimatePresence mode="popLayout">
              {!hasScrolled ? (
                <motion.div
                  key="links"
                  initial={{ y: '-100%', x: 0, opacity: 0 }}
                  animate={{ y: 0, x: 0, opacity: 1 }}
                  exit={{ x: '100%', opacity: 0 }}
                  transition={{
                    y: { duration: 0.8, ease: [0, 0.7, 0.3, 1] },
                    x: { duration: 0.4, ease: "easeIn" },
                    opacity: { duration: 0.4 }
                  }}
                  className="relative z-20 w-full h-full"
                >
                  <div className="absolute top-[15%] right-[10%] cursor-pointer w-fit-content p-1 m-2">
                    <div className="absolute transition-all duration-500 top-1 left-0 w-full h-6 rounded-full bg-zinc-100 dark:bg-zinc-950 blur" />
                    <a
                      className={`${chivoMono.className} relative transition-all duration-500 resume-pdf opacity-50 hover:opacity-100 cursor-pointer font-thin text-zinc-950 dark:text-zinc-100`}
                      onClick={() =>
                        window.open("/Benoit Ortalo-Magne Resume.pdf", "_blank")
                      }
                    >
                      Resume PDF
                    </a>
                  </div>
                  <div className="absolute top-[42%] right-[10%] cursor-pointer w-fit-content p-1 m-2">
                    <div className="absolute transition-all duration-500 top-1 left-0 w-full h-6 rounded-full bg-zinc-100 dark:bg-zinc-950 blur" />
                    <a
                      className={`${chivoMono.className} relative transition-all duration-500 linkedin opacity-50 hover:opacity-100 cursor-pointer font-thin text-zinc-950 dark:text-zinc-100`}
                      onClick={() =>
                        window.open("https://www.linkedin.com/in/bo-m/", "_blank")
                      }
                    >
                      LinkedIn
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="name"
                  initial={{ y: '-100%', x: 0, opacity: 0 }}
                  animate={{ y: 0, x: 0, opacity: 1 }}
                  exit={{ x: '100%', opacity: 0 }}
                  transition={{
                    y: { duration: 0.8, ease: [0, 0.7, 0.3, 1] },
                    x: { duration: 0.4, ease: "easeIn" },
                    opacity: { duration: 0.4 }
                  }}
                  className="relative z-20 w-full h-full flex justify-end pr-6 pt-4"
                >
                  <p className={`${chivoMono.className} tracking-wider text-2xl font-thin text-zinc-950 dark:text-zinc-100 leading-relaxed`}>
                    Benoît<br />Ortalo<br />-Magné
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </SwirlBlock>
      <SwirlBlock
        width={getLengthByIndex(4)}
        sideWidths={{ t: 1, r: 0, b: 1, l: 1 }}
        timingDelay={1.2}
        borderOffset={{ t: -1, r: 0, b: -1, l: 0 }}
        position={{
          top: getLengthByIndex(1),
          right: getLengthByIndex(2) + getLengthByIndex(5),
        }}
        arcCorner="tl"
      >
        {isSpiralComplete && <DarkMode />}
      </SwirlBlock>
      <SwirlBlock
        width={getLengthByIndex(5)}
        sideWidths={{ t: 1, r: 1, b: 0, l: 1 }}
        timingDelay={1}
        borderOffset={{ t: -1, r: -1, b: 0, l: -1 }}
        position={{ top: getLengthByIndex(1), right: getLengthByIndex(2) }}
        arcCorner="tr"
      ></SwirlBlock>
      <SwirlBlock
        width={getLengthByIndex(6)}
        sideWidths={{ t: 1, r: 1, b: 1, l: 0 }}
        timingDelay={0.8}
        borderOffset={{ t: -1, r: -1, b: -1, l: 0 }}
        position={{
          top: getLengthByIndex(1) + getLengthByIndex(5),
          right: getLengthByIndex(2),
        }}
        arcCorner="br"
      ></SwirlBlock>
      <SwirlBlock
        width={getLengthByIndex(7)}
        sideWidths={{ t: 0, r: 1, b: 1, l: 1 }}
        timingDelay={0.6}
        borderOffset={{ t: 0, r: -1, b: -1, l: -1 }}
        position={{
          top: getLengthByIndex(1) + getLengthByIndex(5) + getLengthByIndex(8),
          right: getLengthByIndex(2) + getLengthByIndex(6),
        }}
        arcCorner="bl"
      ></SwirlBlock>
      <SwirlBlock
        width={getLengthByIndex(8)}
        sideWidths={{ t: 1, r: 0, b: 1, l: 1 }}
        timingDelay={0.4}
        borderOffset={{ t: -1, r: 0, b: -1, l: -1 }}
        position={{
          top: getLengthByIndex(1) + getLengthByIndex(5),
          right:
            getLengthByIndex(2) + getLengthByIndex(6) + getLengthByIndex(9),
        }}
        arcCorner="tl"
      ></SwirlBlock>
      <SwirlBlock
        width={getLengthByIndex(9)}
        height={getLengthByIndex(8) / 2}
        sideWidths={{ t: 1, r: 1, b: 0, l: 1 }}
        timingDelay={0.2}
        borderOffset={{ t: -1, r: -1, b: 0, l: -1 }}
        position={{
          top: getLengthByIndex(1) + getLengthByIndex(5),
          right: getLengthByIndex(2) + getLengthByIndex(6),
        }}
        arcCorner="tr"
      ></SwirlBlock>
      <SwirlBlock
        width={getLengthByIndex(9)}
        height={getLengthByIndex(8) / 2}
        sideWidths={{ t: 1, r: 1, b: 1, l: 1 }}
        timingDelay={0}
        borderOffset={{ t: -1, r: -1, b: -1, l: -1 }}
        position={{
          top:
            getLengthByIndex(1) + getLengthByIndex(5) + getLengthByIndex(8) / 2,
          right: getLengthByIndex(2) + getLengthByIndex(6),
        }}
        arcCorner="br"
      ></SwirlBlock>
    </aside>
  );
}
