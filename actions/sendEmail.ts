"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils"
import ContactFormEmail from "@/email/contact-form-email";
const resend = new Resend(process.env.RESEND_ENV_API_KEY);


export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail'); // get the senderEmail from the form data
  const message = formData.get('message'); // get the message from the form data

  // Filler text to hide the sender's email address with '.' which is padding, unnecessary because we are using the email template
  // const minLength = 80; // Ideal number to hide from mail app preview
  // const currentLength = (message as string).length;
  // const paddingNeeded = Math.max(0, minLength - currentLength); // if the current length is less than the min length, we add padding or we choose 0
  // const padding = ".".repeat(paddingNeeded);

  // server-side validation
  if (!validateString(senderEmail, 320)) {
    return {
      error: "Invalid sender email",
    }
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    }
  }
  let data;
  try {
    data = await resend.emails.send({
      from: `Contact Form <onboard@resend.dev>`,
      to: "richardli.7272@gmail.com",
      subject: "Message from Website contact form",
      reply_to: senderEmail as string, /* we are asserting it's a string because typescript doesn't know */
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string
      })
      // text: `${message as string}\n\n ${padding} From: ${senderEmail as string} `, // unnecessary because we are using the email template
    });
  }
  catch (error: unknown) { {/* Unknown data type , advantage is that it can be anything but checks the type before we use it unsafely (unlike any) */}
  return {
    error: getErrorMessage(error)
    }
  }
  return {
    data,
  };
};

