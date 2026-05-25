import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaJava,
  FaRobot,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiC,
  SiPostman,
  SiSpringboot,
} from "react-icons/si";

import { DiPython } from "react-icons/di";

const Hero = ({ darkMode }) => {

  const techIcons = [
    {
      icon: <FaReact />,
      color: "text-cyan-400",
      name: "React",
    },
    {
      icon: <SiJavascript />,
      color: "text-yellow-400",
      name: "JavaScript",
    },
    {
      icon: <FaNodeJs />,
      color: "text-green-500",
      name: "Node JS",
    },
    {
      icon: <SiMongodb />,
      color: "text-green-400",
      name: "MongoDB",
    },

    {
      icon: <DiPython />,
      color: "text-blue-400",
      name: "Python",
    },
    {
      icon: <FaHtml5 />,
      color: "text-orange-500",
      name: "HTML",
    },
    {
      icon: <FaCss3Alt />,
      color: "text-blue-500",
      name: "CSS",
    },
    {
      icon: <SiPostman />,
      color: "text-orange-400",
      name: "Postman",
    },

    {
      icon: <FaGithub />,
      color: "text-white",
      name: "GitHub",
    },
    {
      icon: <SiTailwindcss />,
      color: "text-cyan-300",
      name: "Tailwind",
    },
    {
      icon: <SiExpress />,
      color: "text-gray-300",
      name: "Express",
    },
    {
      icon: <SiMysql />,
      color: "text-blue-300",
      name: "MySQL",
    },

    {
      icon: <FaJava />,
      color: "text-red-400",
      name: "Java",
    },
    {
      icon: <SiC />,
      color: "text-blue-400",
      name: "C Language",
    },
    {
      icon: <SiSpringboot />,
      color: "text-green-500",
      name: "Spring Boot",
    },
    {
      icon: <FaRobot />,
      color: "text-pink-400",
      name: "AI Chatbot",
    },
  ];

  const handleMouseMove = (e) => {

    const board = e.currentTarget.querySelector(".tech-board");

    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 25;
    const rotateX = ((centerY - y) / centerY) * 25;

    board.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const handleMouseLeave = (e) => {

    const board = e.currentTarget.querySelector(".tech-board");

    board.style.transform = `
      rotateX(5deg)
      rotateY(-5deg)
    `;
  };

  return (
    <section
      id="home"
      className={`relative z-10 min-h-screen flex items-center justify-center overflow-hidden px-8 lg:px-20 ${
        darkMode
          ? "text-white"
          : "text-black"
      }`}
    >

      {/* RED GLOW */}
      <div className="absolute w-[700px] h-[700px] bg-red-600/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* LEFT SIDE */}
        <div className="flex-1">

          {/* TOP TEXT */}
          <p
            className={`text-3xl font-extrabold mb-5 tracking-[4px] ${
              darkMode
                ? "text-gray-200"
                : "text-gray-700"
            }`}
            style={{
              fontFamily: "Orbitron, sans-serif",
            }}
          >
            HI, I'M
          </p>

          {/* NAME */}
          <h1
            className={`text-7xl md:text-8xl font-black leading-none mb-8 ${
              darkMode
                ? "text-white"
                : "text-black"
            }`}
            style={{
              fontFamily: "Orbitron, sans-serif",
              letterSpacing: "8px",
              textShadow: darkMode
                ? "0px 0px 25px rgba(255,255,255,0.9)"
                : "0px 0px 10px rgba(0,0,0,0.4)",
            }}
          >
            SAI <br />
            VEGISETTI
          </h1>

          {/* BOTTOM TEXT */}
          <p
            className={`text-2xl font-bold mb-10 ${
              darkMode
                ? "text-gray-300"
                : "text-gray-700"
            }`}
            style={{
              fontFamily: "Orbitron, sans-serif",
            }}
          >
            PASSIONATE ABOUT TECHNOLOGY & INNOVATION
          </p>

          {/* BUTTON */}
          <a
            href="https://drive.google.com/file/d/1VEhyLQm07lGAsyoUyDdJDMZPLIkaGSqq/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="
            inline-block
            px-10
            py-4
            rounded-2xl
            bg-red-500
            hover:bg-red-600
            transition-all duration-300
            text-white
            font-bold
            shadow-[0_0_25px_rgba(255,0,0,0.6)]
          "
          >
            Resume
          </a>
        </div>

        {/* RIGHT SIDE BOARD */}
        <div className="flex-1 flex justify-end mt-20 lg:mt-0 pr-10">

          {/* MOUSE AREA */}
          <div
            className="w-fit h-fit"
            style={{
              perspective: "3s50px",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >

            {/* BOARD */}
            <div
              className="
              tech-board
              relative
              grid grid-cols-4
              gap-6
              p-10
              rounded-[40px]
              bg-[#0f0f0f]
              border border-[#232323]
              shadow-[0_50px_120px_rgba(0,0,0,0.9)]
              transition-transform duration-100
            "
              style={{
                transform: "rotateX(10deg) rotateY(-10deg)",
                transformStyle: "preserve-3d",
              }}
            >

              {techIcons.map((item, index) => (

                <div
                  key={index}
                  className="
                  group
                  relative
                  w-[105px]
                  h-[105px]
                  rounded-[28px]
                  bg-[#181818]
                  border border-[#2d2d2d]
                  flex items-center justify-center
                  text-5xl
                  transition-all duration-300
                  hover:-translate-y-4
                  hover:scale-110
                  hover:shadow-[0_20px_40px_rgba(255,0,0,0.4)]
                  shadow-[0_10px_25px_rgba(0,0,0,0.8)]
                "
                >

                  {/* ICON */}
                  <span className={`${item.color} drop-shadow-lg`}>
                    {item.icon}
                  </span>

                  {/* TOOLTIP */}
                  <div
                    className="
                    absolute
                    -top-14
                    left-1/2
                    -translate-x-1/2
                    opacity-0
                    group-hover:opacity-100
                    transition-all duration-300
                    bg-black
                    text-white
                    text-sm
                    px-4
                    py-2
                    rounded-xl
                    border border-red-500
                    whitespace-nowrap
                    shadow-[0_0_15px_rgba(255,0,0,0.45)]
                    z-50
                    font-bold
                    pointer-events-none
                  "
                  >
                    {item.name}
                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;