"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUpVariants } from "./Cards/anime";

export function AnimatedDiv({ children }: { children: React.ReactNode }) {
  const divRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(divRef, { once: true, amount: 0.5 });
  return (
    <motion.div
      ref={divRef}
      variants={fadeUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative"
    >
      {children}
    </motion.div>
  );
}
