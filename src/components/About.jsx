import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a passionate engineer who loves designing all things 3D, inlcuding (but not limited to!) 
        Augmented Reality, Virtual Reality and Game Development! 
        I also enjoy working on web and mobile applications, 
        as well as Artificial Intelligence and Machine Learning techniques.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
