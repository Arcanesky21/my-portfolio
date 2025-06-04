import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import { Download } from "lucide-react";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Mikarlo Francis</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I&apos;m a software developer with 3+ years of experience,
              specializing in Angular and .NET. I also work with Next.js,
              Express.js, Java, and SQL, building full-stack applications that
              are efficient, scalable, and user-friendly.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <Download className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border 
                border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent
                hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
