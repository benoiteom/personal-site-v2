import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useScrollContext } from "./context/scrollContext.tsx";
import { useThemeContext } from "./context/themeContext.tsx";

const ratio = (1 + Math.sqrt(5)) / 2;

export default function Cursor({ width, isTablet }: { width: number, isTablet: boolean }) {
  const { hasScrolled } = useScrollContext();
  const { isDarkMode } = useThemeContext();

  const [scale, setScale] = useState(1);
  const [stickyElements, setStickyElements] = useState<
    { x: number; y: number }[]
  >([]);

  const mouse = {
    x: useMotionValue(-20),
    y: useMotionValue(-20),
  };
  const smoothOptions = { damping: 20, stiffness: 200, mass: 0.7 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  useEffect(() => {
    if (!width) return;

    if (isTablet) {
      setStickyElements([
        { x: window.innerWidth - 16 - (width * 0.60) - 80, y: width *  0.167 + 32 - 14 },
        { x: window.innerWidth - 16 - (width * 0.38) - 90, y: width * 0.333 + 32 - 14 },
        { x: window.innerWidth - 16 - (width * 0.25) - 80, y: width * 0.50 + 32 - 14 },
        { x: window.innerWidth - 16 - (width * 0.41) + 64, y: width * 0.667 + 32 - 14 },
        { x: window.innerWidth - 16 - (width * 0.49) + 108, y: width * 0.833 + 32 - 14 },
        isDarkMode
          ? { x: window.innerWidth - 16 - width / ratio - (width / ratio / ratio * 0.18) - 16, y: window.innerHeight - 16 - width / ratio / ratio * 0.32 - 16 }  // sun
          : { x: window.innerWidth - 16 - width / ratio - (width / ratio / ratio * 0.68) + 14, y: window.innerHeight - 16 - width / ratio / ratio * 0.82 + 14 },  // moon
      ]);
      return;
    }

    setStickyElements([
      ...(!hasScrolled ? [{ x: window.innerWidth - 16 - (width + width * ratio * 0.56) + 80, y: width * ratio * 0.25 + 32 - 14 },
      { x: window.innerWidth - 16 - (width + width * ratio * 0.78) + 90, y: width * ratio * 0.5 + 32 - 14 },
      { x: window.innerWidth - 16 - (width + width * ratio * 0.885) + 80, y: width * ratio * 0.75 + 32 - 14 }] : []),
      { x: window.innerWidth - 16 - (width * 0.68) + 64, y: width * 0.33 + 32 - 14 },
      { x: window.innerWidth - 16 - (width * 0.61) + 108, y: width * 0.66 + 32 - 14 },
      isDarkMode
        ? { x: window.innerWidth - 16 - width / ratio - (width / ratio / ratio * 0.18) - 16, y: window.innerHeight - 16 - width / ratio / ratio * 0.32 - 16 }  // sun
        : { x: window.innerWidth - 16 - width / ratio - (width / ratio / ratio * 0.68) + 14, y: window.innerHeight - 16 - width / ratio / ratio * 0.82 + 14 },  // moon
    ]);
  }, [width, isDarkMode, hasScrolled]);

  useEffect(() => {
    const manageMouseMove = (e: MouseEvent) => {
      for (const element of stickyElements) {
        const distance = { x: e.clientX - element.x, y: e.clientY - element.y };
        if (Math.abs(distance.x) < 140 && Math.abs(distance.y) < (isTablet ? 40 : 80)) {
          setScale(4);
          mouse.x.set(element.x - 12 + (e.clientY - element.y) * 0.1);
          mouse.y.set(element.y - 12 + (e.clientY - element.y) * 0.1);
          return;
        }
      }
      setScale(1);
      mouse.x.set(e.clientX - 12);
      mouse.y.set(e.clientY - 12);
    };

    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, [stickyElements, isTablet]);

  return (
    <div>
      <motion.div
        style={{
          translateX: smoothMouse.x,
          translateY: smoothMouse.y,
        }}
        animate={{
          scale,
        }}
        className="fixed z-50 w-6 h-6 bg-zinc-100 rounded-full pointer-events-none mix-blend-difference"
      ></motion.div>

      {/* {stickyElements.map((element, index) => (
        <motion.div key={index} className="fixed z-50 w-6 h-6 bg-violet-100 rounded-full pointer-events-none" style={{ translateX: element.x, translateY: element.y }} />
      ))} */}
    </div>
  );
}
