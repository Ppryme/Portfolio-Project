import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import FloatingInputb from "../FloatingInputb";
import { createPortal } from "react-dom";
import {SendMail} from '../../script/Hireme-contact.mjs'
import { useRef } from "react";


export default function HiremePopup({ hireMePopup, setIsHireMePopup, darkMode }) {
  const sendForm = useRef()

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
  const portalTarget = document.getElementById("pop-up");

  // Avoid rendering if portal root isn't ready
  if (!portalTarget) return null;

  return createPortal(
    <AnimatePresence>
      {hireMePopup && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-2 h-full"
            onClick={() => setIsHireMePopup(false)} // close on backdrop click
          />

          {/* Popup */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`h-svh sm:max-w-120 max-w-70 fixed left-0 right-0 top-2 flex flex-col gap-6 mx-auto text-gray-800 shadow-lg z-3 rounded-t-xl 
            ${darkMode ? "dark dark:bg-[#102D44] text-white" : "bg-white text-gray-800"}`}
          >
            <div className="flex text-left pt-8 pl-4 pr-4 items-center gap-4 justify-between ">
              <p
                className={`${
                  darkMode ? "text-white" : "text-gray-800"
                } font-medium sm:text-lg text-[16px]`}
              >
                What Project Are you Looking for?
              </p>
              <span>
                <button onClick={() => setIsHireMePopup(false)}>
                  <CloseIcon />
                </button>
              </span>
            </div>

                <form action="submit" ref={sendForm} onSubmit={handleSubmit} className="w-full">
            <div id="contact-inputs" className="flex flex-col gap-8 pt-4 px-4 items-start">
                
              <FloatingInputb label="Full name"  name="Fullname" type="text" darkMode={darkMode} required />

              
              <FloatingInputb label="Email Address" name="email" type="email" darkMode={darkMode} required />

              <select
                className={`w-full text-[14px] py-2 border border-gray-300 
                
                ${
                  darkMode
                    ? "text-white bg-[#102D44] focus:outline-none border border-t-0 border-x-0 rounded-none"
                    : "text-gray-800 focus:outline-none"
                } rounded-none border border-t-0 border-x-0 focus:border-b-indigo-500`}

                name="service"
                required
              >
                <option>Web Application</option>
                <option>Mobile Application</option>
                <option>UI/UX Design</option>
                <option>Other</option>
              </select>

              <textarea
                placeholder="Enter message"
                name="message"
                className={`bg-transparent border-b border-b-dark/30 h-24 text-sm placeholder:text-sm 
                  ${darkMode ? "focus:placeholder-white-500" : "focus:placeholder-indigo-500"} 
                  focus:border-b-lightblue focus:outline-none text-dark w-full`}
                darkMode={darkMode}
                required
              ></textarea>
              <span>
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
                 { !loading ? <span>Send Request</span> : ""} 
                </button>
              </span>
            </div>
            </form>


            <span>
              <button
                onClick={() => setIsHireMePopup(false)}
                className="absolute right-2 block font-sans text-bold shadow-sm cursor-pointer text-white py-3 px-4 rounded-md"
              >
                Close
              </button>
            </span>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    portalTarget
  );
}
