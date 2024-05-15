import React from "react";
import { useModalContext } from "./context/modalContext.jsx";
import { AnimatePresence, motion } from "framer-motion";

export default function Modal() {
  const { transform } = useModalContext();

  return (
    <AnimatePresence>
      {!!transform.element && (
        <motion.div
          className="absolute z-30 top-0 left-0 w-full h-full bg-zinc-100 dark:bg-zinc-950"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        />
      )}
    </AnimatePresence>
  );
}
