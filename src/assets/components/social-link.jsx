import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';  // check if it's available in your version
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Links = [
     {
        id : 1,
        icon : GitHubIcon,
        url : "jghgghgh"
     },

     {

     },

     {

     },

     {

     },

     {

     },
];

 export default function SocialLink () {
    (
       Links.map((link) =>
        <div className="flex">
            <a href={Links.url} 
            key={Links.id} 
            className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark
             hover:bg-gray-100 shadow-sm p-4 duration-300">
                {Links.icon}
            </a>
           
            </div>
    )  
    )
 }