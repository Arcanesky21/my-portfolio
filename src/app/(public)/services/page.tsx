"use client";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
const services = [
  {
    num: "01",
    title: "Frontend Web Development",
    description:
      "I build modern, responsive user interfaces with a focus on performance and user experience using Angular and Next.js. I create scalable, visually engaging web applications tailored to your brand and business needs.",
    href: "",
  },
  {
    num: "02",
    title: "API Design and Development",
    description:
      "I design and build secure, scalable APIs using .NET, enabling seamless integration between systems and delivering reliable, high-performance digital experiences. My APIs are structured for maintainability, optimized for performance, and built with best practices in security and scalability.",
    href: "",
  },
  {
    num: "03",
    title: "Full Stack Development",
    description:
      "I deliver end-to-end solutions by seamlessly integrating modern frontend frameworks like Angular and Next.js with robust backend technologies such as .NET and Express.js. My approach ensures scalable, maintainable, and high-performance applications tailored to your business goals.",
    href: "",
  },
  {
    num: "04",
    title: "Performance Optimization and Refactoring",
    description:
      "I enhance application speed, reliability, and maintainability through code optimization, best practices, and modern refactoring techniques.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between h-full p-6 bg-[#1e1e1e] rounded-2xl border border-white/10 group hover:border-accent transition-all duration-500"
            >
              <div className="flex justify-between items-center mb-4">
                <div
                  className="text-5xl font-extrabold text-outline text-transparent
          group-hover:text-outline-hover transition-colors duration-500"
                >
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[60px] h-[60px] rounded-full
          bg-white group-hover:bg-accent transition-all duration-500 flex justify-center
          items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-2xl" />
                </Link>
              </div>
              <h2
                className="text-[32px] font-bold text-white group-hover:text-accent
        transition-all duration-500 mb-4"
              >
                {service.title}
              </h2>
              <p className="text-white/70 mb-6">{service.description}</p>
              <div className="border-b border-white/10 w-full mt-auto" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
