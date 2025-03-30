'use client';
import {BiNetworkChart} from "react-icons/bi";
import  {MdSpeed, MdWeb} from "react-icons/md"
import {SiReact, SiFigma} from "react-icons/si"
import {FaSearch} from "react-icons/fa"
import Link from "next/link";
import { motion } from "framer-motion";
const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Building responsive and user-friendly websites.",
    icon: <MdWeb />,
  },
  {
    id: 2,
    title: "SPAs & Micro Frontends",
    description: "Managing complex state and optimizing frontend performance",
    icon: <SiReact />,
  },
  {
    id: 3,
    title: "Code Review & Performance Optimization",
    description: "Improving website visibility and search engine rankings.",
    icon: <MdSpeed />,
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Creating visually appealing and user-friendly interfaces.",
    icon: <SiFigma />,
  },
  {
    id: 5,
    title: "API Integration & Backend Communication",
    description: "Connecting frontend applications with backend services.",
    icon: <BiNetworkChart />,
  },
  {
    id: 6,
    title: "Coveo Search Integration",
    description: "Implementing Coveo for enhanced search functionality.",
    icon: <FaSearch />,
  }
]
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
    <h2 className="h2 mb-4 text-center">My Services</h2>
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.4, duration: 0.5 , ease: "easeIn" }} className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        {services.map((service, index) => {
          return <div key={index} className="flex flex-col justify-center gap-4 group mt-2">
            <div>
              <div className="text-5xl font-extrabold text-outline text-transparent transition-all duration-500">{service.id}</div>
            </div>
            <h2 className="flex flex-row align-center hover:text-[var(--color-accent)]"><span className="text-3xl mr-2 mt-0 text-[var(--color-accent)]">{service.icon}</span>{service.title}</h2>
            <p>{service.description}</p>
            <div className="border-b-2 border-white/70 w-full"></div>
          </div>
        })}
      </motion.div>
    </div>
    </section>
  )
}

export default Services