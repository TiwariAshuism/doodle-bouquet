"use client";

import { motion } from "framer-motion";
import { letterChild, letterStagger } from "@/lib/animations";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/utils";

type SplitTextProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "span";
};

export function SplitText({ text, className, as: Tag = "h1" }: SplitTextProps) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={cn(className, "flex flex-wrap justify-center gap-x-[0.3em]")}>
      {words.map((word, wi) => (
        <motion.span
          key={`${word}-${wi}`}
          className="inline-flex overflow-hidden"
          variants={letterStagger}
          initial="hidden"
          animate="visible"
        >
          {word.split("").map((char, ci) => (
            <motion.span
              key={`${wi}-${ci}`}
              variants={letterChild}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </Tag>
  );
}
