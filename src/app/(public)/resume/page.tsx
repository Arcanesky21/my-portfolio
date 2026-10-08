"use client";

import { FaHtml5, FaCss3, FaJs, FaJava, FaAngular } from "react-icons/fa";
import { SiDotnet, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
      fieldName: "Experience",
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
  title: "My Experience",
  description:
    "I am the founder and owner of Arkane Technologies, the Jamaican business that operates iNeedALinkJA, a marketplace connecting homeowners with skilled tradespeople. I also work as a Programmer Analyst at Sagicor Group, developing and maintaining enterprise-level applications and collaborating with cross-functional teams to deliver robust solutions.",
  items: [
    {
      company: "Arkane Technologies (iNeedALinkJA)",
      position: "Founder & Lead Developer",
      duration: "2026 - Present",
    },
    {
      company: "Sagicor Group",
      position: "Programmer Analyst",
      duration: "2022 - Present",
    },
  ],
};

const education = {
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
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Angular", icon: <FaAngular /> },
    { name: ".NET", icon: <SiDotnet /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Java", icon: <FaJava /> },
    { name: "SQL", icon: <TbSql /> },
  ],
};

const cardClass =
  "flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl border border-border bg-card px-8 py-6 lg:items-start";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col gap-10 xl:flex-row xl:gap-[60px]"
        >
          <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-3 xl:mx-0">
            <TabsTrigger className="cursor-pointer" value="experience">
              Experience
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="education">
              Education
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="skills">
              Skills
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="about">
              About Me
            </TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-3xl font-bold xl:text-4xl">
                  {experience.title}
                </h3>
                <p className="mx-auto max-w-[600px] text-muted-foreground xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] w-full">
                  <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {experience.items.map((item) => {
                      return (
                        <li key={item.company} className={cardClass}>
                          <span className="font-medium text-primary">
                            {item.duration}
                          </span>
                          <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span
                              aria-hidden="true"
                              className="size-1.5 rounded-full bg-primary"
                            />
                            <p className="text-muted-foreground">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-3xl font-bold xl:text-4xl">
                  {education.title}
                </h3>
                <p className="mx-auto max-w-[600px] text-muted-foreground xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] w-full">
                  <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {education.items.map((item) => {
                      return (
                        <li key={item.institution} className={cardClass}>
                          <span className="font-medium text-primary">
                            {item.duration}
                          </span>
                          <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span
                              aria-hidden="true"
                              className="size-1.5 rounded-full bg-primary"
                            />
                            <p className="text-muted-foreground">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-3xl font-bold xl:text-4xl">
                  {skills.title}
                </h3>
                <p className="mx-auto max-w-[600px] text-muted-foreground xl:mx-0">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-5">
                  {skills.skillSet.map((skill) => {
                    return (
                      <li
                        key={skill.name}
                        className="group flex min-h-[120px] flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary"
                      >
                        <span className="text-4xl text-primary transition-transform duration-300 group-hover:scale-110">
                          {skill.icon}
                        </span>
                        <span className="text-sm font-medium">{skill.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-3xl font-bold xl:text-4xl">{about.title}</h3>
                <p className="mx-auto max-w-[600px] text-muted-foreground xl:mx-0">
                  {about.description}
                </p>
                <ul className="mx-auto grid max-w-[620px] grid-cols-1 gap-y-4 xl:mx-0 xl:grid-cols-2">
                  {about.info.map((item) => {
                    return (
                      <li
                        key={item.fieldName}
                        className="flex items-center justify-between gap-4 border-b border-border py-2 xl:justify-start"
                      >
                        <span className="text-muted-foreground">
                          {item.fieldName}
                        </span>
                        <span className="text-lg font-medium">
                          {item.fieldValue}
                        </span>
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
