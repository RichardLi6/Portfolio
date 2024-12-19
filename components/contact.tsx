"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
      <motion.section 
      id="contact" 
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] 
      text-center"
      initial={{ opacity:0}}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
      > {/* So we are choosing 100% if less than 38rem, when we shrink*/}
        <SectionHeading> Contact Me</SectionHeading>
        <p className= "text-gray-700 -mt-4"> Please contact me directly at {" "}
          <a className="underline" href="mailto:richardli.72@hotmail.com">
            richardli.72@hotmail.com
            </a> {" "}
             or through this form
             </p>

             <form className = "mt-10 flex flex-col"
        action={async (FormData) => {
          console.log("Running on client");
          console.log(FormData.get("senderEmail"));
          console.log(FormData.get("message"));
          await sendEmail(FormData);
        }}
        >
          <input 
          className="h-14 px-4 rounded-lg borderBlack"
          name="senderEmail"
          type="email" 
          required
          maxLength={320} // 320 is cap, but 254 is the technical cap in gmail
          placeholder="Your email"
          />
          <textarea 
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Your message"
          required
          maxLength={500}
          />
          <button type="submit" className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem]
          bg-gray-900 text-white rounded-full 
          outline-none transition-all
          focus:scale-110 hover:scale-110 hover: 
          hover:bg-gray-950 active:scale-105"> 
            Submit{" "}
             <FaPaperPlane className="text-xs opacity-70 transition-all
             group-hover:transition-x-1
             group-hover:-translate-y-1 
              "/> 
            </button>
        </form>
    </motion.section>
  )
}
