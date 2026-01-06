import emailjs from "@emailjs/browser";

export function SendMail(e) {
  e.preventDefault();

 return emailjs.sendForm(
    "service_fa2y3k5",     // your service ID
    "template_h1wfkws",    // your template ID
    e.target,              // form reference
    "E8QhzVPluxR6LoyGE" // your EmailJS public key
  )
  .then(() => alert("Email Sent!"))
  .catch(err => console.error(err));
}
