"use client";

import { motion } from "framer-motion";

const petals = Array.from({ length: 20 });

export default function Petals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((_, index) => (
        <motion.div
          key={index}
          className="absolute h-2.5 w-2.5 rounded-full bg-white/20"
          initial={{ opacity: 0.15, y: -100 }}
          animate={{
            y: [ -100, 900 ],
            rotate: [0, 360],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            repeat: Infinity,
            duration: 20 + Math.random() * 10,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
