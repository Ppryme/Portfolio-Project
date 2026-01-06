// src/utils/email.js   (or contact.mjs — both work in Vite)
import emailjs from '@emailjs/browser';

// Initialize once (recommended)
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export const SendMail = async (e) => {
  e.preventDefault();

  try {
    const result = await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      // public key is optional here because we used init()
      // but you can keep it for safety:
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    console.log("SUCCESS!", result.status, result.text);
    return result; // so you can use it in try/catch
  } catch (error) {
    console.error("FAILED...", error);
    throw error; // re-throw so catch block in component works
  }
};