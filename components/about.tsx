"use client";
// So we use client because we are using the framer-motion library in this component.
import React from 'react'
import SectionHeading from './section-heading'
import {motion} from 'framer-motion'

export default function About() {
  return (
    <motion.section className ="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
    initial={{ opacity: 0, y: 100}}
    animate={{ opacity: 1, y: 0}}
    transition={{delay: 0.175}}
    >
      <SectionHeading> About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in {" "}
        <span className="font-medium">Health Sciences</span>, I learned the basics of
        programming through online courses on LinkedIn Learning and Codecademy. This sparked my interest in using technology for data analysis, 
        leading me to apply my statistical and programming skills in research projects. {" "}
        </p>
        <p className="mb-3">
        My passion to pursue the technological side of Health Sciences motivated me to enroll in the Computer Systems Technology Diploma at BCIT
        where I deepened my knowledge of{" "}
        <span className="font-medium"> software development</span>. Throughout this program, I realized I genuinely enjoyed programming
        because of the various ways I can help solve complex problems and create an impact in meaningful ways.{" "}
         I primarily utilize {" "}
        <span className="font-medium">
          Python, Javascript, and MongoDB
        </span>, but I am also familiar with Java, React, and SQL. I am continuously expanding my skill set and am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a  <span className="font-medium"> software
        developer. </span>
        </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy 
        <span className="font-medium"> hiking </span> and {" "}
        <span className="font-medium">learning new things</span>. I'm currently
        exploring {" "}
        <span className="font-medium"> journalling. </span> 
      </p>
    </motion.section>
  )
}
