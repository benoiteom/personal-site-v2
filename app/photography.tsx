import React from "react";
import { Major_Mono_Display } from "next/font/google";

const majorMono = Major_Mono_Display({ subsets: ["latin"], weight: "400" });

export default function Photography() {
  return (
    <div className="flex justify-center" style={{ gap: '32px' }}>
      <div className="animate duration-500 max-w-24 flex-grow" />
      <div className="relative max-w-[600px] flex-grow">
        <p className={`${majorMono.className} animate duration-500 mt-8 text-5xl text-zinc-950 dark:text-zinc-100`}>
          PHotos
        </p>
        <div className="mx-8 mt-16">
          <p className="animate duration-500 text-zinc-950 dark:text-zinc-100">
            In development... come back soon 👀
          </p>
        </div>
      </div>
    </div>
  );
}
