import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaFigma,
  FaJava,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiC,
  SiFirebase,
  SiPostman,
} from "react-icons/si";

const techIcons = [
  {
    icon: <FaReact />,
    color: "text-cyan-400",
  },

  {
    icon: <SiJavascript />,
    color: "text-yellow-400",
  },

  {
    icon: <FaNodeJs />,
    color: "text-green-500",
  },

  {
    icon: <SiMongodb />,
    color: "text-green-400",
  },

  {
    icon: <FaPython />,
    color: "text-blue-400",
  },

  {
    icon: <FaHtml5 />,
    color: "text-orange-500",
  },

  {
    icon: <FaCss3Alt />,
    color: "text-blue-500",
  },

  {
    icon: <FaGitAlt />,
    color: "text-orange-400",
  },

  {
    icon: <FaGithub />,
    color: "text-white",
  },

  {
    icon: <SiTailwindcss />,
    color: "text-cyan-300",
  },

  {
    icon: <SiExpress />,
    color: "text-gray-300",
  },

  {
    icon: <SiMysql />,
    color: "text-blue-300",
  },

  {
    icon: <FaJava />,
    color: "text-red-400",
  },

  {
    icon: <SiC />,
    color: "text-blue-400",
  },

  {
    icon: <SiFirebase />,
    color: "text-yellow-500",
  },

  {
    icon: <FaFigma />,
    color: "text-pink-400",
  },

  {
    icon: <SiPostman />,
    color: "text-orange-500",
  },
];

const TechBoard = () => {

  return (

    <motion.div

      animate={{
        y: [0, -20, 0],
      }}

      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}

      className="relative"
    >

      <Tilt

        tiltMaxAngleX={15}
        tiltMaxAngleY={15}

        perspective={1200}

        transitionSpeed={2000}

        scale={1.02}

        gyroscope={true}

        className="bg-[#0b0b0b] rounded-[35px] p-7 border border-red-500/10 shadow-[0_0_80px_rgba(255,0,0,0.12)]"
      >

        <div className="grid grid-cols-4 gap-5">

          {techIcons.map((item, index) => (

            <motion.div

              key={index}

              whileHover={{
                scale: 1.15,
                rotate: 6,
              }}

              className="w-20 h-20 bg-[#111] rounded-2xl flex items-center justify-center shadow-lg border border-white/5"
            >

              <div
                className={`text-4xl ${item.color}`}
              >
                {item.icon}
              </div>

            </motion.div>

          ))}

        </div>

      </Tilt>

    </motion.div>
  );
};

export default TechBoard;