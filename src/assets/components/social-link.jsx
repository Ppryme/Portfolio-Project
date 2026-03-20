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
        url : "https://www.facebook.com/peter.famiyiwa"
     },

     {
         id : 3,
        icon : XIcon,
        url : "https://github.com/Ppryme/Portfolio-Project"
     },

     {
          id : 4,
        icon : LinkedInIcon,
        url : "https://www.linkedin.com/in/peter-famuyiwa-501aa3238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
     },

     {
         id : 5,
        icon : YouTubeIcon,
        url : "https://www.youtube.com/@peterfamuyiwa622"
     },
];

 export default function SocialLink () {
  return  (
       <>
        <div className={` mt-12  flex flex-wrap items-center justify-center w-full gap-6 `}>
        
          { Links.map ((link) =>  
          <a href={link.url} 
            key={link.id} 
            target='__blank'
            className={`  bg-gray-100 dark:bg-[#163B63]  text-gray-500  dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-200 hover:bg-gray-100 dark:hover:bg-[#244669] rounded-lg
              shadow-sm sm:p-4 p-2 md:p-6  none text-center mb-2 `} >
               
				   {<link.icon  />} 
			    
            </a> ) 
            }

           

            </div>

            <div className=' text-[18px] sm:text-xl sm:mt-12 mt-0 w-full mb-4 sm:text-nowrap text-wrap p-4 font-light  '>
            &copy; {new Date().getFullYear()}

            <a
					href="https://www.linkedin.com/in/peter-famuyiwa-501aa3238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
					target="__blank"
					className="  uppercase hover:underline   hover:text-indigo-600 ml-1 duration-500"
				>
					 Famuyiwa Peter
				</a>
            .


            <a href="https://github.com/Ppryme/Portfolio-Project"
					target="__blank"
					className=" hover:underline hover:text-indigo-600 sm:inline-block  block ml-1 duration-500"

            >
            React Portfolio

            </a>
           </div>

      </>
            

           

    )  


    
 }
 