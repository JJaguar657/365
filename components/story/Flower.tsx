"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { FlowerData } from "./Gallery";

interface FlowerProps {
  flower: FlowerData;
  rotate: number;
  x: number;
  y: number;
  delay: number;
  focused: boolean;
  selected: boolean;
  onClick: () => void;
}

export default function Flower({ flower, rotate, x, y, delay, focused, selected, onClick }: FlowerProps) {
  const isVideo = flower.type === "video";
  const petals = Array.from({ length: isVideo ? 16 : 12 });

  return (
    <motion.div
      className="absolute left-1/2 bottom-40 cursor-pointer"
      style={{ marginLeft: x }}
      initial={{
        opacity: 0,
        scale: 0,
        y: 120,
        rotate,
      }}
      animate={
        focused
          ? selected
            ? {
                opacity: 1,
                scale: 1.15,
                y: -260,
                rotate: 0,
                zIndex: 100,
              }
            : {
                opacity: 0.08,
                scale: 0.75,
                filter: "blur(6px)",
              }
          : {
              opacity: 1,
              scale: 1,
              y,
              rotate,
            }
      }
      transition={{
        delay,
        type: "spring",
        stiffness: 140,
        damping: 12,
      }}
      whileHover={focused ? {} : {
        scale: 1.08,
        y: y - 18,
      }}
      onClick={onClick}
    >
      <motion.div
        animate={{
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[118px] h-64 w-[4px] -translate-x-1/2 origin-top"
      >
        <div className="h-full w-full rounded-full bg-gradient-to-b from-emerald-300 via-emerald-500 to-emerald-900" />
      </motion.div>

      <motion.div
        animate={{
          rotate: [-6, 6, -6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-[38%] top-[210px]"
      >
        <div
          className="h-12 w-8 bg-emerald-500"
          style={{
            borderRadius: "100% 0 100% 0",
            transform: "rotate(-35deg)",
          }}
        />
      </motion.div>

      <motion.div
        animate={{
          rotate: [6, -6, 6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-[56%] top-[250px]"
      >
        <div
          className="h-12 w-8 bg-emerald-500"
          style={{
            borderRadius: "0 100% 0 100%",
            transform: "rotate(35deg)",
          }}
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -6, 0],
          rotate: [rotate, rotate + 2, rotate],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative h-[165px] w-[165px]"
      >
        <div
          className={`absolute left-1/2 top-1/2 -z-20 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${isVideo ? "bg-yellow-300/40" : "bg-white/20"}`}
        />

        {petals.map((_, index) => (
          <motion.div
            key={index}
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              delay: delay + index * 0.02,
              type: "spring",
              stiffness: 200,
            }}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `
                translate(-50%, -50%)
                rotate(${index * 30}deg)
                translateY(-58px)
              `,
            }}
          >
            <div
              className={`h-20 w-9 rounded-full border border-white/70 shadow-xl ${isVideo ? "bg-gradient-to-b from-yellow-100 to-yellow-300" : "bg-white"}`}
            />
          </motion.div>
        ))}

        <motion.div
          layoutId={`flower-${flower.id}`}
          whileHover={{
            scale: 1.03,
          }}
          className="absolute left-1/2 top-1/2 z-30 h-28 w-28 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[6px] shadow-[0_20px_60px_rgba(0,0,0,.45)]"
          style={{ borderColor: isVideo ? "#FFD700" : "#f8d96b" }}
        >
          <Image
            src={flower.src}
            alt=""
            fill
            className="object-cover transition duration-700 hover:scale-110"
            sizes="112px"
          />

          {isVideo && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="absolute inset-0 flex items-center justify-center bg-black/25 backdrop-blur-[1px]"
            >
              <span className="rounded-full border border-white/70 bg-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-white">
                video
              </span>
            </motion.div>
          )}
        </motion.div>

        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-300/40" />

        <motion.div
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute left-3 top-3 h-2 w-2 rounded-full bg-white"
        />

        <motion.div
          animate={{
            opacity: [0.1, 1, 0.1],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute right-5 top-8 h-1.5 w-1.5 rounded-full bg-yellow-200"
        />

        <motion.div
          animate={{
            opacity: [0.2, 0.9, 0.2],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: 2,
          }}
          className="absolute bottom-6 left-6 h-1.5 w-1.5 rounded-full bg-white"
        />
      </motion.div>
    </motion.div>
  );
}
