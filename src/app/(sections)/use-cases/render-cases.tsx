"use client";

import { fadeUpVariants } from "@/components/Cards/anime";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function RenderCases({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  const caseRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(caseRef, { once: true, amount: 0.5 });
  return (
    <motion.div
      ref={caseRef}
      variants={fadeUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-yellow-transparent flex w-fit items-start gap-[8px] rounded-2xl p-[16px]"
    >
      {icon}
      <div>
        <h3 className="text-base font-medium md:text-lg">{title}</h3>
        <p className="text-grey font-secondary max-w-[500px] text-sm md:text-base">
          {text}
        </p>
      </div>
    </motion.div>
  );
}
