"use client";

import { motion, useInView } from "framer-motion";
import { type JSX, useRef } from "react";
import { fadeUpVariants } from "./Cards/anime";

export function AnimatedText({
  text,
  el: Wrapper = "p",
  className,
}: {
  text: string;
  el: keyof JSX.IntrinsicElements;
  className?: string;
}) {
  const textRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(textRef, { once: true, amount: 0.5 });
  return (
    <motion.div
      ref={textRef}
      variants={fadeUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      <Wrapper>{text}</Wrapper>
    </motion.div>
  );
}
