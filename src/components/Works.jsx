import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  // Clicking the card opens the live site if available, otherwise the source code
  const handleCardClick = () => {
    const url = live_link || source_code_link;
    if (url) window.open(url, "_blank");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <motion.div variants={fadeIn("up", "spring")}>
      <div className="relative sm:w-[360px] w-full">
        <a
          href={live_link || source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary p-5 rounded-2xl w-full"
          >
            <div className="relative w-full h-[230px]">
              <img
                src={image}
                alt="project_image"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="mt-5">
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}

              {/* Inline GitHub icon next to tags */}
              {source_code_link && (
                <a
                  href={source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View source code"
                  className="ml-2"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-5 h-5 object-contain inline-block"
                  />
                </a>
              )}
            </div>
          </Tilt>
        </a>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through examples
          of my work. Each project is briefly described with links to code
          repositories in it.
          <br />
          <i>
            <b>
              Click the Git Icon to view the source code or click anywhere
              else on the project card to view a live demo.
            </b>
          </i>
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
