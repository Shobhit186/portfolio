import { animate, motion } from "framer-motion"

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate:{
        top: "100%",
    },
    exit:{
        top: ["100%","0%"],
    }
}
const reverseIndex = (index) => {
    const totalSteps = 6;
    const reverseIndex = totalSteps - index - 1;
    return reverseIndex;
}
const Stairs = () => {
  return (
    <>
     {[...Array(6)].map((_, index) => {
        return (
            <motion.div
                key={index}
                className={`w-full h-[100vh] bg-white relative top-0 left-0 z-50`}
                variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, delay: reverseIndex(index) * 0.1, ease: "easeInOut" }}
            ></motion.div>
        )
      })}
    </>
  )
}

export default Stairs