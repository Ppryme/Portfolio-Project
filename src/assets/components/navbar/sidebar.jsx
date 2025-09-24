
import CloseIcon from '@mui/icons-material/Close';

export default function Sidebar ({open, setOpen,hireMePopup,setIsHireMePopup,darkMode}) {

    return (
         <div className = {` ${darkMode ? "bg-[#102D44] text-white": "bg-white text-gray-800"} flex flex-col space-y-4 gap-5 pl-3 pt-12 items-start  fixed h-full w-72 top-0 right-0 text-left shadow-xl 
      ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out `}>

       <div className="mr-2.5 absolute top-0 right-0 mt-4">
         <button onClick={() => setOpen(false)} ><CloseIcon/></button>
       </div>

        <p className="text-2xl font-bold  ">Famuyiwa Peter</p>
      <nav className= " flex flex-col gap-5 space-y-4  text-lg font-medium ">
     
        <a className=" hover:border-b border-gray-300 hover:text-indigo-700" href="">Home</a>
        <a  className="hover:border-b border-gray-300 hover:text-indigo-700" href="">Projects</a>
        <a  className="hover:border-b border-gray-300 hover:text-indigo-700" href="">About me</a>
        <a  className="hover:border-b border-gray-300 hover:text-indigo-700" href="">Contact</a>
        
      </nav>

      <div> <button onClick={()=> setIsHireMePopup (!hireMePopup)} 
                      className=" py-3 px-4  font-sans bg-indigo-500 font-bold text-white  rounded-md hover:bg-indigo-600 ">
                      Hire Me</button>
      </div>


     </div>
    )
}