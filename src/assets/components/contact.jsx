import { useState } from "react";
import FloatingInputb from "./FloatingInputb"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { motion } from "framer-motion";
import {SendMail} from '../script/contact.mjs'
import { useRef } from "react";


export default function Contact ({darkMode}){
  const sendForm = useRef();
    
  const [loading, setLoading] = useState(false)

   const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await SendMail(e); // execute your SendMail function
      setLoading(false);
      alert("Message sent successfully ✅");
      e.target.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      setLoading(false);
      alert("Failed to send message ❌");
    }
  };
   

    return (
        
<section 
  id="contact-container" 
  className=" min-h-screen mx-auto pt-25 px-4 flex flex-col-reverse xl:flex-row gap-28"
>
  <div 
    id="contact-form" 
    className={`${darkMode ? "bg-[#102D44] text-white" : "bg-white text-gray-800"} p-6 rounded-lg shadow-2xl max-w-[32rem]  max-h-fit flex-1 py-12 `}
  >
    <h3 className="text-2xl font-bold mb-4">Contact Form</h3>

    <form 
    onSubmit={handleSubmit} 
    id="contactForm"
    className="flex flex-col gap-14"
    ref={sendForm}
    >
      
            
              <input hidden name="ContactForm" type="text"  />
              <FloatingInputb
                label="Full name"
                name="fullname"
                type="text"
                required
                 darkMode= {darkMode}
                />
                
                
              
              <FloatingInputb
                label="Email Address"
                name="email"
                type="email"
                required
                 darkMode= {darkMode}
                 />
               
                
             
           
            <FloatingInputb
              label="Phone no"
              name="Phonenumber"
              type="number"
              required
              darkMode= {darkMode}
              />

            <textarea
              placeholder="Enter message"
              name="message"
              className={`bg-transparent border-b border-b-dark/30 h-24 text-sm placeholder:text-sm ${darkMode ? "focus:placeholder-white-500": "focus:placeholder-indigo-500"} 
              focus:border-b-lightblue focus:outline-none text-dark`}
              
             
             
              
            ></textarea>

             <span className="text-left"> 
              <button    
              type="submit"
              disabled={loading}
              className={`text-lg font-bold text-white py-3 px-4 rounded-lg 
                ${loading
                  ? "bg-indigo-400 cursor-not-allowed "
                  : "bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-300"}`}
            >
              {loading ? (
                <motion.div
                  className="flex items-center justify-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-5 h-5 border-2 border-t-transparent border-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  />
                  Sending...
                </motion.div>
              ) : (
                ""
              )}
               { !loading ? <span>Send Message</span> : ""}  </button></span>
             
          </form>
        
  </div>

  <div id="contact-details " className="flex flex-col text-left gap-6">
      <h3 className="sm:text-3xl text-2xl mb-6 mt-6">Contact Me</h3>

     <a 
         href="https://www.google.com/maps/search/?api=1&query=Ifako-Ijaiye,+Ijaiye/Ojokoro+101232,+Lagos"
         target="_blank"
  rel="noopener noreferrer"
     >
      <span className="space-x-3 cursor-pointer sm:text-xl text-[16px]  flex"><LocationOnOutlinedIcon/><p>Ifako-Ijaiye, Ijaiye/Ojokoro 101232, Lagos</p></span>
     </a>
    <a   
    href="https://mail.google.com/mail/?view=cm&fs=1&to=famuyiwapeter2004@gmail.com" 
     target="_blank"
     rel="noopener noreferrer"
> <span className="space-x-3 cursor-pointer sm:text-xl text-[16px]"> <EmailOutlinedIcon/>  <span>famuyiwapeter2004@gmail.com</span></span> </a> 

    <a href="tel:+2348146498950">  <span className="space-x-3 cursor-pointer sm:text-xl text-[16px]"> <LocalPhoneOutlinedIcon/> <span>08146498950</span></span></a>
  </div>
</section>
        
    )
}