import { interpolate } from "flubber";
import React, { useEffect, useState } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useThemeContext } from "./context/themeContext.tsx";

export default function Squiggle({ wiggle = false, curved = false }) {
  const paths = curved ? [
    "M43.3534 14.2843V16.2819C38.5 16.2819 34.5 3 29.5 3C24.5 3 19.5 30.5 14.5 30.5C9.5 30.5 5.03444 16.8802 0.364551 17.0738L0.26416 15.1054C5.03476 14.8877 9.5 28 14.5 28C19.5 28 24.5 0.5 29.5 0.5C34.5 0.5 38.5 14.2843 43.3534 14.2843Z",
    "M0.26416 15.1059L10.6415 14.6892L21.0539 14.3989L31.488 14.2723L41.9541 14.2848V16.2824L31.4966 16.2561L21.0539 16.3862L10.6969 16.6711L0.364551 17.0743L0.26416 15.1059Z",
  ] : [
    "M44 14.0009V18C39.0441 18 35.1056 18 30 18C24.8944 18 19.6056 18 14.5 18C9.39438 18 5 18 1.53861e-07 18L0 14.0009C4.91345 14.0018 9.43155 14.0009 14.5372 14.0009C19.6428 14.0009 24.7484 14 29.854 14C34.9596 14 39.0441 14.0009 44 14.0009Z",
    "M44 14V18C39.0441 18 35.0252 3.55554 29.9196 3.55554C24.814 3.55554 19.6428 31.9999 14.5372 31.9999C9.43155 31.9999 4.73471 18 0 18L0 14C5 14 9.43155 28.4443 14.5372 28.4443C19.6428 28.4443 24.7484 0 29.854 0C34.9596 0 39.0441 14 44 14Z",
  ];

  const { isDarkMode } = useThemeContext();

  const [pathIndex, setPathIndex] = useState(0);

  const progress = useMotionValue(pathIndex);
  const arrayOfIndex = paths.map((_, i) => i);
  const path = useTransform(progress, arrayOfIndex, paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 1 }),
  });

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.5,
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          return
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      },
    });
    return () => {
      animation.stop();
    };
  }, [pathIndex, progress]);

  useEffect(() => {
    if (wiggle) {
      progress.set(0);
      setPathIndex(1);
    } else {
      progress.set(0);
      setPathIndex(0);
    }
  }, [wiggle])

  return (
    <svg
      className="relative w-full z-20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 44 32"
    >
      <rect x="0.5" width="43" height="32" fill={isDarkMode ? '#09090B' : '#F4F4F5'} className="transition-all duration-500" />
      <motion.path d={path} fill={!isDarkMode ? '#09090B' : '#F4F4F5'} className="transition-all duration-500" />
    </svg>
  );
}
