"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { clipPathDownVariants, fadeUpVariants } from "./anime";

export function CardTitle({ title }: { title: string }) {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const isInView = useInView(titleRef, { once: true });
  return (
    <motion.h2
      ref={titleRef}
      variants={fadeUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="font-primary mb-6 text-3xl font-medium lg:text-4xl"
    >
      {title}
    </motion.h2>
  );
}

export function CardText({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const isInView = useInView(textRef, { once: true });
  return (
    <motion.p
      ref={textRef}
      variants={fadeUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {text}
    </motion.p>
  );
}

export function CardImageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(imageRef, {
    once: true,
    amount: 0.5,
  });
  return (
    <motion.div
      ref={imageRef}
      variants={clipPathDownVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative h-full min-h-[220px] w-full will-change-[clip-path]"
    >
      {children}
    </motion.div>
  );
}

export function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(contentRef, { once: true });
  return (
    <motion.div
      ref={contentRef}
      variants={fadeUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}
