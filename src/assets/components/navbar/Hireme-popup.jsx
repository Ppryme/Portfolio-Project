import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import FloatingInputb from "../FloatingInputb";
import { createPortal } from "react-dom";
import {SendMail} from '../../script/Hireme-contact.mjs'
import { useRef } from "react";
import Popup from "../popup";


export default function HiremePopup({ hireMePopup, setIsHireMePopup }) {
  const sendForm = useRef()

    const [popup, setPopup] = useState({
    show: false,
    message: "",
    type: "" // success or error
  });

  const [loading, setLoading] = useState(false)
  
     const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      try {
        await SendMail(e); // execute your SendMail function
        setLoading(false);

        setPopup({
          show: true,
          message: "Message sent successfully ✅",
          type: "success"
    });
        e.target.reset();
      } catch (error) {
        console.error("Error sending message:", error);
        setLoading(false);

        setPopup({
        show: true,
        message: "Failed to send message ❌",
        type: "error"
      });
      }
    };
  const portalTarget = document.getElementById("pop-up");

  // Avoid rendering if portal root isn't ready
  if (!portalTarget) return null;

  return createPortal(
    <AnimatePresence>
      {hireMePopup && (
        <>
        

          {/* Popup */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
           className="fixed bottom-0 left-0 right-0 
                      mx-auto w-full sm:max-w-md
                      max-h-[100vh] overflow-y-auto
                      rounded-t-2xl shadow-lg
                      bg-white dark:bg-[#102D44]
                      text-gray-800 dark:text-white
                      flex flex-col gap-6 z-50 pb-4"
          >
            <div className="flex text-left pt-8 pl-4 pr-4 items-center gap-4 justify-between ">

              {popup.show && <div className="absolute  z-50"><Popup popup={popup} setPopup={setPopup}/></div>}
              <p
                className={`dark:text-white text-gray-800
                 font-medium sm:text-lg text-[16px]`}
              >
                What Project Are you Looking for?
              </p>
              <span>
                <button onClick={() => {setIsHireMePopup(false); setPopup({ ...popup, show: false })}} className="text-gray-800 dark:text-white">
                  <CloseIcon />
                </button>
              </span>
            </div>

                <form action="submit" ref={sendForm} onSubmit={handleSubmit} className="w-full">
            <div id="contact-inputs" className="flex flex-col gap-12 pt-4 px-4 items-start">
                
              <FloatingInputb label="Full name"  name="Fullname" type="text" required />

              
              <FloatingInputb label="Email Address" name="email" type="email" required />

              <select
                className={`w-full text-[14px] py-2 border border-gray-300 
                
                
                    dark:text-white dark:bg-[#102D44] dark:focus:outline-none dark:border dark:border-t-0 dark:border-x-0 dark:rounded-none
                    text-gray-800 focus:outline-none
                 rounded-none  border-t-0 border-x-0 focus:border-b-indigo-500`}

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
                  dark:focus:placeholder-white-500  focus:placeholder-indigo-500 
                  focus:border-b-lightblue focus:outline-none text-dark w-full`}
               
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


              
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    portalTarget
  );
}
