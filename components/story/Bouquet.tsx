"use client";

import { motion } from "framer-motion";
import Flower from "./Flower";
import type { FlowerData } from "./Gallery";
import { story } from "@/content/story";

interface BouquetProps {
  opened: boolean;
  flowers: FlowerData[];
  focusMode: boolean;
  selectedFlower: FlowerData | null;
  onFlowerClick: (flower: FlowerData) => void;
}

const positions = [
  // Hero
  {
    x: 0,
    y: -240,
    rotate: 0,
    scale: 1.18,
    z: 80,
  },

  // Upper
  {
    x: -125,
    y: -160,
    rotate: -14,
    scale: 1.05,
    z: 65,
  },

  {
    x: 125,
    y: -160,
    rotate: 14,
    scale: 1.05,
    z: 65,
  },

  // Middle

  {
    x: -230,
    y: -40,
    rotate: -24,
    scale: .92,
    z: 35,
  },

  {
    x: -70,
    y: -20,
    rotate: -8,
    scale: 1,
    z: 55,
  },

  {
    x: 70,
    y: -20,
    rotate: 8,
    scale: 1,
    z: 55,
  },

  {
    x: 230,
    y: -40,
    rotate: 24,
    scale: .92,
    z: 35,
  },

  // Hidden flower

  {
    x: 0,
    y: 110,
    rotate: 0,
    scale: .84,
    z: 20,
  },
  {
x:0,
y:150,
rotate:0,
scale:.8,
z:15
}
];

export default function Bouquet({ opened, flowers, focusMode, selectedFlower, onFlowerClick }: BouquetProps) {
  return (
    <div className="relative h-[700px] w-[min(900px,94vw)] scale-[.72] sm:scale-[.82] md:scale-100">
      {!opened && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 flex items-end justify-center"
        >
          <div className="relative h-[470px] w-[440px]">
            <div className="absolute inset-x-0 bottom-0 h-[420px] bg-[linear-gradient(135deg,#b96e78,#f6dcc6_48%,#bd747a)] shadow-[0_30px_80px_rgba(0,0,0,.45)]" style={{ clipPath: "polygon(5% 4%,95% 4%,82% 100%,18% 100%)" }} />
            <div className="absolute inset-x-6 bottom-32 h-20 rounded-full border border-white/30 bg-rose-900/30 shadow-[0_8px_18px_rgba(72,16,29,.35)]" />
            <p className="absolute inset-x-0 bottom-[10.4rem] text-center text-xs font-semibold tracking-[.55em] text-white">{story.gallery.giftLabel}</p>
            <div className="absolute bottom-10 left-1/2 h-3 w-32 -translate-x-1/2 rounded-full bg-[#8d384f] shadow-lg" />
          </div>
        </motion.div>
      )}

      {opened && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }} className="absolute inset-0">
          <div className="absolute bottom-[3.5rem] left-1/2 h-[360px] w-[520px] -translate-x-1/2 rounded-[50%] bg-amber-200/15 blur-3xl" />

          {flowers.map((flower, index) => {
            const position = positions[index];
            return (
              <Flower
                key={`${flower.id}-stems`}
                flower={flower}
                rotate={position.rotate}
                x={position.x}
                y={position.y}
                scale={position.scale}
                zIndex={position.z}
                delay={index * 0.13}
                focused={focusMode}
                selected={selectedFlower?.id === flower.id}
                layer="stems"
                onClick={() => onFlowerClick(flower)}
              />
            );
          })}

          <motion.div animate={{ opacity: focusMode ? 0 : 1 }} transition={{ duration: 0.35 }} className="absolute inset-0 z-[90] pointer-events-none">
            <div className="absolute bottom-[3.7rem] left-1/2 flex min-h-10 w-[min(240px,calc(100vw-2rem))] -translate-x-1/2 items-center justify-center rounded-full border border-rose-100/50 bg-[linear-gradient(180deg,#b64161,#7d203d)] px-4 py-2 shadow-[0_12px_24px_rgba(83,16,39,.4)] sm:w-[220px]">
              <span className="text-center text-[8px] font-semibold leading-tight tracking-[.12em] text-rose-50 sm:text-[9px] sm:tracking-[.18em]">{story.gallery.ribbon}</span>
            </div>
          </motion.div>

          {flowers.map((flower, index) => {
            const position = positions[index];
            return (
              <Flower
                key={`${flower.id}-bloom`}
                flower={flower}
                rotate={position.rotate}
                x={position.x}
                y={position.y}
                scale={position.scale}
                zIndex={position.z}
                delay={index * 0.13}
                focused={focusMode}
                selected={selectedFlower?.id === flower.id}
                layer="bloom"
                onClick={() => onFlowerClick(flower)}
              />
            );
          })}
        </motion.div>
      )}
    </div>
  );
}
