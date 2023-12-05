// ProjectPopup.js
import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {close_icon} from '../assets'
import parse from 'html-react-parser';

const styles = {
  container: {
      display: 'flex',
  }
}

const EnlargeOnHoverEnter = (e) => {
  e.target.width=400;
}

const SameSizeOnHoverExit = (e) => {
  e.target.width=200;
}

const ProjectPopup = ({ project, onClose }) => {
  const [enlargedIndex, setEnlargedIndex] = useState(null);

  const toggleEnlarged = (index) => {
    setEnlargedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    // Disable scrolling on the body when the popup is open
    document.body.style.overflow = "hidden";

    // Re-enable scrolling on the body when the popup is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []); // Empty dependency array ensures that this effect runs only once


  return (   
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 overflow-y-auto"
    >
      <div className="max-w-3xl p-8 bg-white rounded-2xl h-[80vh] overflow-y-auto">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 fixed">
            <img src={close_icon}></img>
          </button>
        </div>
        <center><h2 className="text-2xl text-black font-bold">{project.name}</h2></center>
        <img src={project.image} alt="imgimg"></img>
        
        <div className="flex">
        {project.more_images.map((more_image, index) => (
          <div className="flex mt-4 p-4">
          <a href = {more_image}>
          <button onMouseEnter={EnlargeOnHoverEnter} onMouseLeave={SameSizeOnHoverExit}>
                <img key={`image-${index}`}
                src={more_image}
                alt={`project-image-${index}`}
                className="object-cover"
                width={10000}
                >
              </img>
              </button>
              </a>
          </div>
        ))}
        </div>
        {/* Additional details go here */}
        {/* You can customize the content of the popup based on your requirements */}
        <p className="text-gray-700 mt-2">{project.description}</p><br></br>
        {project.extra_desc.map((desc_para, index) => (
          <p key={`para-${index}`} className="text-gray-700 mt-2">{parse("<div>"+desc_para+"</div>")}</p>
        ))}
        
      </div>
    </motion.div>
  );
};

export default ProjectPopup;