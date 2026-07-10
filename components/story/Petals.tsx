"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const petals = Array.from({ length: 20 });

export default function Petals() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((_, index) => {
        const left = `${(index * 7) % 100}%`;
        const top = `${(index * 13) % 100}%`;
        const duration = 20 + (index % 5) * 2;
        const delay = (index % 6) * 0.7;

        return (
          <motion.div
            key={index}
            className="absolute h-2.5 w-2.5 rounded-full bg-white/20"
            initial={{ opacity: 0.15, y: -100 }}
            animate={{
              y: [-100, 900],
              rotate: [0, 360],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              repeat: Infinity,
              duration,
              delay,
              ease: "linear",
            }}
            style={{
              left,
              top,
            }}
          />
        );
      })}
    </div>
  );
}
