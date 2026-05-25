import { motion } from "framer-motion";

const About = ({ darkMode }) => {

  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center px-6 py-20 ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >

      <div className="max-w-5xl w-full">

        {/* Heading */}
        <motion.div

          initial={{
            opacity: 0,
            y: -50,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          className="text-center mb-14"
        >

          <h1
            className="text-6xl font-bold"
            style={{
              fontFamily: "'Times New Roman', serif",
            }}
          >
            About Me
          </h1>

          <div className="w-28 h-1 bg-red-500 mx-auto mt-5 rounded-full"></div>

        </motion.div>

        {/* About Card */}
        <motion.div

          initial={{
            opacity: 0,
            y: 60,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          className={`rounded-[30px] p-10 border shadow-2xl backdrop-blur-xl ${
            darkMode
              ? "bg-white/5 border-white/10"
              : "bg-black/5 border-black/10"
          }`}
        >

          <div
            className={`text-lg leading-[42px] space-y-8 ${
              darkMode
                ? "text-gray-300"
                : "text-gray-700"
            }`}
            style={{
              fontFamily: "'Times New Roman', serif",
            }}
          >

            {/* Paragraph 1 */}
            <p>
              Hello! I'm{" "}
              <span className="font-bold text-red-500">
                Sai Vegisetti  
              </span>
              , Currently pursuing B.Tech in Artificial Intelligence and Machine Learning from, {" "}
              <span className="font-bold text-red-500">
                BVC College of Engineering.   
              </span>
              
                   Passion for technology, innovation, and modern web development. I enjoy building interactive applications and exploring emerging technologies.
            </p>

            {/* Paragraph 2 */}
            <p>
              I have hands-on experience in full-stack web development, database management, and AI-based applications using APIs and modern technologies. My skills include Python, JavaScript, SQL, MongoDB, MERN stack technologies.
               <span className="font-bold text-red-500">
                I'm also CERTIFIED IN SERVICENOW ADMINISTRATION  (CSA Certification).
              </span>
            </p>

            {/* Paragraph 3 */}
            <p>
             
              I am passionate about technology and continuously exploring different domains in the IT industry while improving my skills and building innovative projects.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default About;