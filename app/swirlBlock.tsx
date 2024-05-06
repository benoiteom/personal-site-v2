import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SwirlBlock({
  children,
  width,
  height,
  sideWidths,
  timingDelay,
  borderOffset,
  position,
  arcCorner,
}: {
  children?: React.ReactNode;
  width: number;
  height?: number;
  sideWidths: { t: number; r: number; b: number; l: number };
  timingDelay: number;
  borderOffset: { t: number; r: number; b: number; l: number };
  position: { top: number; right: number };
  arcCorner: "tr" | "tl" | "br" | "bl";
}) {
  let origin;
  let arcStyles;
  let animationDelays;

  switch (arcCorner) {
    case "tr":
      origin = { t: 0, r: 1, b: 1, l: 0 };
      arcStyles = { borderWidth: `4px 4px 0 0`, borderRadius: "0 100% 0 0", originX: 0, originY: 1 };
      animationDelays = {
        t: timingDelay + .2,
        r: timingDelay,
        b: timingDelay,
        l: timingDelay + .2,
      };
      break;
    case "tl":
      origin = { t: 1, r: 0, b: 0, l: 1 };
      arcStyles = { borderWidth: `4px 0 0 4px`, borderRadius: "100% 0 0 0", originX: 1, originY: 1 };
      animationDelays = {
        t: timingDelay + .2,
        r: timingDelay + .2,
        b: timingDelay,
        l: timingDelay,
      };
      break;
    case "br":
      origin = { t: 1, r: 0, b: 0, l: 1 };
      arcStyles = { borderWidth: `0 4px 4px 0`, borderRadius: "0 0 100% 0", originX: 0, originY: 0 };
      animationDelays = {
        t: timingDelay,
        r: timingDelay,
        b: timingDelay + .2,
        l: timingDelay + .2,
      };
      break;
    case "bl":
      origin = { t: 0, r: 1, b: 1, l: 0 };
      arcStyles = { borderWidth: `0 0 4px 4px`, borderRadius: "0 0 0 100%", originX: 1, originY: 0 };
      animationDelays = {
        t: timingDelay + .2,
        r: timingDelay,
        b: timingDelay,
        l: timingDelay + .2,
      };
      break;
  }

  return (
    <div
      className="absolute"
      style={{
        width: width,
        height: height || width,
        top: position.top,
        right: position.right,
      }}
    >
      {/* TOP */}
      <motion.div
        className="absolute z-10 transition-all duration-500 bg-zinc-400 dark:bg-zinc-500"
        style={{
          top: `${borderOffset.t}px`,
          left: 0,
          width: "100%",
          height: `${sideWidths.t}px`,
          originX: origin.t,
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: animationDelays.t, duration: 0.2 }}
      />
      {/* RIGHT */}
      <motion.div
        className="absolute z-10 transition-all duration-500 bg-zinc-400 dark:bg-zinc-500"
        style={{
          bottom: 0,
          right: `${borderOffset.r}px`,
          height: "100%",
          width: `${sideWidths.r}px`,
          originY: origin.r,
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: animationDelays.r, duration: 0.2 }}
      />
      {/* BOTTOM */}
      <motion.div
        className="absolute z-10 transition-all duration-500 bg-zinc-400 dark:bg-zinc-500"
        style={{
          bottom: `${borderOffset.b}px`,
          right: 0,
          width: "100%",
          height: `${sideWidths.b}px`,
          originX: origin.b,
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: animationDelays.b, duration: 0.2 }}
      />
      {/* LEFT */}
      <motion.div
        className="absolute z-10 transition-all duration-500 bg-zinc-400 dark:bg-zinc-500"
        style={{
          top: 0,
          left: `${borderOffset.l}px`,
          width: `${sideWidths.l}px`,
          height: "100%",
          originY: origin.l,
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: animationDelays.l, duration: 0.2 }}
      />
      {/* ARC */}
      <div className="absolute z-20 top-0 left-0 h-full w-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full w-full transition-all duration-500 border-zinc-950 dark:border-zinc-100"
          style={arcStyles}
          initial={{ rotate: '90deg' }}
          animate={{ rotate: '0deg' }}
          transition={{ delay: timingDelay, duration: 0.2, type: "tween" }}
        />
      </div>

      {children}
    </div>
  );
}
