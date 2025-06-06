"use client";

import { FaHtml5, FaCss3, FaJs, FaJava, FaAngular } from "react-icons/fa";
import { SiDotnet, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description:
    "I am a dedicated software developer with a passion for building efficient, scalable, and user-centric applications. My expertise covers a wide range of technologies, from modern web development and API architecture to full-stack solutions. I thrive on solving complex problems and am committed to continuous learning in the ever-evolving world of technology.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mikarlo Francis",
    },
    {
      fieldName: "Phone",
      fieldValue: "(876) 441 8811",
    },
    {
      fieldName: "Experience ",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Jamaican",
    },

    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Email",
      fieldValue: "mikarlofrancis@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English",
    },
  ],
};

const experience = {
  icon: "",
  title: "My Experience",
  description:
    "Currently working as a Programmer Analyst at Sagicor Group, I specialize in developing and maintaining enterprise-level applications. My role involves collaborating with cross-functional teams to deliver robust solutions that drive business success.",
  items: [
    {
      company: "Sagicor Group",
      position: "Programmer Analyst",
      duration: "2022 - Present",
    },
  ],
};

const education = {
  icon: "",
  title: "My Education",
  description:
    "Graduated with a Bachelor of Science in Computer Science from Northern Caribbean University, where I gained a strong foundation in software engineering, algorithms, and system design.",
  items: [
    {
      institution: "Northern Caribbean University, Jamaica",
      degree: "Bachelor of Science in Computer Science",
      duration: "2018 - 2022",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "A showcase of my technical proficiencies, including front-end frameworks, back-end technologies, and tools that enable me to deliver high-quality digital solutions.",
  skillSet: [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3 />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "Angular",
      icon: <FaAngular />,
    },
    {
      name: ".NET",
      icon: <SiDotnet />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Java",
      icon: <FaJava />,
    },
    {
      name: "SQL",
      icon: <TbSql />,
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto ">
        <Tabs
          defaultValue="experience"
          className="flex flex-col gap-[60px] xl:flex-row"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger className="cursor-pointer " value="experience">
              Experience
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer " value="education">
              Education
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer " value="skills">
              Skills
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer " value="about">
              About Me
            </TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] w-full">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center
                          items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] w-full">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center
                          items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[20px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold ">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[22px]">
                    {skills.skillSet.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex justify-between items-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60 ">{item.fieldName}</span>
                        <span className="text-xl ">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
