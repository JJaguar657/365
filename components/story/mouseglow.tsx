"use client";

import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function MouseGlow() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      animate={{
        x: x - 250,
        y: y - 250,
      }}
      transition={{
        type: "spring",
        stiffness: 45,
        damping: 20,
      }}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[500px] w-[500px] rounded-full bg-rose-500/10 blur-[140px]"
    />
  );
}
