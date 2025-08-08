import React, { useEffect, useState } from "react";
import Squiggle from "./squiggle";
import { motion } from "framer-motion";

export default function Experience({
  company,
  title,
  date,
  data,
  details,
  scrollRef,
}: {
  company: string;
  title: string;
  date: string;
  data?: { title?: string; subTitle: string, details?: string }[];
  details?: string;
  scrollRef: any;
}) {
  const [wiggle, setWiggle] = useState(false);

  useEffect(() => {
    setTimeout(() => setWiggle(true), 1000);
  });

  return (
    <div className="relative px-12 py-8 ml-24 mb-9">
      {/* DATES */}
      <p className="absolute uppercase -top-7 left-2 md:-left-24 text-sm text-zinc-800 dark:text-zinc-300">
        {date}
      </p>

      {/* LEFT BORDER */}
      <div
        className="absolute top-0 -left-1 h-full flex flex-col"
        style={{ width: "3px" }}
      >
        <div className="h-16 w-[3px] bg-zinc-950 dark:bg-zinc-100" />
        <div
          className="relative"
          style={{
            margin: "4px 0 4px 0",
            left: "-14px",
            transform: "rotate(90deg)",
            width: "31px",
          }}
        >
          <Squiggle wiggle={wiggle} />
        </div>
        <div
          className="flex-grow w-[3px] bg-zinc-950 dark:bg-zinc-100"
          style={{ marginTop: "-1px" }}
        />
      </div>

      {/* COMPANY AND TITLE */}
      <p className="text-sm md:text-base font-semibold uppercase mb-1 text-zinc-700 dark:text-zinc-300">
        {company}
      </p>
      <p
        className={`text-2xl md:text-3xl font-bold mb-6 text-zinc-950 dark:text-zinc-100`}
      >
        {title}
      </p>

      {/* DETAILS */}
      {!!details && (
        <motion.div
          className="max-w-[420px] mb-6"
          style={{ overflow: "hidden" }}
          initial={{ height: 0 }}
          whileInView={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          viewport={{ root: scrollRef, margin: "-100px 0px -200px 0px" }}
        >
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{details}</p>
        </motion.div>
      )}

      {/* DATA */}
      {!!data &&
        data.map((d, i) => (
          <div
            key={i}
            className={`border-l border-zinc-200 dark:border-zinc-800 px-12 mb-6 transition-all duration-300 ${
              d.title ? "py-8" : "py-2"
            } `}
          >
            <p className="text-sm md:text-base font-semibold uppercase mb-1 text-zinc-700 dark:text-zinc-300">
              {d.subTitle}
            </p>
            {d.title && (
              <>
                <p className="text-2xl md:text-3xl font-bold text-zinc-950 dark:text-zinc-100">
                  {d.title}
                </p>
                {!!d.details && (<motion.div
                  className="max-w-[420px] mt-2"
                  style={{ overflow: "hidden" }}
                  initial={{ height: 0 }}
                  whileInView={{ height: "auto" }}
                  transition={{ duration: 0.3 }}
                  viewport={{
                    root: scrollRef,
                    margin: "-100px 0px -200px 0px",
                  }}
                >
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{d.details}</p>
                </motion.div>)}
              </>
            )}
          </div>
        ))}
    </div>
  );
}
