import React from "react";
import Tilt from "../../node_modules/react-tilt/dist/tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { skills } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const SkillsCard = ({ index, title, icon, skill_names }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[30px] font-bold text-center'>
          {title}
        </h3>
        
          <ul className="float-left text-white text-[15px] list-disc pl-5 ">
          {skill_names.map((skill_name) => (
            <li> {skill_name} </li>
        ))}
          </ul>

      </div>
    </motion.div>
  </Tilt>
);

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What have I learned?</p>
        <h2 className={styles.sectionHeadText}>My Skills.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I have learned the following skills while working on various projects 
        and while working at my internships and clubs. Most of my skills are 
        self-learned based on my different interests and 
        what I wanted to explore at the time!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {skills.map((skill, index) => (
          <SkillsCard key={skill.title} index={index} {...skill} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
