"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";
const StairTransition = () => {
  const path = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={path}>
        <motion.div
        key={path}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
        className="h-screen w-screen fixed top-0 left-0 right-0 bg-black pointer-events-none z-40 flex"
      >
        <Stairs />
      </motion.div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
