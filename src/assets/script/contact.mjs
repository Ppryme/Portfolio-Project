import emailjs from "@emailjs/browser";

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

emailjs.init(PUBLIC_KEY);

export function SendMail(e) {
  console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  e.preventDefault();

  return emailjs
    .sendForm(
      "service_fa2y3k5",   // service ID
      "template_h1wfkws",  // template ID
      e.target,
      PUBLIC_KEY           // ✅ use env variable
    )
    .then(() => alert("Email Sent!"))
    .catch(err => console.error(err));

    
}
