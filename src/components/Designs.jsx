import React from "react";
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { useState } from "react";
import ProjectPopup from "./ProjectPopup"; // Adjust the path accordingly



const DesignCard = ({ index, name, description, image, source_code_link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "560px", // Adjust these values as needed
          height: "315px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='relative w-full h-full overflow-hidden'>
          <div className="image-container">
            <motion.img
              src={image}
              alt='project_image'
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px", // Adjust as needed
                transform: isHovered ? "scale(1.1)" : "scale(1)",
                transition: "transform 0.5s",
              }}
            />
          </div>

          {isHovered && (
            <motion.div
              className='absolute inset-0 flex flex-col justify-end m-3'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ background: "rgba(0, 0, 0, 0.7)", padding: "1rem", borderRadius: "8px" }}>
                <motion.div
                  className='text-white text-[18px] font-bold mb-2'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {name}
                </motion.div>
                <motion.div
                  className='text-secondary text-[14px]'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {description}
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>

        {isHovered && (
          <motion.div
            className='absolute inset-0 flex justify-start items-end m-3'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};



const Designs = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <div className="cursor-pointer" key={`project-${index}`} onClick={() => openPopup(project)}>
            <DesignCard index={index} {...project} />
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectPopup project={selectedProject} onClose={closePopup} />
      )}

    </>
  );
};

export default SectionWrapper(Designs, "designs");