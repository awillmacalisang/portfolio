'use client';

import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

export default function RunningAlert() {
  const controls = useAnimation();
  const alertRef = useRef<HTMLDivElement | null>(null);

  const moveAlert = async () => {
    const alertBox = alertRef.current;
    if (!alertBox) return;

    const top = getRandomNumber(window.innerHeight - alertBox.offsetHeight);
    const left = getRandomNumber(window.innerWidth - alertBox.offsetWidth);

    await controls.start({
      top,
      left,
      transition: { ease: "circOut", duration: 0.5 },
    });
  };

  useEffect(() => {
    const alertBox = alertRef.current;
    if (!alertBox) return;

    const handler = () => moveAlert();

    alertBox.addEventListener("mouseover", handler);
    alertBox.addEventListener("click", handler);

    return () => {
      alertBox.removeEventListener("mouseover", handler);
      alertBox.removeEventListener("click", handler);
    };
  }, []);

  return (
    <motion.div
      animate={controls}
      initial={{ top: 30, left: 100 }}
      style={{ position: "absolute", zIndex: 1000 }}
      ref={alertRef}
    >
      {/* Retro Alert Box */}
      <div className="border border-black w-[300px] bg-gray-200 shadow-md">
        {/* Title Bar */}
        <div className="bg-blue-800 text-white px-2 py-1 flex justify-between items-center text-sm font-regular font-[Inter]">
          <span>System Message</span>
          <button className="text-white hover:bg-blue-600 w-5 h-5 text-xs leading-none border border-white flex items-center justify-center">
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col items-center text-center space-y-3">
          <Image
            src="/warning-icon.svg"
            alt="Warning"
            width={40}
            height={40}
          />
          <p className="text-sm font-semibold">I'm so handsome!</p>
          <button className="border border-black px-6 py-1 bg-gray-100 hover:bg-white active:translate-y-[1px] font-bold">
            OK
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function getRandomNumber(num: number) {
  return Math.floor(Math.random() * (num + 1));
}
