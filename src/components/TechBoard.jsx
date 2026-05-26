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
  { icon: <FaReact />, color: "text-cyan-400" },
  { icon: <SiJavascript />, color: "text-yellow-400" },
  { icon: <FaNodeJs />, color: "text-green-500" },
  { icon: <SiMongodb />, color: "text-green-400" },

  { icon: <FaPython />, color: "text-blue-400" },
  { icon: <FaHtml5 />, color: "text-orange-500" },
  { icon: <FaCss3Alt />, color: "text-blue-500" },
  { icon: <FaGitAlt />, color: "text-orange-400" },

  { icon: <FaGithub />, color: "text-white" },
  { icon: <SiTailwindcss />, color: "text-cyan-300" },
  { icon: <SiExpress />, color: "text-gray-300" },
  { icon: <SiMysql />, color: "text-blue-300" },

  { icon: <FaJava />, color: "text-red-400" },
  { icon: <SiC />, color: "text-blue-400" },
  { icon: <SiFirebase />, color: "text-yellow-500" },
  { icon: <SiPostman />, color: "text-orange-500" },
];

const TechBoard = () => {

  return (

    <motion.div

      animate={{
        y: [0, -10, 0],
      }}

      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}

      className="relative scale-35"
    >

      <Tilt

        tiltMaxAngleX={12}
        tiltMaxAngleY={12}

        perspective={1000}

        transitionSpeed={1500}

        scale={1.01}

        gyroscope={true}

        className="
          bg-[#0b0b0b]
          rounded-[28px]
          p-1
          border border-red-500/10
          shadow-[0_0_40px_rgba(255,0,0,0.10)]
        "
      >

        <div className="grid grid-cols-4 gap-3">

          {techIcons.map((item, index) => (

            <motion.div

              key={index}

              whileHover={{
                scale: 1.08,
              }}

              className="
                w-5
                h-5
                bg-[#111]
                rounded-xl
                flex
                items-center
                justify-center
                shadow-lg
                border border-white/5
              "
            >

              <div
                className={`text-2xl ${item.color}`}
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