"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils"

const resend = new Resend(process.env.RESEND_ENV_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail'); // get the senderEmail from the form data
  const message = formData.get('message'); // get the message from the form data

  // Filler text to hide the sender's email address with '.' which is padding
  const minLength = 80; // Ideal number to hide from mail app preview
  const currentLength = (message as string).length;
  const paddingNeeded = Math.max(0, minLength - currentLength); // if the current length is less than the min length, we add padding or we choose 0
  const padding = ".".repeat(paddingNeeded);

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

  try {
    await resend.emails.send({
      from: `Contact Form <onboard@resend.dev>`,
      to: "richardli.7272@gmail.com",
      subject: "Message from Website contact form",
      reply_to: senderEmail as string, /* we are asserting it's a string because typescript doesn't know */
      text: `${message as string}\n\n ${padding} From: ${senderEmail as string} `,
    });
  }
  catch (error) {
    console.log(error);
  }
}
