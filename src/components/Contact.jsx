import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import { motion } from "framer-motion";

const Contact = ({ darkMode }) => {

  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center justify-center px-5 py-24 ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >

      <div className="w-full max-w-5xl">

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

          className="text-center mb-20"
        >

          <h1 className="text-7xl font-bold">
            Get In Touch
          </h1>

          <div className="w-32 h-1 bg-red-500 mx-auto mt-6 rounded-full"></div>

          <p
            className={`mt-8 text-2xl ${
              darkMode
                ? "text-gray-400"
                : "text-gray-700"
            }`}
          >
            Feel free to connect with me anytime.
          </p>

        </motion.div>

        {/* Main Card */}
        <motion.div

          initial={{
            opacity: 0,
            y: 80,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          className={`rounded-[30px] p-14 border shadow-2xl backdrop-blur-xl ${
            darkMode
              ? "bg-white/5 border-white/10"
              : "bg-black/5 border-black/10"
          }`}
        >

          <div className="grid md:grid-cols-2 gap-16">

            {/* LEFT SIDE */}
            <div>

              <h2 className="text-5xl font-bold mb-12">
                Contact Information
              </h2>

              {/* Email */}
              <div className="flex items-center gap-6 mb-10">

                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl">
                  <FaEnvelope />
                </div>

                <div>

                  <h3 className="text-3xl font-semibold">
                    Email
                  </h3>

                  <p
                    className={`text-xl mt-1 ${
                      darkMode
                        ? "text-gray-400"
                        : "text-gray-700"
                    }`}
                  >
                    saivegisetti46@gmail.com
                  </p>

                </div>

              </div>

              {/* Phone */}
              <div className="flex items-center gap-6 mb-10">

                <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center text-2xl">
                  <FaPhoneAlt />
                </div>

                <div>

                  <h3 className="text-3xl font-semibold">
                    Phone
                  </h3>

                  <p
                    className={`text-xl mt-1 ${
                      darkMode
                        ? "text-gray-400"
                        : "text-gray-700"
                    }`}
                  >
                    +91 7569935612
                  </p>

                </div>

              </div>

              {/* Location */}
              <div className="flex items-center gap-6">

                <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-2xl">
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <h3 className="text-3xl font-semibold">
                    Location
                  </h3>

                  <p
                    className={`text-xl mt-1 ${
                      darkMode
                        ? "text-gray-400"
                        : "text-gray-700"
                    }`}
                  >
                    East Godavari, Andhra Pradesh, India
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col justify-center">

              <h2 className="text-5xl font-bold mb-10">
                Connect With Me
              </h2>

              <p
                className={`text-2xl leading-relaxed mb-12 ${
                  darkMode
                    ? "text-gray-400"
                    : "text-gray-700"
                }`}
              >
                Let’s collaborate, build projects,
                and create something amazing together.
              </p>

              {/* Social Buttons */}
              <div className="flex gap-6">

                {/* LinkedIn */}
                <motion.a

                  whileHover={{
                    scale: 1.1,
                    y: -5,
                  }}

                  href="https://www.linkedin.com/in/sai-vegisetti-21a647332?utm_source=share_via&utm_content=profile&utm_medium=member_android"

                  target="_blank"

                  rel="noopener noreferrer"

                  className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-3xl"
                >
                  <FaLinkedinIn />
                </motion.a>

                {/* GitHub */}
                <motion.a

                  whileHover={{
                    scale: 1.1,
                    y: -5,
                  }}

                  href="https://github.com/sai1110v"

                  target="_blank"

                  rel="noopener noreferrer"

                  className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl ${
                    darkMode
                      ? "bg-gray-800"
                      : "bg-gray-300"
                  }`}
                >
                  <FaGithub />
                </motion.a>

              </div>

            </div>

          </div>

        </motion.div>

        {/* Footer */}
        <div className="mt-16 text-center">

          <p
            className={`text-lg ${
              darkMode
                ? "text-gray-500"
                : "text-gray-700"
            }`}
          >
           
          </p>

        </div>

      </div>

    </section>
  );
};

export default Contact;