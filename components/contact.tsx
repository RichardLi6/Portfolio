import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  return (
      <section id="contact" className="mb-20 sm:mb-28 w-[min(100%, 38rem)]"> {/* So we are choosing 100% if less than 38rem, when we shrink*/}
        <SectionHeading> Contact me</SectionHeading>
        <p className= "text-gray-700"> Please contact me directly at {" "}
          <a className="underline" href="mailto:richardli.72@hotmail.com">
            richardli.72@hotmail.com
            </a> {" "}
             or through this form
             </p>

        <form className = "mt-10">
          <input className="h-14 rounded-lg borderBlack"
          type="email" />
          <textarea />
          <button type="submit"> 
            Submit <FaPaperPlane/> 
            </button>
        </form>
    </section>
  )
}
