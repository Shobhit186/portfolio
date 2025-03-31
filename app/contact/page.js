'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger,SelectGroup,SelectLabel,SelectValue } from "@/components/ui/select";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 7903722145",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "shobhitdwivedi180699@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Gopalganj, 841428, Bihar, India",
  },
]
const Contact = () => {
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2.4, duration: 0.4, ease: "easeIn"}} className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
           <div className="xl:w-[54%] order-2 xl:ordder-1">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">Please fill out the form below to get in touch with me.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Enter your Email" />
                <Input type="phone" placeholder="Enter your mobile number" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>
                      Select a Service
                    </SelectLabel>
                    <SelectItem value="1">Web Development</SelectItem>
                    <SelectItem value="2">Code Review & Optimization</SelectItem>
                    <SelectItem value="3">Coveo Search Integration</SelectItem>
                    <SelectItem value="4">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[200px]" placeholder="Type your message here"/>
              <Button variant="ghost" size="md" className="max-w-40 max-h-10">Send Message</Button>
            </form>
           </div>
           <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-2 mb-8 xl:mb-0">
             <ul className="flex flex-col gap-10">
               {info.map((item,index) => {
                return <li key={index} className="flex items-center gap-4">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] rounded-full flex items-center justify-center text-accent text-2xl xl:text-3xl">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-white/60">{item.title}</div>
                    <div className="text-xl">{item.description}</div>
                  </div>
                </li>
               })}
             </ul>
           </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact