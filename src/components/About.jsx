import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { profilePhoto } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
          loading="lazy"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <div className="mt-4 flex flex-col lg:flex-row gap-8 items-center">
        {/* Profile Photo Section */}
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 0.75)}
          className="flex-shrink-0"
        >
          <div className="relative w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] group">
            {/* Gradient border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200 animate-tilt"></div>

            {/* Profile image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#151030] shadow-2xl">
              <img
                src={profilePhoto}
                alt="Jasjeet Singh"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.p
          variants={fadeIn("left", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-3xl leading-[30px] flex-1"
        >
          I'm a second-year Computer Science and Statistics student at the
          University of Toronto, with hands-on experience in building
          user-friendly web apps, Android applications and C-based games that
          showcase my skills in multiple programming languages and algorithmic
          problem solving. I'm eager to join a company that values innovation,
          collaboration, and continuous learning. I'm confident that my
          project-focused mindset and passion for technology will help drive
          impactful results.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, "about");

export default WrappedAbout;
