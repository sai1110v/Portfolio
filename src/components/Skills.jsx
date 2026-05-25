import {
  FaPython,
  FaUsers,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiHtml5,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

const Skills = ({ darkMode }) => {

  const skills = [

    {
      name: "HTML",
      icon: <SiHtml5 />,
      color: "text-orange-500",
    },

    {
      name: "CSS",
      icon: <FaCss3Alt />,
      color: "text-blue-500",
    },

    {
      name: "MERN Stack",
      icon: <SiMongodb />,
      color: "text-green-400",
    },

    {
      name: "Python",
      icon: <FaPython />,
      color: "text-blue-400",
    },

    {
      name: "MySQL",
      icon: <SiMysql />,
      color: "text-blue-300",
    },

    {
      name: "Generative AI",
      icon: "🤖",
      color: "text-pink-400",
    },

    {
      name: "Problem Solving",
      icon: "🧠",
      color: "text-yellow-400",
    },

    {
      name: "Team Collaboration",
      icon: <FaUsers />,
      color: "text-cyan-300",
    },
  ];

  const certifications = [

    {
      title: "ServiceNow Certified System Administrator",
      issuer: "ServiceNow",
      year: "2026",

      file: "https://drive.google.com/file/d/1Zo4Io8gjdcwpPG3kfBZZ6Iix1c4wklxv/view?usp=sharing",
    },

    {
      title: "Machine Learning for Core Engineering Disciplines",
      issuer: "NPTEL",
      year: "2025",

      file: "https://drive.google.com/file/d/1HXwbarClA37EJ3HPUMCg0YBy0kg99Nt7/view?usp=sharing",
    },

    {
      title: "AI in Human Resource Management",
      issuer: "NPTEL",
      year: "2026",

      file: "https://drive.google.com/file/d/1FzN9Y4dr-NZYbUFrBLPHs0927FfOF1Md/view?usp=sharing",
    },
  ];

  return (

    <section
      id="skills"
      className={`relative z-10 min-h-screen px-8 lg:px-20 py-24 ${
        darkMode
          ? "text-white"
          : "text-black"
      }`}
    >

      {/* HEADING */}
      <div className="text-center mb-20">

        <h1
          className="text-5xl md:text-6xl font-black mb-6"
          style={{
            fontFamily: "Orbitron, sans-serif",
            textShadow: darkMode
              ? "0px 0px 20px rgba(255,255,255,0.8)"
              : "0px 0px 8px rgba(0,0,0,0.3)",
          }}
        >
          Skills & Certifications
        </h1>

        <p
          className={`text-lg ${
            darkMode
              ? "text-gray-400"
              : "text-gray-600"
          }`}
        >
          Technologies and skills that power my development journey.
        </p>
      </div>

      {/* SKILLS */}
      <div
        className="
        grid
        grid-cols-2
        lg:grid-cols-4
        gap-6
        mb-28
      "
      >

        {skills.map((skill, index) => (

          <div
            key={index}
            className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border border-[#262626]
            bg-[#111111]/80
            backdrop-blur-lg
            px-6
            py-10
            transition-all duration-500
            hover:-translate-y-3
            hover:border-red-500/40
            hover:shadow-[0_15px_40px_rgba(255,0,0,0.2)]
            text-center
          "
          >

            {/* GLOW */}
            <div
              className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition-all duration-500
              bg-gradient-to-br
              from-red-500/5
              to-transparent
            "
            />

            {/* ICON */}
            <div
              className={`
                text-6xl
                mb-6
                flex
                justify-center
                items-center
                transition-all duration-500
                group-hover:scale-125
                ${skill.color}
              `}
            >
              {typeof skill.icon === "string" ? (
                <span>{skill.icon}</span>
              ) : (
                skill.icon
              )}
            </div>

            {/* NAME */}
            <h2
              className="
              text-xl
              font-bold
              relative
              z-10
            "
              style={{
                fontFamily: "Orbitron, sans-serif",
              }}
            >
              {skill.name}
            </h2>

          </div>
        ))}
      </div>

      {/* CERTIFICATIONS */}
      <div>

        <h2
          className="text-5xl font-black mb-14 text-center"
          style={{
            fontFamily: "Orbitron, sans-serif",
          }}
        >
          Certifications
        </h2>

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-8
        "
        >

          {certifications.map((cert, index) => (

            <a
              key={index}
              href={cert.file}
              target="_blank"
              rel="noreferrer"
              className="
              group
              rounded-3xl
              border border-[#262626]
              bg-[#111111]/80
              backdrop-blur-lg
              p-8
              transition-all duration-500
              hover:-translate-y-3
              hover:border-red-500/40
              hover:shadow-[0_15px_40px_rgba(255,0,0,0.2)]
              block
            "
            >

              {/* CHECK ICON */}
              <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-red-500/10
                border border-red-500/30
                flex
                items-center
                justify-center
                text-red-400
                text-2xl
                font-black
                mb-6
                group-hover:scale-110
                transition-all duration-500
              "
              >
                ✓
              </div>

              {/* TITLE */}
              <h3
                className="
                text-2xl
                font-bold
                mb-5
                leading-snug
              "
                style={{
                  fontFamily: "Orbitron, sans-serif",
                }}
              >
                {cert.title}
              </h3>

              {/* DETAILS */}
              <p className="text-gray-400 mb-2">
                Issued By: {cert.issuer}
              </p>

              <p className="text-gray-500 mb-8">
                Year: {cert.year}
              </p>

              {/* BUTTON */}
              <div
                className="
                inline-block
                px-5
                py-3
                rounded-xl
                bg-red-500/10
                border border-red-500/30
                text-red-400
                font-semibold
                transition-all duration-300
                group-hover:bg-red-500
                group-hover:text-white
              "
              >
                View Certificate
              </div>

            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;