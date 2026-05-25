import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = ({ darkMode, setDarkMode }) => {

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  const navItems = [
    {
      name: "Home",
      id: "home",
    },

    {
      name: "About",
      id: "about",
    },

    {
      name: "Skills & Certifications",
      id: "skills",
    },

    {
      name: "Projects",
      id: "projects",
    },

    {
      name: "Contact",
      id: "contact",
    },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">

      <div
        className={`px-8 py-4 rounded-full flex items-center gap-10 shadow-2xl backdrop-blur-xl border transition-all duration-300 ${
          darkMode
            ? "bg-white/10 border-white/10"
            : "bg-black/10 border-black/10"
        }`}
      >

        {navItems.map((item, index) => (

          <motion.button
            key={index}

            whileHover={{
              scale: 1.15,
            }}

            whileTap={{
              scale: 0.95,
            }}

            onClick={() => scrollToSection(item.id)}

            className={`capitalize font-semibold transition-all duration-300 ${
              darkMode
                ? "text-white hover:text-red-500"
                : "text-black hover:text-red-500"
            }`}
          >
            {item.name}
          </motion.button>

        ))}

        
      </div>

    </div>
  );
};

export default Navbar;