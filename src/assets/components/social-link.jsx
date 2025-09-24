import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Links = [
     {
        id : 1,
        icon : GitHubIcon,
        url : "https://github.com/Ppryme/Portfolio-Project"
     },
        
     {
         id : 2,
        icon : FacebookIcon,
        url : "https://github.com/Ppryme/Portfolio-Project"
     },

     {
         id : 3,
        icon : XIcon,
        url : "https://github.com/Ppryme/Portfolio-Project"
     },

     {
          id : 4,
        icon : LinkedInIcon,
        url : "https://github.com/Ppryme/Portfolio-Project"
     },

     {
         id : 5,
        icon : YouTubeIcon,
        url : "https://github.com/Ppryme/Portfolio-Project"
     },
];

 export default function SocialLink ({darkMode}) {
  return  (
       <>
        <div className=" mt-12  flex flex-wrap items-center justify-center w-full gap-6 ">
        
          { Links.map ((link) =>  
          <a href={link.url} 
            key={link.id} 
            target='__blank'
            className={`bg-gray-50 text-gray-600   rounded-lg
             hover:bg-gray-100 shadow-sm   sm:p-4 p-2 md:p-6  none text-center ${darkMode && " dark dark:bg-[#163B63]  dark:text-gray-400 hover:text-indigo-500 "}`} >
               
				   {<link.icon  />} 
			    
            </a> ) 
            }

           

            </div>

            <div className=' text-[18px] sm:text-xl mt-16 w-full'>
            &copy; {new Date().getFullYear()}

            <a
					href="https://stoman.me"
					target="__blank"
					className="  uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					 Famuyiwa Peter
				</a>
            .


            <a href="https://stoman.me"
					target="__blank"
					className=" hover:underline hover:text-indigo-600  ml-1 duration-500"

            >
            React Portfolio

            </a>
           </div>

      </>
            

           

    )  


    
 }
 