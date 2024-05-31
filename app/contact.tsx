import React from "react";
import { Major_Mono_Display } from "next/font/google";

const majorMono = Major_Mono_Display({ subsets: ["latin"], weight: "400" });

export default function Contact() {
  return (
    <div className="flex justify-center" style={{ gap: "32px" }}>
      <div className="animate duration-500 max-w-24 flex-grow" />
      <div className="relative max-w-[600px] flex-grow p-8 rounded-full border-2 border-zinc-950 dark:border-zinc-100">
        <p
          className="animate duration-500 text-zinc-950 dark:text-zinc-100"
        >
          Let&apos;s get in touch! You can{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => window.open("mailto:benoiteomi@gmail.com", "_blank")}
          >
            email me
          </span>{" "}
          or find me on{" "}
          <span
            className="underline cursor-pointer"
            onClick={() =>
              window.open("https://www.linkedin.com/in/bo-m/", "_blank")
            }
          >
            LinkedIn
          </span>
          .
        </p>
      </div>
    </div>
  );
}
