'use client';
import {FaHtml5,FaReact,FaCss3,FaJs,FaNodeJs,FaBootstrap,FaGit} from "react-icons/fa"
import {SiNextdotjs,SiTypescript,SiGraphql,SiWebpack,SiNpm,SiRedux,SiJest,SiExpress,SiTailwindcss} from "react-icons/si";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description: "I am a Frontend Developer with over 4+ years of experience building scalable, user-friendly web applications using React.js, TypeScript, and modern UI frameworks",
  info: [
    {
      field: "Name",
      value: "Shobhit Dwivedi"
    },
    {
      field: "Phone",
      value: "(+91)7903722145"
    },
    {
      field: "Experience",
      value: "4+ Years"
    },
    {
      field: "Nationality",
      value: "Indian"
    },
    {
      field: "Email",
      value: "shobhitdwivedi180699@gmail.com"
    },
    {
      field: "Location",
      value: "Kolkata,West Bengal"
    },
    {
      field: "Languages",
      value: "English, Hindi"
    },
  ],
}

const experience = {
  title: "My Experience",
  icon: "",
  description: "I have worked with various companies and clients, delivering high-quality web applications that meet their needs and expectations.",
  jobs: [
    {
      title: "Senior Software Engineer",
      company: "EY",
      location: "Kolkata, India",
      date: "2023 - Present",
      description: "Developing and maintaining web applications using React.js, TypeScript, and Micro Frontends.",
    },
    {
      title: "System Engineer",
      company: "Tata Consultancy Services",
      location: "Kolkata, India",
      date: "2021 - 2023",
      description: "Worked on various projects using React.js, Redux, and Graphql.",
    }
  ],
}

const qualifications = {
  title: "My Qualifications",
  icon: "",
  description: "I have completed my education in Computer Science and Engineering, and I am constantly learning new technologies and skills to enhance my knowledge and expertise.",
  degrees: [
    {
      title: "Bachelor of Engineering in Computer Science",
      university_board: "Rajiv Gandhi Technical University",
      location: "Bhopal, India",
      date: "2016 - 2020",
      grade: "8.32 CGPA",
    },
    {
      title: "Intermediate of Science",
      university_board: "BSEB",
      location: "Gopalganj, India",
      date: "2014 - 2016",
      grade: "69.8%"
    },
  ],
}

const skills = {
  title: "My Skills",
  icon: "",
  description: "I have experience in various programming languages and frameworks, and I am always eager to learn new technologies and techniques to improve my skills and knowledge.",
  skills: [
    {
      name: "HTML 5",
      icon: <FaHtml5/>,
    },
    {
      name: "CSS 3",
      icon: <FaCss3/>,
    },
    {
      name: "JavaScript",
      icon: <FaJs/>,
    },
    {
      name: "React JS",
      icon: <FaReact/>,
    },
    {
      name: "Next JS",
      icon: <SiNextdotjs/>,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript/>,
    },
    {
      name: "Node JS",
      icon: <FaNodeJs/>,
    },
    {
      name: "Express JS",
      icon: <SiExpress/>,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss/>,
    },
    {
      name: "GIT",
      icon: <FaGit/>,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap/>
    },
    {
      name: "Redux Toolkit",
      icon: <SiRedux/>
    },
    {
      name: "Jest",
      icon: <SiJest/>
    },
    {
      name: "Micro UI",
      icon: <SiWebpack/>
    },
    {
      name: "NPM",
      icon: <SiNpm/>
    },
    {
      name: "GraphQL",
      icon: <SiGraphql/>
    }
  ]
}
const Resume = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
       <div className="container mx-auto">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          <div className="w-full min-h-[70vh] mt-5">
            {/* Experience tab */}
          <TabsContent value="experience" className="w-full">
             <div className="flex flex-col gap-[30px] text-center xl:text-left">
               <h3 className="text-4xl font-bold">{experience.title}</h3>
               <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
               <ScrollArea className="h-[400px]">
                 <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.jobs.map((job, index) => {
                    return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col gap-2 justify-center items-center lg:items-start">
                      <span className="text-accent">{job.date}</span>
                      <h3 className="text-xl max-w-[320px] text-center min-h-[60px] xl:text-left">{job.title}</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-white/80">{job.company}</p>
                      </div>
                      <div className="flex items-center gap-2">
                      <span className="text-white/80">{job.location}</span>
                      </div>
                    </li>
                  })}
                 </ul>
               </ScrollArea>
             </div>
          </TabsContent>
          {/* Qualification tab */}
          <TabsContent value="qualifications" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
               <h3 className="text-4xl font-bold">{qualifications.title}</h3>
               <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{qualifications.description}</p>
               <ScrollArea className="h-[400px]">
                 <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {qualifications.degrees.map((degree, index) => {
                    return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col gap-2 justify-center items-center lg:items-start">
                      <span className="text-accent">{degree.date}</span>
                      <h3 className="text-xl max-w-[320px] text-center min-h-[60px] xl:text-left">{degree.title}</h3>
                      <p>{degree.grade}</p>
                      <div className="flex items-center gap-2">
                        <p className="text-white/80">{degree.university_board}</p>
                      </div>
                    </li>
                  })}
                 </ul>
               </ScrollArea>
             </div>
          </TabsContent>
          {/* skills tab */}
          <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {skills.skills.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-5xl group-hover:text-accent text-white flex justify-center items-center w-[80px] h-[80px] bg-[#232329] rounded-xl transition-all duration-300 ease-in-out hover:bg-accent hover:text-black">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
          </TabsContent>
          {/* about section */}
          <TabsContent value="about" className="w-full text-center xl:text-left items-center">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold mb-2">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 max-w-[750px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-2 mt-4">
                      <span className="text-accent">{item.field}:</span>
                      <p className="text-md">{item.value}</p>
                    </li>
                  })}
                </ul>
              </div>
          </TabsContent>
          </div>
        </Tabs>
       </div>
    </motion.div>
  )
}

export default Resume