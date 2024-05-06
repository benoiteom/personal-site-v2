import { Major_Mono_Display } from "next/font/google";
import { useEffect, useState } from "react";
import Squiggle from "./squiggle";
import { ratio } from "./helpers/swirl";
import SwirlBlock from "./swirlBlock";
import DarkMode from "./darkMode";
import { useScrollContext } from "./context/scrollContext";

const majorMono = Major_Mono_Display({ subsets: ["latin"], weight: "400" });

export default function Sidebar({
  width,
  isSpiralComplete,
  isTablet,
}: {
  width: number;
  isSpiralComplete: boolean;
  isTablet: boolean;
}) {
  const { scrollToById } = useScrollContext();

  const getLengthByIndex = (i: number) => {
    return width * (1 / ratio) ** (i - 1);
  };

  return (
    <aside style={{ width }} className="mr-4">
      <SwirlBlock
        width={getLengthByIndex(1)}
        sideWidths={{ t: 4, r: 4, b: 0, l: 4 }}
        timingDelay={1.8}
        borderOffset={{ t: 0, r: 0, b: 0, l: 0 }}
        position={{ top: 0, right: 0 }}
        arcCorner="tr"
      >
        {isTablet && (
          <>
            <div
              className="absolute transition-all duration-500 top-[16.7%] -mt-5 right-[58%] w-52 h-10 rounded-full bg-zinc-100 dark:bg-zinc-950 blur"
              style={{ opacity: "1" }}
            />
            <p
              className={`transition-all duration-500 cursor-pointer absolute z-30 top-[16.7%] right-[60%] text-2xl text-zinc-950 dark:text-zinc-100 ${majorMono.className}`}
              style={{ transform: "translateY(-50%)", opacity: "1" }}
              onClick={() => scrollToById("about")}
            >
              p<span className="uppercase">r</span>ojects
            </p>
            <div
              className="absolute transition-all duration-500 top-[33%] -mt-5 right-[36%] w-64 h-10 rounded-full bg-zinc-100 dark:bg-zinc-950 blur"
              style={{ opacity: "1" }}
            />
            <p
              className={`transition-all duration-500 cursor-pointer absolute z-20 top-[33%] right-[38%] text-2xl text-zinc-950 dark:text-zinc-100 ${majorMono.className}`}
              style={{ transform: "translateY(-50%)", opacity: "1" }}
              onClick={() => scrollToById("experience")}
            >
              e<span className="uppercase">x</span>perience
            </p>
            <div
              className="absolute transition-all duration-500 top-[50%] -mt-5 right-[23%] w-52 h-10 rounded-full bg-zinc-100 dark:bg-zinc-950 blur"
              style={{ opacity: "1" }}
            />
            <p
              className={`transition-all duration-500 cursor-pointer absolute z-20 top-[50%] right-[25%] text-2xl text-zinc-950 dark:text-zinc-100 ${majorMono.className}`}
              style={{ transform: "translateY(-50%)", opacity: "1" }}
              onClick={() => scrollToById("projects")}
            >
              <span className="uppercase">a</span>bout me
            </p>
          </>
        )}
        <div
          className="absolute transition-all duration-500 -mt-5 -mr-4 w-44 h-10 rounded-full bg-zinc-100 dark:bg-zinc-950 blur"
          style={{
            top: isTablet ? "66.7%" : "33%",
            right: isTablet ? "17%" : "42%",
          }}
        />
        <p
          className={`transition-all duration-500 absolute z-20 cursor-pointer text-${
            isTablet ? "2xl" : "3xl"
          } text-zinc-950 dark:text-zinc-100 ${majorMono.className}`}
          style={{
            transform: !isSpiralComplete ? "translateY(0)" : "translateY(-50%)",
            opacity: !isSpiralComplete ? "0" : "1",
            top: isTablet ? "66.7%" : "33%",
            right: isTablet ? "17%" : "42%",
          }}
          onClick={() => scrollToById("contact")}
        >
          cont<span className="uppercase">a</span>ct
        </p>
        <div
          className="absolute transition-all duration-500 -mt-5 -mr-4 w-[264px] h-10 rounded-full bg-zinc-100 dark:bg-zinc-950 blur"
          style={{
            top: isTablet ? "83.3%" : "66%",
            right: isTablet ? "10%" : "22%",
          }}
        />
        <p
          className={`transition-all duration-500 absolute z-20 cursor-pointer text-${
            isTablet ? "2xl" : "3xl"
          } text-zinc-950 dark:text-zinc-100 ${majorMono.className}`}
          style={{
            transform: !isSpiralComplete ? "translateY(0)" : "translateY(-50%)",
            opacity: !isSpiralComplete ? "0" : "1",
            top: isTablet ? "83.3%" : "66%",
            right: isTablet ? "10%" : "22%",
          }}
          onClick={() => scrollToById("photography")}
        >
          p<span className="uppercase">h</span>otography
        </p>
      </SwirlBlock>
      <SwirlBlock
        width={getLengthByIndex(2)}
        sideWidths={{ t: 4, r: 4, b: 4, l: 0 }}
        timingDelay={1.6}
        borderOffset={{ t: -2, r: 0, b: 0, l: 0 }}
        position={{ top: getLengthByIndex(1), right: 0 }}
        arcCorner="br"
      >
        {isSpiralComplete && (
          <div
            className="relative z-20 mt-10 ml-10"
            style={{ width: "fit-content" }}
          >
            <div className="relative cursor-pointer w-fit-content p-2 m-3">
              <div className="absolute transition-all duration-500 top-2 left-0 w-full h-8 rounded-full bg-zinc-100 dark:bg-zinc-950 blur" />
              <a
                className={`${majorMono.className} relative transition-all duration-500 resume-pdf cursor-pointer text-2xl text-zinc-950 dark:text-zinc-100`}
                onClick={() =>
                  window.open("/Benoit Ortalo-Magne Resume.pdf", "_blank")
                }
              >
                resume pdf
              </a>
              <div className="resume-pdf-underline transition-all duration-500 w-full h-1 origin-left bg-zinc-950 dark:bg-zinc-100" />
            </div>
            <div className="relative cursor-pointer w-fit-content p-2 m-3">
              <div className="absolute transition-all duration-500 top-2 left-0 w-full h-8 rounded-full bg-zinc-100 dark:bg-zinc-950 blur" />
              <a
                className={`${majorMono.className} relative transition-all duration-500 linkedin cursor-pointer text-2xl text-zinc-950 dark:text-zinc-100`}
                onClick={() =>
                  window.open("https://www.linkedin.com/in/bo-m/", "_blank")
                }
              >
                linkedin
              </a>
              <div className="linkedin-underline transition-all duration-500 w-full h-1 origin-right bg-zinc-950 dark:bg-zinc-100" />
            </div>
            <div className="relative cursor-pointer w-fit-content p-2 m-3">
              <div className="absolute transition-all duration-500 top-2 left-0 w-full h-8 rounded-full bg-zinc-100 dark:bg-zinc-950 blur" />
              <a
                className={`${majorMono.className} relative transition-all duration-500 github cursor-pointer text-2xl text-zinc-950 dark:text-zinc-100`}
                onClick={() =>
                  window.open("https://github.com/benoiteom", "_blank")
                }
              >
                Github
              </a>
              <div className="github-underline transition-all duration-500 w-full h-1 origin-left bg-zinc-950 dark:bg-zinc-100" />
            </div>
          </div>
        )}
      </SwirlBlock>
      <SwirlBlock
        width={getLengthByIndex(3)}
        sideWidths={{ t: 0, r: 4, b: 4, l: 4 }}
        timingDelay={1.4}
        borderOffset={{ t: 0, r: -2, b: 0, l: 0 }}
        position={{
          top: getLengthByIndex(1) + getLengthByIndex(4),
          right: getLengthByIndex(2),
        }}
        arcCorner="bl"
      >
        {isSpiralComplete && <DarkMode />}
      </SwirlBlock>
      <SwirlBlock
        width={getLengthByIndex(4)}
        sideWidths={{ t: 4, r: 0, b: 4, l: 4 }}
        timingDelay={1.2}
        borderOffset={{ t: -2, r: 0, b: -2, l: 0 }}
        position={{
          top: getLengthByIndex(1),
          right: getLengthByIndex(2) + getLengthByIndex(5),
        }}
        arcCorner="tl"
      ></SwirlBlock>
      <SwirlBlock
        width={getLengthByIndex(5)}
        sideWidths={{ t: 4, r: 4, b: 0, l: 4 }}
        timingDelay={1}
        borderOffset={{ t: -2, r: -2, b: 0, l: -2 }}
        position={{ top: getLengthByIndex(1), right: getLengthByIndex(2) }}
        arcCorner="tr"
      ></SwirlBlock>
      <SwirlBlock
        width={getLengthByIndex(6)}
        sideWidths={{ t: 4, r: 4, b: 4, l: 0 }}
        timingDelay={0.8}
        borderOffset={{ t: -2, r: -2, b: -2, l: 0 }}
        position={{
          top: getLengthByIndex(1) + getLengthByIndex(5),
          right: getLengthByIndex(2),
        }}
        arcCorner="br"
      ></SwirlBlock>
      <SwirlBlock
        width={getLengthByIndex(7)}
        sideWidths={{ t: 0, r: 4, b: 4, l: 4 }}
        timingDelay={0.6}
        borderOffset={{ t: 0, r: -2, b: -2, l: -2 }}
        position={{
          top: getLengthByIndex(1) + getLengthByIndex(5) + getLengthByIndex(8),
          right: getLengthByIndex(2) + getLengthByIndex(6),
        }}
        arcCorner="bl"
      ></SwirlBlock>
      <SwirlBlock
        width={getLengthByIndex(8)}
        sideWidths={{ t: 4, r: 0, b: 4, l: 4 }}
        timingDelay={0.4}
        borderOffset={{ t: -2, r: 0, b: -2, l: -2 }}
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
        sideWidths={{ t: 4, r: 4, b: 0, l: 4 }}
        timingDelay={0.2}
        borderOffset={{ t: -2, r: -2, b: 0, l: -2 }}
        position={{
          top: getLengthByIndex(1) + getLengthByIndex(5),
          right: getLengthByIndex(2) + getLengthByIndex(6),
        }}
        arcCorner="tr"
      ></SwirlBlock>
      <SwirlBlock
        width={getLengthByIndex(9)}
        height={getLengthByIndex(8) / 2}
        sideWidths={{ t: 4, r: 4, b: 4, l: 4 }}
        timingDelay={0}
        borderOffset={{ t: -2, r: -2, b: -2, l: -2 }}
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
