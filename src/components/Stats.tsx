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
    <section aria-label="Highlights" className="border-y border-border py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => {
            return (
              <div
                key={stat.title}
                className="flex items-center justify-center gap-4 text-center sm:justify-start sm:text-left"
              >
                <CountUp
                  end={stat.number}
                  duration={1.2}
                  className="text-4xl font-bold text-primary xl:text-5xl"
                />
                <p className="max-w-[140px] leading-snug text-muted-foreground">
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
