"use client";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto h-full">
        <div className="flex w-full flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full min-w-0 text-center xl:text-left order-2 xl:order-none max-w-xl"
          >
            <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
              Software Developer
            </span>
            <h1 className="h1 mt-5 mb-6">
              Hello, I&apos;m <br />
              <span className="text-primary">Mikarlo Francis</span>
            </h1>
            <p className="mb-6 text-lg text-muted-foreground">
              A software developer with 3+ years of experience, specializing in
              Angular and .NET. I also work with Next.js, Express.js, Java, and
              SQL—building scalable, high-performance applications tailored to
              user needs.
            </p>
            <p className="mb-9 text-muted-foreground">
              Founder of <span className="font-medium text-foreground">Arkane Technologies</span>,
              the Jamaican business behind{" "}
              <a
                href="https://dev.ineedalinkja.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline underline-offset-4"
              >
                iNeedALinkJA
              </a>
              , a marketplace connecting homeowners with skilled tradespeople.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-6">
              <Social
                containerStyles="flex gap-3"
                iconStyles="size-11 border border-primary rounded-full flex justify-center items-center text-primary text-lg transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
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
