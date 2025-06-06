"use client";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
const services = [
  {
    num: "01",
    title: "Custom Web Development",
    description:
      "Crafting visually stunning, high-performance websites tailored to your brand and business goals, using the latest web technologies.",
    href: "",
  },
  {
    num: "02",
    title: "API Design and Development",
    description:
      "Designing and building secure, scalable APIs that power seamless integrations and robust digital experiences.",
    href: "",
  },
  {
    num: "03",
    title: "Full Stack Development",
    description:
      "Delivering end-to-end solutions by expertly combining front-end and back-end technologies for a unified, efficient product.",
    href: "",
  },
  {
    num: "04",
    title: "Performance Optimization and Refactoring",
    description:
      "Enhancing application speed, reliability, and maintainability through code optimization, best practices, and modern refactoring techniques.",
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
          {services.map((services, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline text-transparent
                     group-hover:text-outline-hover transition-colors duration-500"
                  >
                    {services.num}
                  </div>
                  <Link
                    href={services.href}
                    className="w-[70px] h-[70px] rounded-full
                  bg-white group:hover:bg-accent transition-all duration-500 flex justify-center
                  items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2
                  className="text-[42px] font-bold leading-none text-white group-hover:text-accent
                transition-all duration-500"
                >
                  {services.title}
                </h2>
                <p className="text-white/60">{services.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
