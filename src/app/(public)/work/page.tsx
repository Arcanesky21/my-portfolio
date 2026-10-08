"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills, projects, and experience as a full stack developer.",
    stack: [{ name: "Tailwind" }, { name: "Next.js" }],
    image: "/assets/work/myPortfolio.png",
    live: "",
    github: "https://github.com/Arcanesky21/my-portfolio",
  },
  {
    num: "02",
    category: "full stack",
    title: "iNeedALinkJA",
    description:
      "A two-sided marketplace I founded and operate through Arkane Technologies, connecting Jamaican homeowners with skilled tradespeople. Contractors verify their phone number (WhatsApp, with SMS fallback) before they can bid, so every job connects a customer with a real, reachable contractor.",
    stack: [{ name: "Angular" }, { name: "Spring Boot" }, { name: "Postgres" }],
    image: "/assets/work/ineedalinkja.jpg",
    live: "https://dev.ineedalinkja.com",
    github: "",
  },
];

const linkClass =
  "inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 font-medium text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50";

const Work = () => {
  const [projectsData, setProjectsData] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const activeIndex = swiper.activeIndex;
    setProjectsData(projects[activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:gap-[30px]">
          <div className="order-2 flex w-full flex-col gap-6 xl:order-none xl:w-[50%]">
            <div className="text-7xl leading-none font-extrabold text-transparent text-outline xl:text-8xl">
              {projectsData.num}
            </div>
            <h2 className="text-3xl font-bold capitalize leading-tight xl:text-[42px]">
              {projectsData.title}
            </h2>
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              {projectsData.category} project
            </p>
            <p className="text-muted-foreground">{projectsData.description}</p>
            <ul className="flex flex-wrap gap-2">
              {projectsData.stack.map((item) => (
                <li
                  key={item.name}
                  className="rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium"
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              {projectsData.live && (
                <Link
                  href={projectsData.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <BsArrowUpRight className="size-4" aria-hidden="true" />
                  Live site
                </Link>
              )}
              {projectsData.github && (
                <Link
                  href={projectsData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <BsGithub className="size-4" aria-hidden="true" />
                  GitHub
                </Link>
              )}
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[530px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project) => {
                return (
                  <SwiperSlide className="w-full" key={project.title}>
                    <div className="relative flex h-[300px] items-center justify-center overflow-hidden rounded-xl border border-border bg-muted sm:h-[420px] xl:h-[460px]">
                      <div className="relative h-full w-full">
                        <Image
                          src={project.image}
                          alt={`Screenshot of ${project.title}`}
                          fill
                          priority
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none pointer-events-none [&>button]:pointer-events-auto"
                btnStyles="bg-primary text-primary-foreground size-11 flex justify-center items-center rounded-lg text-xl transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
