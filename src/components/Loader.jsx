import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{
        duration: 1.2,
        delay: 1.8,
        ease: [0.87, 0, 0.13, 1],
      }}
      className="fixed inset-0 bg-black z-[999] flex items-center justify-center overflow-hidden"
    >

      {/* Expanding Circle */}
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 12,
        }}
        transition={{
          duration: 1.8,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute w-32 h-32 rounded-full bg-white"
      />

      {/* Text */}
      <motion.h1
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
        className="text-black text-7xl font-bold tracking-[10px] z-10 font-['Orbitron']"
      >
        WELCOME
      </motion.h1>

    </motion.div>
  );
};

export default Loader;