"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

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
          <a className="underline" href="mailto:richardli.7272@gmail.com">
            richardli.7272@gmail.com
            </a> {" "}
             or through this form
             </p>

             <form 
             className = "mt-10 flex flex-col" 
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
          maxLength={5000}
          />
          <SubmitBtn />
        </form>
    </motion.section>
  )
}
