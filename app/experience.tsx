import React, { useEffect, useState } from "react";
import Squiggle from "./squiggle";

export default function Experience({
  company,
  title,
  date,
  data,
}: {
  company: string;
  title: string;
  date: string;
  data?: { title?: string; subTitle: string }[];
}) {
  const [wiggle, setWiggle] = useState(false);

  useEffect(() => {
    setTimeout(() => setWiggle(true), 1000);
  })

  return (
    <div className="relative px-12 py-8 ml-24 mb-9">

      {/* DATES */}
      <p className="absolute uppercase -top-7 left-2 md:-left-24 text-sm text-zinc-800 dark:text-zinc-300">
        {date}
      </p>

      {/* LEFT BORDER */}
      <div className="transition-all duration-500 absolute top-0 -left-1 h-full bg-zinc-950 dark:bg-zinc-100" style={{ width: '3px' }}>
        <div className="relative h-auto top-16" style={{ left: '-14px', transform: "rotate(90deg)", width: '31px' }}>
          <Squiggle wiggle={wiggle} />
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="text-sm md:text-base font-semibold uppercase mb-1 text-zinc-700 dark:text-zinc-300">
        {company}
      </p>
      <p
        className={`text-2xl md:text-3xl font-bold ${
          data ? "mb-10" : ""
        } text-zinc-950 dark:text-zinc-100`}
      >
        {title}
      </p>

      {/* DATA */}
      {!!data &&
        data.map((d, i) => (
          <div
            key={i}
            className={`border-l-2 border-zinc-400 dark:border-zinc-600 px-12 mb-6 ${
              d.title ? "py-8" : "py-2"
            } `}
          >
            <p className="text-sm md:text-base font-semibold uppercase mb-1 text-zinc-700 dark:text-zinc-300">
              {d.subTitle}
            </p>
            {d.title && (
              <p className="text-2xl md:text-3xl font-bold text-zinc-950 dark:text-zinc-100">
                {d.title}
              </p>
            )}
          </div>
        ))}
    </div>
  );
}
