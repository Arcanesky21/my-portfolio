"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
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
      transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {projectsData.num}
              </div>
              <h2
                className="text-[42px] font-bold leading-none text-white group-hover:text-accent 
              transition-all duration-500 capitalize"
              >
                {projectsData.category} project
              </h2>
              <p className="text-white/60">{projectsData.description}</p>
              <ul className="flex gap-4">
                {projectsData.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== projectsData.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center  gap-4">
                {projectsData.live && (
                  <Link
                    href={projectsData.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] cursor-pointer h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View this project live</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {projectsData.github && (
                  <Link
                    href={projectsData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] cursor-pointer h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View this project on GitHub</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[530px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide className="w-full" key={index}>
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
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
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max
                xl:justify-none"
                btnStyles="bg-accent cursor-pointer hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center"
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
