"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = HTMLMotionProps<"button">;

export default function Button({
  className,
  children,
  ...props
}: Props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className={cn(
        "rounded-full border border-zinc-700 px-8 py-4 transition-all duration-300 hover:border-rose-400 hover:bg-white hover:text-black",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
