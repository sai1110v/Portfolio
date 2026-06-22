import eatlyImg from "../assets/eatly.png";
import portfolioImg from "../assets/portfolio.png";
import calcImg from "../assets/calc.png";

const Projects = ({ darkMode }) => {

  const projects = [

    {
      title: "EATLY",
      category: "Restaurant Platform",

      image: eatlyImg,

      live:
        "https://eatlyrestaurant.netlify.app/",
    },

    {
      title: "My Portfolio",
      category: "Portfolio Website",

      image: portfolioImg,

      live:
        "https://myportfolio-sai35.vercel.app/",
    },
     {
      title: "Modern calculator",
      category: "Multi-Calc",

      image: calcImg,

      live:
        "https://modern-calculator-steel.vercel.app/",
    },
  ];

  return (

    <section
      id="projects"
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
          Projects
        </h1>

        <p
          className={`text-lg ${
            darkMode
              ? "text-gray-400"
              : "text-gray-600"
          }`}
        >
          Some of my featured works and real-world projects.
        </p>
      </div>

      {/* PROJECT GRID */}
      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-10
        max-w-6xl
        mx-auto
      "
      >

        {projects.map((project, index) => (

          <a
            key={index}
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
            group
            relative
            overflow-hidden
            rounded-[30px]
            h-[340px]
            border border-[#262626]
            bg-[#111111]
            transition-all duration-500
            hover:-translate-y-3
            hover:shadow-[0_20px_50px_rgba(255,0,0,0.25)]
          "
          >

            {/* IMAGE */}
            <img
              src={project.image}
              alt={project.title}
              className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              transition-all duration-700
              group-hover:scale-105
            "
            />

            {/* DARK OVERLAY */}
            <div
              className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/50
              to-transparent
            "
            />

            {/* CONTENT */}
            <div
              className="
              absolute
              bottom-0
              left-0
              p-7
              z-10
            "
            >

              {/* TITLE */}
              <h2
                className="
                text-4xl
                font-black
                mb-4
              "
                style={{
                  fontFamily: "Orbitron, sans-serif",
                }}
              >
                {project.title}
              </h2>

              {/* CATEGORY */}
              <div
                className="
                inline-block
                px-5
                py-2
                rounded-full
                bg-white
                text-black
                font-bold
                text-sm
              "
              >
                {project.category}
              </div>

            </div>

          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;    