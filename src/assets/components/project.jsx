import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import ProjectCard from './project-card';
import { Projectprops} from '../script/props';
import { AnimatePresence } from "framer-motion";
import { DarkMode } from "@mui/icons-material";


function Project ({darkMode}) {
    const [selectedCategory, setSelectedCategory] = useState("All Projects");
    const [searchQuery, setSearchQuery] = useState(""); 
  return  (
        <section id="project-section" className="mt-20  max-w-6xl flex flex-col gap-6  border-b border-b-gray-200  ">
            <h2 className=" text-2xl sm:text-4xl text-center font-semibold mx-auto">Project Portfolio</h2>
            <p className=" font-md sm:text-xl text-md">Search Project by Title or Filter  by  Category</p>

            <div id="proj-search-inputs" className="w-full gap-4 p-2 sm:gap-0 flex  flex-row justify-center  sm:justify-between items-center ">
                <div className='flex gap-2'> 
                    <span className=' px-2 py-2 flex-1 sm:block hidden bg-gray-50 rounded-md shadow-xs text-gray-900'><SearchIcon/></span>  
                     <input type="text" placeholder='Search Projects' 
                     className =  {`${darkMode && "placeholder-white"} placeholder-gray-800 p-2 w-full border max-w-40 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 `}
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     />
            </div>

                <div> 
                    <select 
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                         className=' flex-1 w-full p-2 green  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500' > All Projects
                            <option>All Projects</option>
                            <option>Web Application</option>
                            <option>Mobile Application</option>
                        <   option>UI/UX Design</option>
                       
                        
                    </select>
              
                </div>
            </div>


<div
  id="project-gallery"
  className="p-2 border-t border-t-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-8  sm:gap-10">

{/* Fileter byy search or category */}
{Projectprops
          .filter((project) => {
            // Category filter
            const matchesCategory =
              selectedCategory === "All Projects" ||
              project.category === selectedCategory;

            // Search filter
            const matchesSearch = project.title
              .toLowerCase()
              .includes(searchQuery.toLowerCase());

            return matchesCategory && matchesSearch;
          })
          .map((project, index) => (
            <ProjectCard darkMode={darkMode}
              key={`${project.category}-${index}`}
              {...project}
            />
          ))}
</div>

<span className="mx-auto mb-16 mt-4"><button className="btn text-xl font-medium mt-6">More Project</button></span>


            

 </section>
    )
}


export default Project