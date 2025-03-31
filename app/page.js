'use client';
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        {/* Flex container for main content */}
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          
          <div className="order-2 xl:order-1 flex flex-col items-center xl:items-start text-center xl:text-left">
            <div>
              <span className="text-xl">Frontend Developer</span>
              <h1 className="h1 mb-6">
                Hello I&apos;m <br />{" "}
                <span className="text-[var(--color-accent)]">
                  Shobhit Dwivedi
                </span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I am a frontend developer with a passion for creating responsive
                and functional user interfaces.
              </p>
            </div>

            {/* Button & Socials: Placed below the description */}
            <div className="flex flex-col sm:flex-col xl:flex-row items-center gap-4">
              <Button
                variant="outline"
                className="uppercase flex items-center gap-2 hover:text-white/80"
                size="lg"
                onClick={() => window.open("/api/download", "_blank")}
              >
                Download CV <FiDownload className="text-xl" />
              </Button>
              <div className="mb-4 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles=" w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-white hover:transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* Right Section: Photo */}
          <div className="order-1 xl:order-2 mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
