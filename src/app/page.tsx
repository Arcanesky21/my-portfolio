"use client";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center xl:text-left order-2 xl:order-none max-w-xl"
          >
            <span className="text-xl text-white/70">Software Developer</span>
            <h1 className="h1 mb-6 leading-tight">
              Hello, I&apos;m <br />
              <span className="text-accent">Mikarlo Francis</span>
            </h1>
            <p className="mb-9 text-white/80">
              A software developer with 3+ years of experience, specializing in
              Angular and .NET. I also work with Next.js, Express.js, Java, and
              SQL—building scalable, high-performance applications tailored to
              user needs.
            </p>
            <p className="mb-9 text-white/80">
              Founder of <span className="text-accent">Arkane Technologies</span>,
              the Jamaican business behind{" "}
              <a
                href="https://dev.ineedalinkja.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-4"
              >
                iNeedALinkJA
              </a>
              , a marketplace connecting homeowners with skilled tradespeople.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-6">
              <Social
                containerStyles="flex gap-5"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="order-1 xl:order-none"
          >
            <Photo />
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Stats />
      </motion.div>
    </section>
  );
}
