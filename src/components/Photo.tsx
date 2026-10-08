"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative h-full w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative flex h-full w-full items-center justify-center"
      >
        <div className="absolute size-[290px] xl:size-[498px]">
          <Image
            src="/assets/Me.jpeg"
            priority
            quality={90}
            alt="Mikarlo Francis"
            fill
            sizes="(min-width: 1280px) 498px, 290px"
            className="rounded-full object-cover object-top"
          />
        </div>

        {/* Slow, continuous ring. Motion is disabled for reduced-motion visitors by MotionProvider. */}
        <motion.svg
          className="h-[300px] w-[300px] text-primary xl:h-[506px] xl:w-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <circle
            cx="253"
            cy="253"
            r="270"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="120 40 60 40 200 60"
            strokeLinecap="round"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
