"use client";
import CountUp from "react-countup";

const stats = [
  {
    number: 3,
    title: "Years of Experience",
  },
  {
    number: 3,
    title: "Projects Completed",
  },
  {
    number: 5,
    title: "Technologies Learned",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex  flex-1 items-center justify-center gap-4 text-center"
              >
                <CountUp
                  end={stat.number}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    stat.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
