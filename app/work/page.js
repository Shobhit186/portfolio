'use client';
import { motion } from "framer-motion";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {BsGithub,BsArrowUpRight} from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import SliderBtns from "@/components/SliderBtns";

const projects = [
  {
    id: 1,
    category: "Frontend",
    title: "GamesVerse",
    description: "A landing page for a gaming website, showcasing various games and their features.",
    stack: [{name: "React.Js"},{name: "Tailwind CSS"},{name: "JavaScript"},{name: "Clerk React"}],
    image: "/gamesverse.png",
    live: "https://games-verse.vercel.app/",
    github: "https://github.com/Shobhit186/GamesVerse"
  },
  {
    id: 2,
    category: "Full Stack",
    title: "Holiday Planner",
    description: "A full-stack application for planning holidays, including a database ORM and a frontend interface.",
    stack: [{name: "React.Js"},{name: "Tailwind CSS"},{name: "TypeScript"},{name: "Next.js"},{name: "Prisma"},{name: "MongoDB"},{name: "NextAuth"}],
    image: "/holiday.png",
    live: "https://holiday-rental-app.vercel.app/",
    github: "https://github.com/Shobhit186/holiday-destination"
  }
]
const Work = () => {
  const [project,setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
     const currentIndex = swiper.activeIndex;
      setProject(projects[currentIndex]);
  }
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2.4, duration: 0.4, ease: "easeIn"}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto xl:mx-0">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-1">
            <div className="flex flex-col gap-4 h-[50%] mb-8 xl:mb-0">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.id}</div>
              <h2 className="text-[32px] font-bold leading-none text-white hover:text-[var(--color-accent)] transition-all duration-500">{project.category} Project</h2>
              <p className="text-white/80">{project.description}</p>
              <ul className="flex flex-wrap gap-4 max-w-[650px]">
                {project.stack.map((item,index) => {
                  return (
                    <li key={index} className="text-accent text-xl flex items-center gap-2 py-1 whitespace-nowrap">
                      {item.name}{index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              <div className="border-b border-white/10 "></div>
              <div className="flex items-center gap-4 mt-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="flex justify-center items-center w-[70px] h-[70px] gap-2 text-accent text-xl hover:text-[var(--color-accent)] transition-all duration-500 bg-white/5 rounded-full">
                        <BsArrowUpRight className="text-2xl text-white hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 text-sm font-normal text-white/80">
                        View Live Project
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="flex justify-center items-center w-[70px] h-[70px] gap-2 text-accent text-xl hover:text-[var(--color-accent)] transition-all duration-500 bg-white/5 rounded-full">
                        <BsGithub className="text-2xl text-white hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 text-sm font-normal text-white/80">
                        View on Github
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] order-1 xl:order-2">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project,index) => {
                return <SwiperSlide key={index} className="w-full">
                  <div className="w-full h-[460px] relative group flex justify-center items-center overflow-hidden rounded-lg bg-pink/50-20">
                    <Image src={project.image} alt={project.title} fill className="object-cover object-center transition-all duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0 transition-all duration-500"></div>
                    <div className="absolute inset-0 flex justify-center items-center text-white text-2xl font-bold">{project.title}</div>
                  </div>
                </SwiperSlide>
              })}
              <SliderBtns containerStyles="flex gap-2 absolute xl:right-8 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-black text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-full transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;