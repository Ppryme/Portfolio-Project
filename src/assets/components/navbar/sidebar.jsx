import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { createPortal } from "react-dom";

export default function Sidebar ({open, setOpen,hireMePopup,setIsHireMePopup}) {

  const portalTarget = document.getElementById("sidebar")

    return createPortal (
         <div className = {`  dark:bg-[#102D44] dark:text-white  flex z-2  flex-col space-y-4 gap-5 pl-3 pt-12 items-start bg-white fixed h-full w-72 top-0 right-0 text-left shadow-xl
      ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-60`}>

       <div className="mr-2.5 absolute top-0 right-0 mt-4">
         <button onClick={() => setOpen(false)} ><CloseIcon/></button>
       </div>

        <p className="text-2xl font-bold  ">PRYME TECH</p>
      <nav className= "hover:none flex flex-col gap-5 space-y-4  text-lg font-medium ">
     
        <Link to="/" className={`dark:hover:text-white nav-link`}    href="">Home</Link>
        <Link to= "/project-page"  className={`dark:hover:text-white nav-link`}href="">Projects</Link>
        <Link to= "/Aboutme" className={`dark:hover:text-white nav-link`}href="">About me</Link>
        <Link to="contact-page" className={`dark:hover:text-white nav-link`}href="">Contact</Link>

      </nav>

      <div> <button onClick={()=> setIsHireMePopup (!hireMePopup)} 
        className=" py-3 px-4  font-sans bg-indigo-500 font-bold text-white  rounded-md hover:bg-indigo-600 ">
                      Hire Me</button>
      </div>


     </div>,
     portalTarget
    )
}