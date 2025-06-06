"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { title } from "process";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills, projects, and experience as a full stack developer.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "JavaScript" },
      { name: "Next.js" },
    ],
    image: "/assets/work/myPortfolio.png",
  },
];

const Work = () => {
  return <div>Work</div>;
};

export default Work;
