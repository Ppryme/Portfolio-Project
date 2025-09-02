import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Navbar() {
const  [open, setOpen] = useState(false);
  
return (
<nav className= "w-full flex justify-between items-center sm:px-1 sm:py-1   lg:px-6 lg:py-4  color: bg-white ">
    <div className=" text-l md:text-2xl font-bold text-indigo-600">
     Famuyiwa Peter
    </div>

    <div className=" hidden md:flex flex-1  gap-8 justify-center items-center text-gray-900 font-medium text-lg ">
      <a href="">Home</a>
      <a href="">Projects</a>
      <a href="">About me</a>
      <a href="">Contact</a>
    
      
    </div>

    <div className="flex   items-center    space-x-1.5">
      <button className=" hidden md:block py-1.5 px-1.5  font-sans bg-indigo-500 font-bold text-white md:py-3 md:px-4 rounded-md hover:bg-indigo-600 ">Hire Me</button>
     <button className="ml-2.5   text-gray-400 p-0.5 md:p-2 bg-gray-100 rounded   "><LightModeIcon/></button> 
     {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
         <MenuIcon size={28} />
        </button>
    </div>



     

     {/* Sidebar */}
   
     <div className = {`flex flex-col space-y-4 gap-5 pl-3 pt-12 items-start  fixed h-full w-74 top-0 right-0 text-left shadow-xl  bg-white 
      ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>

       <div className="mr-2.5 absolute top-0 right-0 mt-4 text-gray-700">
         <button onClick={() => setOpen(false)} ><CloseIcon/></button>
       </div>

        <p className="text-2xl text-indigo-600 font-bold ">Famuyiwa Peter</p>
      <nav className= " flex flex-col gap-5 space-y-4  text-lg font-medium text-gray-700 ">
     
        <a className=" hover:border-b border-gray-300 hover:text-indigo-700" href="">Home</a>
        <a  className="hover:border-b border-gray-300 hover:text-indigo-700" href="">Projects</a>
        <a  className="hover:border-b border-gray-300 hover:text-indigo-700" href="">About me</a>
        <a  className="hover:border-b border-gray-300 hover:text-indigo-700" href="">Contact</a>
        
      </nav>

      <div> <button className=" py-1.5 px-1.5  font-sans bg-indigo-500 font-bold text-white md:py-3 md:px-4 rounded-md hover:bg-indigo-600 ">Hire Me</button></div>

      npm
     </div>



</nav> 

)

}

export default Navbar