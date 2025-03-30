'use client';
import CountUp from "react-countup";

const stats= [
    { value: 4, label: "Years of Experience" },
    { value: 5, label: "Projects Completed" },
    { value: 6, label: "Technologies Mastered" },
]
const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-1 gap-4 items-center justify-center xl:justify-start">
                    <span className="text-[var(--color-accent)] text-4xl font-bold">
                        <CountUp end={stat.value} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />+
                    </span>
                    <p className={`${stat.label.length < 15 ? "max-w-[100px]" : "max-w-[150px"} leading-snug text-white/80`}>{stat.label}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Stats