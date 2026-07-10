"use client";

import { motion } from "framer-motion";

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function RevealText({
  children,
  className = "",
  delay = 0,
}: RevealTextProps) {
  const words = children.split(" ");

  return (
    <motion.div initial="hidden" animate="visible" className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
              filter: "blur(6px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            },
          }}
          transition={{
            duration: 0.6,
            delay: delay + index * 0.05,
          }}
          className="mr-2 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
