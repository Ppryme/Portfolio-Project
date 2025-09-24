import { useState } from "react"
import Sidebar from "./sidebar";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { motion, AnimatePresence, setDragLock } from "framer-motion";

function Navbar({open, setOpen, darkMode, setIsDarkMode}) {
const  [hireMePopup, setIsHireMePopup] = useState(false)

function setDarkMode (){
  return setIsDarkMode((darkMode) =>!darkMode);
}
  
return (
  <motion.nav
   initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
       className= {` w-full flex sm:w-full  justify-between items-center py-6 px-4 gap-6   lg:px-6  `} 
  >

<>
    <div className=" flex-shrink-0 text-l md:text-xl lg:text-2xl font-bold text-indigo-600">
     PRYME TECH
    </div>

    <div className=" hidden md:flex flex-1 md:flex-[0.5] min-w-0  gap-4 lg:gap-8 justify-center items-center  font-medium text-lg ">
      <a href=""  className="flex-shrink-0  hover:text-indigo-600 ">Home</a>
      <a href="" className="flex-shrink-0  hover:text-indigo-600">Projects</a>
      <a href=""  className="flex-shrink-0  hover:text-indigo-600">About me</a>
      <a href=""  className="flex-shrink-0  hover:text-indigo-600">Contact</a>
    
      
    </div>
    
    <div className="flex flex-shrink-0   items-center    space-x-1.5">
      <button onClick={() => setIsHireMePopup(!hireMePopup)} className=" hidden md:block py-1.5 px-1.5  font-sans bg-indigo-500 font-bold text-white md:py-3 md:px-4 rounded-md hover:bg-indigo-600 ">Hire Me</button>
     <button className= {`ml-2.5   text-gray-400 p-0.5 md:p-2 bg-gray-50 rounded ${ darkMode && "dark:bg-[#0a2e54] text-white" } `} 
     onClick={setDarkMode}>{darkMode ? <LightModeIcon/> : <DarkModeIcon/>}
     </button> 

     {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen((opened)=> !opened)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
         <MenuIcon size={28} />
        </button>
    </div>

     {/* Hire me Popup with Backdrop */}
<AnimatePresence>
  {hireMePopup && (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black z-40"
        onClick={() => setIsHireMePopup(false)} // close on backdrop click
      />

      {/* Popup */}
<motion.div
  initial={{ y: "100%" }}              // start hidden at bottom
  animate={{ y: 0 }}                   // slide up to visible
  exit={{ y: "100%" }}                 // slide back down when closed
  transition={{ duration: 0.4, ease: "easeInOut" }}
  className="h-full sm:w-100 w-70 fixed left-0 right-0  bottom-0 mx-auto bg-white shadow-lg z-50 rounded-t-xl"
>
  <div className="flex text-left pt-8 pl-4 pr-4 items-center gap-4 justify-between">
    <p className="text-gray-800 font-medium sm:text-lg text-[16px]">
      What Project Are you Looking for?
    </p>
    <span>
      <button onClick={() => setIsHireMePopup(false)}>
        <CloseIcon />
      </button>
    </span>
  </div>

  <div id="contact-inputs" className="flex flex-col gap-8 pt-4 px-4 items-start">
    <input
      type="text"
      placeholder="Name"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
    <input
      type="email"
      placeholder="Email"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
    <select className="w-full text-gray-800 font-bold px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
      <option>Web Application</option>
      <option>Mobile Application</option>
      <option>UI/UX Design</option>
      <option>Other</option>
    </select>
    <textarea
      placeholder="Project description"
      rows="4"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
    ></textarea>
    <span className="">
      <button className="text-bold  text-white bg-indigo-500 py-3 px-4 rounded-md hover:bg-indigo-600">
        Send Request
      </button>
    </span>
  </div>

  <span className="absolute bottom-6 right-4">
    <button
      onClick={() => setIsHireMePopup(false)}
      className="  block text-bold font-sans text-white bg-gray-800 py-3 px-4 rounded-md hover:bg-gray-600"
    >
      Close
    </button>
  </span>
</motion.div>

    </>
    
  )}
</AnimatePresence>


     

     {/* Sidebar */}
   
    { <Sidebar open={open} setOpen={setOpen} hireMePopup= {hireMePopup} 
    setIsHireMePopup= {setIsHireMePopup} darkMode= {darkMode}
    setIsDarkMode = {setIsDarkMode}
  
    />}



</>
</motion.nav>

)

}

export default Navbar