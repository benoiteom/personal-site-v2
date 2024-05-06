import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Major_Mono_Display } from "next/font/google";
import MiniSwirl from "./svg/miniSwirl";
import { useScrollContext } from "./context/scrollContext";
import { useThemeContext } from "./context/themeContext";
import Sun from "./svg/sun";
import Moon from "./svg/moon";
import Github from "./svg/github";
import Linkedin from "./svg/linkedin";
import Resume from "./svg/resume";

const majorMono = Major_Mono_Display({ subsets: ["latin"], weight: "400" });

export default function MobileLanding({ scrollRef }: { scrollRef: any }) {
  const { scrollToById } = useScrollContext();
  const { isDarkMode, setIsDarkMode } = useThemeContext();
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuBg, setShowMenuBg] = useState(false);

  const { scrollY } = useScroll({
    container: scrollRef,
  });
  const translateNameX = useTransform(scrollY, [0, 500], [0, -1000]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (showMenu) {
      setTimeout(() => {
        setShowMenuBg(false);
      }, 500);
    }
    setShowMenuBg(true);
  };

  const handleScroll = (id: string) => {
    scrollToById(id);
    setShowMenu(false);
    setTimeout(() => {
      setShowMenuBg(false);
    }, 500);
  };

  return (
    <div className="relative z-30 min-h-screen">
      <div className="fixed z-20 top-0 py-4 mx-4 w-[calc(100vw-32px)]">
        <div
          className="relative w-full overflow-hidden"
          style={{ height: showMenuBg ? "100vh" : "80px" }}
        >
          <div className="transition-all duration-500 relative z-30 h-20 flex justify-between items-center w-full p-3 border-4 border-zinc-950 dark:border-zinc-100 bg-zinc-100 dark:bg-zinc-950">
            <p
              className={`transition-all duration-500 text-xl text-zinc-950 dark:text-zinc-100 mr-3 ${majorMono.className}`}
            >
              Benoît <span className="whitespace-nowrap">O-M</span>
            </p>
            <div className="flex items-center">
              <MiniSwirl height="80px" color={isDarkMode ? "#F4F4F5" : "#09090B"} className="transition-all duration-500" />
              <div className="cursor-pointer" onClick={toggleMenu}>
                <p
                  className="transition-all duration-500 ml-[26px] mr-3 text-2xl text-zinc-950 dark:text-zinc-100"
                  style={{
                    transform: showMenu ? "rotate(0deg)" : "rotate(-90deg)",
                  }}
                >
                  |||
                </p>
              </div>
            </div>
          </div>
          <div
            className="transition-all duration-500 absolute z-10 top-[76px] left-0 w-full origin-top-left rounded-br-full border-4 border-zinc-950 dark:border-zinc-100 bg-zinc-100 dark:bg-zinc-950"
            style={{
              height: "calc(100vw - 32px)",
              transform: showMenu ? "rotate(0deg)" : "rotate(-90deg)",
            }}
          >
            <div className="h-40 w-40 p-6 rounded-br-full border-b-4 border-r-4 border-zinc-950 dark:border-zinc-100">
              <div className="flex items-center">
                <Github
                  height="36px"
                  className="mr-6"
                  color={!isDarkMode ? "#09090B" : "#F4F4F5"}
                  onClick={() =>
                    window.open("https://github.com/benoiteom", "_blank")
                  }
                />
                <Resume
                  height="36px"
                  color={!isDarkMode ? "#09090B" : "#F4F4F5"}
                  onClick={() =>
                    window.open("/Benoit Ortalo-Magne Resume.pdf", "_blank")
                  }
                />
              </div>
              <Linkedin
                height="32px"
                className="mt-6 ml-[2px]"
                color={!isDarkMode ? "#09090B" : "#F4F4F5"}
                onClick={() =>
                  window.open("https://www.linkedin.com/in/bo-m/", "_blank")
                }
              />
            </div>
            <div className="absolute top-44 left-4 h-20 w-20 flex justify-center items-center cursor-pointer rounded-full border-4 border-zinc-950 dark:border-zinc-100">
              {isDarkMode ? (
                <Sun
                  width={32}
                  height={32}
                  className="animate duration-500 text-zinc-950 dark:text-zinc-100"
                  onClick={() => setIsDarkMode(false)}
                />
              ) : (
                <Moon
                  width={28}
                  height={28}
                  className="animate duration-500 text-zinc-950 dark:text-zinc-100"
                  onClick={() => setIsDarkMode(true)}
                />
              )}
            </div>
            <p
              className={`${majorMono.className} absolute top-[16.6%] right-[6%] cursor-pointer animate duration-500 text-xl text-zinc-950 dark:text-zinc-100`}
              style={{ transform: "translateY(-50%)" }}
              onClick={() => handleScroll("projects")}
            >
              p<span className="uppercase">r</span>ojects
            </p>
            <p
              className={`${majorMono.className} absolute top-[33.3%] right-[10%] cursor-pointer animate duration-500 text-xl text-zinc-950 dark:text-zinc-100`}
              style={{ transform: "translateY(-50%)" }}
              onClick={() => handleScroll("experience")}
            >
              work e<span className="uppercase">x</span>p
            </p>
            <p
              className={`${majorMono.className} absolute top-[50%] right-[20%] cursor-pointer animate duration-500 text-xl text-zinc-950 dark:text-zinc-100`}
              style={{ transform: "translateY(-50%)" }}
              onClick={() => handleScroll("about")}
            >
              <span className="uppercase">a</span>bout me
            </p>
            <p
              className={`${majorMono.className} absolute top-[66.7%] right-[32%] cursor-pointer animate duration-500 text-xl text-zinc-950 dark:text-zinc-100`}
              style={{ transform: "translateY(-50%)" }}
              onClick={() => handleScroll("contact")}
            >
              cont<span className="uppercase">a</span>ct
            </p>
            <p
              className={`${majorMono.className} absolute top-[83.3%] right-[56%] cursor-pointer animate duration-500 text-xl text-zinc-950 dark:text-zinc-100`}
              style={{ transform: "translateY(-50%)" }}
              onClick={() => handleScroll("photography")}
            >
              p<span className="uppercase">h</span>otos
            </p>
          </div>
        </div>
      </div>
      <motion.div
        className="relative z-10 min-h-screen flex flex-col justify-center items-center"
        style={{ translateX: translateNameX }}
      >
        <p
          className={`animate duration-500 text-6xl text-zinc-950 dark:text-zinc-100 ${majorMono.className}`}
        >
          Benoît
        </p>
        <p
          className={`animate duration-500 text-6xl text-zinc-950 dark:text-zinc-100 my-1 ${majorMono.className}`}
        >
          Ortalo
        </p>
        <p
          className={`animate duration-500 text-6xl text-zinc-950 dark:text-zinc-100 ${majorMono.className}`}
        >
          -Magné
        </p>
      </motion.div>
    </div>
  );
}
