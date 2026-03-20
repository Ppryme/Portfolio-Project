import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import ProjectGrid from "./Project-grid";
import { Link } from "react-router-dom";
import { motion, AnimatePresence} from "framer-motion";



function Project () {
    const [selectedCategory, setSelectedCategory] = useState("All Projects");
    const [searchQuery, setSearchQuery] = useState(""); 
  return  (
        <motion.section 
        id="projects" 
        className="pt-35  max-w-6xl flex flex-col gap-6  border-b border-b-gray-200   "
        
        	initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}

        >


            <h2 className=" text-2xl sm:text-4xl text-center font-semibold mx-auto">Project Portfolio</h2>
            <p className=" font-md sm:text-xl text-md">Search Project by Title or Filter  by  Category</p>

            <div id="proj-search-inputs" className="w-full gap-4 p-2 sm:gap-0 flex  flex-row justify-center  sm:justify-between items-center ">
                <div className='flex gap-2'> 
                    <span className=' px-2 py-2 flex-1 sm:block hidden bg-gray-50 rounded-md shadow-xs text-gray-900'><SearchIcon/></span>  
                     <input type="text" placeholder='Search Projects' 
                     className =  {`dark:placeholder-white placeholder-gray-800 p-2 w-full border max-w-40 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 `}
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     />
            </div>

                <div> 
                    <select 
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                         className={`dark:bg-[#102D44] dark:border dark:border-gray-200   flex-1 w-full p-2 green  border  border-gray-200  rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ` } > All Projects
                            <option >All Projects</option>
                            <option>Web Application</option>
                            <option>Mobile Application</option>
                        <   option>UI/UX Design</option>
                       
                        
                    </select>
              
                </div>
            </div>

            <ProjectGrid selectedCategory= {selectedCategory} setSelectedCategory= {setSelectedCategory} 
            searchQuery= {searchQuery} setSearchQuery = {setSearchQuery}  />

            <span className="mx-auto mb-16 mt-4"><Link to= "/project-page" className="btn text-xl font-medium mt-6">More Project</Link></span>

 </motion.section>
    )
}


export default Project