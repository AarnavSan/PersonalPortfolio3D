import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {close_icon} from '../assets'
import parse from 'html-react-parser';

import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module

const styles = {
  container: {
      display: 'flex',
  }
}

function SliderCarousel({images}) {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
      {images.map((image, index) => (
            <div key={index} className={`keen-slider__slide number-slide${index}`}>
                <button>
                <img
                  src={image}
                  alt={`project-image-${index}`}
                  // className="object-cover"
                  // width={10000}
                />
                </button>
            </div>
          ))}
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
      {images.map((image, index) => (
            <div key={index} className={`keen-slider__slide number-slide${index}`}>
            <button>
                <img
                  src={image}
                  alt={`project-image-${index}`}
                  // className="object-cover"
                  // width={10000}
                />
                </button>
            </div>
          ))}
      </div>
    </>
  )
}


function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
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
  const more_images = project.more_images;
  const toggleEnlarged = (index) => {
    setEnlargedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const EnlargeOnHoverEnter = () => {
    // Add logic for hover enter if needed
  };

  const SameSizeOnHoverExit = () => {
    // Add logic for hover exit if needed
  };

  useEffect(() => {
    // Disable scrolling on the body when the popup is open
    document.body.style.overflow = "hidden";

    // Re-enable scrolling on the body when the popup is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []); // Empty dependency array ensures that this effect runs only once

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


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
            <img src={close_icon} alt="close icon" />
          </button>
        </div>
        <center>
          <h2 className="text-2xl text-black font-bold">{project.name}</h2>
        </center>
          {console.log(more_images)}
        <SliderCarousel images={more_images} />
        
        {/* Additional details go here */}
        {/* You can customize the content of the popup based on your requirements */}
        <p className="text-gray-700 mt-2">{project.description}</p>
        <br></br>
        {project.extra_desc.map((desc_para, index) => (
          <p key={`para-${index}`} className="text-gray-700 mt-2">
            {parse("<div>" + desc_para + "</div>")}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectPopup;