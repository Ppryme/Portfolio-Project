import { DarkMode } from "@mui/icons-material";
import { motion} from "framer-motion";
export default function ProjectCard ({title, category, image, link, darkMode}) {
    return (
    
    <a href={link}>
  
        <motion.div
          initial={{ opacity: 0 }}
           animate={{ opacity: 1, delay:1 }}
           exit={{ opacity: 0, y: -20 }} // 👈 animates when filtered out
          
        transition={{ duration: 0.9, ease: "easeInOut" }}
           id="project-gallery"
          className={` ${darkMode ? "bg-[#163B63]" : "bg-white"}  rounded-2xl shadow-lg hover:shadow-xl n flex flex-col h-full`}
          
      >
        <>
        <img src={image} alt="portfolio-img" className="w-full h-48 border-none object-cover rounded-t-2xl " />
        <div className="p-6 space-y-2 flex-1">
          <h3 className="text-xl font-semibold ">{title}</h3>
          <p className="text-l font-medium">{category}</p> 
        </div>
      </>
      </motion.div>
      
      
      
   
</a>
    )
}