"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';
import { FaPaperPlane } from 'react-icons/fa';

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
        <p className= "text-gray-700 -mt-4 dark:text-white/80"> Please contact me directly at {" "}
          <a className="underline" href="mailto:richardli.7272@gmail.com">
            richardli.7272@gmail.com
            </a> {" "}
             or through this form
             </p>

             <form 
             className = "mt-10 flex flex-col dark:text-black" 
             action ={async (formData) => {
              const {data, error } = await sendEmail(formData)

              if (error) {
                toast.error(error);
                return;
              }
              toast.success('Email sent successfully!');
              }}
              > {/* action is the function we want to run when the form is submitted and we don't use async await in the action because it is not needed */}
          <input 
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark: outline-none"
          name="senderEmail"
          type="email" 
          required
          maxLength={320} // 320 is cap, but 254 is the technical cap in gmail
          placeholder="Your email"
          />
          <textarea 
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark: outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          />
          <button
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full
            outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10"
            >
              Submit{" "}
              <FaPaperPlane className="text-xs opacity-70
              transition-all group-hover:translate-x-1
              group-hover:-translate-y-1" />{" "}
            </button>
        </form>
    </motion.section>
  )
}
