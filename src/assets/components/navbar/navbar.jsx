import { useState } from "react"
import Sidebar from "./sidebar";
import HiremePopup from "./Hireme-popup";
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence} from "framer-motion";


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
       className= {` ${darkMode ? "bg-[#0D2438]/98" : "bg-white/80"}  backdrop-blur-xs  w-full flex sm:w-full  justify-between items-center py-3 px-4 gap-6 mb-6   
       lg:px-6 fixed right-0 left-0 top-0 shadow-sm z-1  `}
       id="navbar" 
  >

<>
    <div className={`${darkMode && "dark:text-white"}  flex-shrink-0 text-xl md:text-2xl lg:text-3xl  font-bold text-indigo-600 `}>
     PRYME TECH
    </div>

    <div className={`  hidden md:flex flex-1 md:flex-[0.5] min-w-0 gap-4 lg:gap-8 justify-center items-center  font-medium text-lg  `}>
      <Link to="/" className={`flex-shrink-0 hover:text-indigo-600 ${darkMode && "hover:text-white"} `}>Home</Link>
      <Link to="/project-page" className={`flex-shrink-0  hover:text-indigo-600 ${darkMode && "hover:text-white"}`}>Projects</Link>
      <Link to="/Aboutme"  className={`flex-shrink-0  hover:text-indigo-600 ${darkMode && "hover:text-white"}`}>About me</Link>
      <Link to="/contact-page"  className={`flex-shrink-0  hover:text-indigo-600 ${darkMode && "hover:text-white"}`} >Contact</Link>
    </div>
    
    <div className="flex flex-shrink-0   items-center    space-x-1.5">
      <button onClick={() => setIsHireMePopup(!hireMePopup)} className=" hidden md:block py-1.5 px-1.5  font-sans bg-indigo-500 font-bold 
      text-white md:py-3 md:px-4 rounded-md hover:bg-indigo-600 ">Hire Me</button>
     <button className= {`ml-2.5   text-gray-400 p-0.5 md:p-2 bg-gray-50 rounded ${ darkMode && "dark:bg-[#18314c] text-white" } `} 
     onClick={setDarkMode}>{darkMode ?  <LightModeIcon/> : <DarkModeIcon/>}
     </button> 

     {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen((opened)=> !opened)}
          className="md:hidden  focus:outline-none"
        >
         <MenuIcon size={28} />
        </button>
    </div>

    {/* Hire me Popup with Backdrop */}
  <HiremePopup setIsHireMePopup={setIsHireMePopup} hireMePopup={hireMePopup} darkMode = {darkMode}/>

     

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