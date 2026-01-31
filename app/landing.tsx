import { useEffect, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Sidebar from "./sidebar";
import { Chivo_Mono } from "next/font/google";
import { ratio } from "./helpers/swirl";
import { useScrollContext } from "./context/scrollContext.tsx";
import { useThemeContext } from "./context/themeContext";

const chivoMono = Chivo_Mono({ subsets: ["latin"], weight: ["100", "400"] });

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
  const { isDarkMode } = useThemeContext();

  const [isSpiralComplete, setIsSpiralComplete] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(1000);
  const [currentTime, setCurrentTime] = useState('');

  // Track when component has mounted to avoid hydration issues with useScroll
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const formatDateTime = () => {
    const now = new Date();
    return now.toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).replace(',', '').replace(/\//g, '-');
  };

  useEffect(() => {
    setCurrentTime(formatDateTime());
    const interval = setInterval(() => {
      setCurrentTime(formatDateTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setViewportWidth(window.innerWidth);
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollY } = useScroll({
    container: isMounted ? scrollRef : undefined,
  });
  const translateNameX = useTransform(scrollY, [0, 500], [0, -viewportWidth]);
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
    <div id="landing" className="sticky top-0 mx-4 flex justify-between min-h-screen">
      {/* Timestamp & Location */}
      <div className="absolute transition-all duration-500 top-3 -left-1 w-[145px] h-5 rounded-full bg-zinc-100 dark:bg-zinc-950 blur" style={{ opacity: isSpiralComplete && !hasScrolled ? 1 : 0 }} />
      <div className="absolute transition-all duration-500 top-9 -left-1 w-[95px] h-5 rounded-full bg-zinc-100 dark:bg-zinc-950 blur" style={{ opacity: isSpiralComplete && !hasScrolled ? 1 : 0 }} />
      <div
        className={`absolute top-3 left-0 z-30 text-sm font-thin text-zinc-950 dark:text-zinc-100 opacity-50 hover:opacity-100 transition-all duration-500 ${chivoMono.className}`}
        style={{
          top: isSpiralComplete && !hasScrolled ? '12px' : '-40px',
        }}
      >
        <p>{currentTime}</p>
        <p className="mt-1">California</p>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-4 left-4 z-20 w-[100px] h-5 rounded-full bg-zinc-100 dark:bg-zinc-950 -rotate-90 origin-bottom-left blur transition-all duration-500"
        style={{ opacity: isSpiralComplete && !hasScrolled ? 1 : 0 }}
      />
      <p
        className={`absolute bottom-4 z-30 text-sm font-thin text-zinc-950 dark:text-zinc-100 -rotate-90 origin-bottom-left hover:opacity-100 transition-all duration-500 ${chivoMono.className}`}
        style={{
          left: isSpiralComplete && !hasScrolled ? '16px' : '-16px',
        }}
      >
        Scroll down
      </p>

      {/* Blog Link */}
      <div className="absolute transition-all duration-500 top-7 right-3 w-[160px] h-5 rounded-full bg-zinc-100 dark:bg-zinc-950 blur" style={{ opacity: isSpiralComplete ? 1 : 0 }} />
      <a
        href="https://blog.benoiteom.com/view/1544840e-4da0-4f50-b5ec-2cfdf7ea51fe/en/Blog"
        target="_blank"
        className={`absolute right-4 top-7 z-30 text-sm font-thin text-zinc-950 dark:text-zinc-100 transition-all duration-500 ${chivoMono.className}`}
        style={{
          top: isSpiralComplete ? '28px' : '-18px',
        }}
      >
        Check out my blog!
      </a>

      {/* Home Button - slides in when scrolled */}
      {/* <div
        className="absolute transition-all duration-500 top-7 right-3 w-[50px] h-5 rounded-full bg-zinc-100 dark:bg-zinc-950 blur"
        style={{ opacity: hasScrolled && isSpiralComplete ? 1 : 0 }}
      />
      <button
        onClick={() => scrollToById('landing')}
        className={`absolute top-7 z-30 text-sm font-thin text-zinc-950 dark:text-zinc-100 opacity-50 hover:opacity-100 transition-all duration-500 cursor-pointer ${chivoMono.className}`}
        style={{
          right: hasScrolled && isSpiralComplete ? '16px' : '-52px',
        }}
      >
        Home
      </button> */}

      <motion.div
        className="min-h-screen flex flex-col justify-center items-center text-center"
        style={{ translateX: translateNameX, width: `calc(100% - ${width}px)` }}
      >
        <div className="relative z-40">
          <div className="absolute -inset-x-2 inset-y-1 rounded-full bg-zinc-100 dark:bg-zinc-950 blur transition-all duration-500" style={{ opacity: isSpiralComplete ? 1 : 0 }} />
          <p
            className={`relative animate duration-500 text-5xl text-zinc-950 dark:text-zinc-100 ${chivoMono.className}`}
          >
            Benoît
          </p>
        </div>
        <div className="relative z-40">
          <div className="absolute -inset-x-2 inset-y-1 rounded-full bg-zinc-100 dark:bg-zinc-950 blur transition-all duration-500" style={{ opacity: isSpiralComplete ? 1 : 0 }} />
          <p
            className={`relative animate duration-500 text-5xl text-zinc-950 dark:text-zinc-100 ${chivoMono.className}`}
          >
            Ortalo-Magné
          </p>
        </div>
      </motion.div>
      {!!width && (
        <div className="relative top-4 z-10">
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
              <div 
                className="z-20 absolute transition-all duration-500 w-full h-full rounded-tl-full border-t border-l border-zinc-950 dark:border-zinc-100" 
              />
            </motion.div>
          </div>
          <Sidebar width={width} isSpiralComplete={isSpiralComplete} />
        </div>
      )}
    </div>
  );
}
