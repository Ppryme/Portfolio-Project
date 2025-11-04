import { mySkills } from "../../script/skills-data"


export default function Skills ({darkMode}) {
    
  return  <section id="skills-section" className="max-w-6xl my-14">
        <div id="title" className="my-24 space-y-3">
        <h2 className="text-5xl font-bold  ">My Skills</h2>
        <p className="text-md text-xl font-medium">Technologies and Tools I Use For Implementation</p>
        </div>

        <div id="Skills-Container" className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-6 px-2 ">
             { mySkills.map((skill) => 
         <div key={skill.id} className={` ${darkMode ? "bg-[#1e3851]" : "bg-white border-gray-200 border-1 "}  flex flex-col text-center items-center shadow-lg p-4 space-y-2 hover:scale-110 transition-transform duration-300    `}>    
           <span> <img className=" h-10 w-10 mb-3" src={skill.techPhoto} alt={skill.desc} /> </span>
            <p className="font-medium text-xl">{skill.tech}</p>
            <p className="text-gray-500 font-medium">{skill.desc}</p>
        </div> 
    )  } 
        </div>
      
    </section>
}