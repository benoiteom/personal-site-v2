import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Sidebar from "./sidebar";
import { Major_Mono_Display } from "next/font/google";
import { ratio } from "./helpers/swirl";
import { useScrollContext } from "./context/scrollContext.tsx";

const majorMono = Major_Mono_Display({ subsets: ["latin"], weight: "400" });

export default function Landing({
  width,
  scrollRef,
  isTablet,
}: {
  width: number;
  scrollRef: any;
  isTablet: boolean;
}) {
  const { hasScrolled, setHasScrolled, scrollToById } = useScrollContext();

  const [isSpiralComplete, setIsSpiralComplete] = useState(false);

  const { scrollY } = useScroll({
    container: scrollRef,
  });
  const translateNameX = useTransform(scrollY, [0, 500], [0, -1000]);
  const rotateArcZero = useTransform(scrollY, [0, 500], [0, 90]);

  useEffect(() => {
    setIsSpiralComplete(false);
    setTimeout(() => setIsSpiralComplete(true), 2200);
  }, [width, isTablet]);

  const getLengthByIndex = (i: number) => {
    return width * (1 / ratio) ** (i - 1);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHasScrolled(latest > 80);
  });

  return (
    <div className="sticky top-0 mx-4 flex justify-between min-h-screen">
      <motion.div
        className={isTablet ? "min-h-screen flex flex-col justify-center items-center" : "pt-4"}
        style={{ translateX: translateNameX, width: `calc(100% - ${width}px)` }}
      >
        <p
          className={`animate duration-500 text-5xl text-zinc-950 dark:text-zinc-100 ${majorMono.className}`}
        >
          Benoît
        </p>
        <p
          className={`animate duration-500 text-5xl text-zinc-950 dark:text-zinc-100 my-1 ${majorMono.className}`}
        >
          Ortalo
        </p>
        <p
          className={`animate duration-500 text-5xl text-zinc-950 dark:text-zinc-100 ${majorMono.className}`}
        >
          -Magné
        </p>
      </motion.div>
      {!!width && (
        <div className="relative top-4">
          <div
            id="block-0"
            className="absolute overflow-hidden"
            style={{
              top: "0",
              right: `${getLengthByIndex(1) - 2}px`,
              height: `${getLengthByIndex(0)}px`,
              width: `${getLengthByIndex(0)}px`,
            }}
          >
            <motion.div
              className="absolute w-full h-full origin-bottom-right"
              style={{
                rotate: rotateArcZero,
              }}
              initial={{ rotate: "90deg" }}
              animate={{ rotate: "0deg" }}
              transition={{ delay: 2.4, duration: 0.2 }}
            >
              <div className="z-20 absolute transition-all duration-500 w-full h-full rounded-tl-full border-t-4 border-l-4 border-zinc-950 dark:border-zinc-100" />
            </motion.div>
            {!isTablet && (
              <>
                <div
                  className="absolute transition-all duration-500 top-[25%] -mt-5 right-[34%] -mr-4 w-52 h-10 rounded-full bg-zinc-100 dark:bg-zinc-950 blur"
                  style={
                    !isSpiralComplete || hasScrolled
                      ? { opacity: "0" }
                      : { opacity: "1" }
                  }
                />
                <p
                  className={`transition-all duration-500 cursor-pointer absolute z-30 top-[25%] right-[34%] text-3xl text-zinc-950 dark:text-zinc-100 ${majorMono.className}`}
                  style={
                    !isSpiralComplete || hasScrolled
                      ? { transform: "translateY(0)", opacity: "0" }
                      : { transform: "translateY(-50%)", opacity: "1" }
                  }
                  onClick={() => scrollToById("about")}
                >
                  <span className="uppercase">a</span>bout me
                </p>
                <div
                  className="absolute transition-all duration-500 top-[50%] -mt-5 right-[52%] -mr-4 w-64 h-10 rounded-full bg-zinc-100 dark:bg-zinc-950 blur"
                  style={
                    !isSpiralComplete || hasScrolled
                      ? { opacity: "0" }
                      : { opacity: "1" }
                  }
                />
                <p
                  className={`transition-all duration-500 cursor-pointer absolute z-20 top-[50%] right-[52%] text-3xl text-zinc-950 dark:text-zinc-100 ${majorMono.className}`}
                  style={
                    !isSpiralComplete || hasScrolled
                      ? { transform: "translateY(0)", opacity: "0" }
                      : { transform: "translateY(-50%)", opacity: "1" }
                  }
                  onClick={() => scrollToById("experience")}
                >
                  e<span className="uppercase">x</span>perience
                </p>
                <div
                  className="absolute transition-all duration-500 top-[75%] -mt-5 right-[68%] -mr-4 w-52 h-10 rounded-full bg-zinc-100 dark:bg-zinc-950 blur"
                  style={
                    !isSpiralComplete || hasScrolled
                      ? { opacity: "0" }
                      : { opacity: "1" }
                  }
                />
                <p
                  className={`transition-all duration-500 cursor-pointer absolute z-20 top-[75%] right-[68%] text-3xl text-zinc-950 dark:text-zinc-100 ${majorMono.className}`}
                  style={
                    !isSpiralComplete || hasScrolled
                      ? { transform: "translateY(0)", opacity: "0" }
                      : { transform: "translateY(-50%)", opacity: "1" }
                  }
                  onClick={() => scrollToById("projects")}
                >
                  p<span className="uppercase">r</span>ojects
                </p>
              </>
            )}
          </div>
          <Sidebar width={width} isSpiralComplete={isSpiralComplete} isTablet={isTablet} />
        </div>
      )}
    </div>
  );
}
