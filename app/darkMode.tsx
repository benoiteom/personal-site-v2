import React from "react";
import Sun from "./svg/sun";
import Moon from "./svg/moon";
import Cloud from "./svg/cloud";
import { useThemeContext } from "./context/themeContext.tsx";

export default function DarkMode() {
  const { isDarkMode, setIsDarkMode } = useThemeContext();

  return (
    <div className="relative h-full w-full" onClick={() => setIsDarkMode(!isDarkMode)}>
      <div className="absolute animate duration-500 top-[5%] left-[19.5%] w-24 h-24 rounded-full bg-zinc-100 dark:bg-zinc-950 opacity-90 blur" />
      <div className="background-moon absolute z-30 top-[5%] left-[19.5%] w-24 h-24 rounded-full cursor-pointer dark:cursor-default" />
      <div className="absolute top-[18%] left-[32%]">
        <Moon
          width={28}
          height={28}
          className="animate duration-500 text-zinc-950 dark:text-zinc-100"
        />
      </div>
      <div
        className={`background-moon-cloud animate duration-300 absolute top-[19%] left-[31%] ${
          isDarkMode ? "translate-x-4 opacity-0" : "opacity-1"
        }`}
      >
        <Cloud width={42} height={42} />
      </div>

      <div className="absolute animate duration-500 bottom-[18%] right-[2%] w-24 h-24 rounded-full bg-zinc-100 dark:bg-zinc-950 opacity-90 blur" />
      <div className="background-sun absolute z-30 bottom-[18%] right-[2%] w-24 h-24 rounded-full cursor-default dark:cursor-pointer" />
      <div className="absolute bottom-[32%] right-[18%]">
        <Sun
          width={32}
          height={32}
          className="animate duration-500 text-zinc-950 dark:text-zinc-100"
        />
      </div>
      <div
        className={`background-sun-cloud animate duration-300 absolute bottom-[27%] right-[13%] ${
          !isDarkMode ? "translate-x-4 opacity-0" : "opacity-1"
        }`}
      >
        <Cloud width={42} height={42} />
      </div>
    </div>
  )
}