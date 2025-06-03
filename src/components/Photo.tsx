"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.4, ease: "easeIn" }}
        className="w-full h-full relative"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.4, ease: "easeInOut" }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] relative"
        >
          <Image
            src="/assets/Me.jpeg"
            priority
            quality={100}
            alt="Mikarlo Francis"
            fill
            sizes="(min-width: 1280px) 498px, 100vw"
            className="object-cover object-top rounded-xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
