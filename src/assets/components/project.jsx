import SearchIcon from '@mui/icons-material/Search';
import ProjectCard from './project-card';
import { Projectprops} from '../script/props';


function Project () {
  return  (
        <section id="project-section" className="max-w-6xl flex flex-col gap-6  border-b border-b-gray-200 ">
            <h2 className="text-gray-800 text-2xl sm:text-4xl text-center font-semibold mx-auto">Project Portfolio</h2>
            <p className="text-gray-700 font-normal sm:text-xl text-md">Search Project by Category</p>

            <div id="proj-search-inputs" className="w-full flex justify-between ">
                <div className='flex gap-2'> 
                    <span className='px-2 py-2 bg-gray-50 rounded-md shadow-xs text-gray-900'><SearchIcon/></span>  
                    <input type="text" placeholder='Search Projects' className=' pl-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500' />
            </div>

                <div> 
                    <select  className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500' > All Projects
                        <option>Web Application</option>
                        <option>Mobile Application</option>
                        <option>UI/UX Design</option>
                       
                        
                    </select>
              
                </div>
            </div>

            <div id='project-gallery' className=" p-2 border-t border-t-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-6 gap-7 sm:gap-10">
              {Projectprops.map( (projects, index) =>  <ProjectCard key= {index} {...projects}/> )} 

             
            </div>

             <div className=' mx-auto mt-8 mb-18 '>
                <button className="text-bold text-white text-xl bg-indigo-500 py-4 px-10 rounded-md hover:bg-indigo-600 ">More Projects</button>
            </div>

            

        </section>
    )
}


export default Project