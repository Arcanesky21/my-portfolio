"use client";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Frontend Web Development",
    description:
      "I build modern, responsive user interfaces with a focus on performance and user experience using Angular and Next.js. I create scalable, visually engaging web applications tailored to your brand and business needs.",
  },
  {
    num: "02",
    title: "API Design and Development",
    description:
      "I design and build secure, scalable APIs using .NET, enabling seamless integration between systems and delivering reliable, high-performance digital experiences. My APIs are structured for maintainability, optimized for performance, and built with best practices in security and scalability.",
  },
  {
    num: "03",
    title: "Full Stack Development",
    description:
      "I deliver end-to-end solutions by seamlessly integrating modern frontend frameworks like Angular and Next.js with robust backend technologies such as .NET and Express.js. My approach ensures scalable, maintainable, and high-performance applications tailored to your business goals.",
  },
  {
    num: "04",
    title: "Performance Optimization and Refactoring",
    description:
      "I enhance application speed, reliability, and maintainability through code optimization, best practices, and modern refactoring techniques.",
  },
];

const Services = () => {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8"
        >
          {services.map((service) => (
            <article
              key={service.num}
              className="group flex h-full flex-col justify-between gap-6 rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-5xl font-extrabold text-outline text-transparent">
                  {service.num}
                </span>
                <span
                  aria-hidden="true"
                  className="flex size-12 items-center justify-center rounded-full bg-primary text-xl text-primary-foreground transition-transform duration-300 group-hover:-rotate-45"
                >
                  <BsArrowDownRight />
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold leading-tight transition-colors group-hover:text-primary sm:text-[28px]">
                  {service.title}
                </h2>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
