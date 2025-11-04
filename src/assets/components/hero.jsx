import { motion } from "framer-motion";
import hero from  '../Images/developer.svg'
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
function Hero () {
return (
<section
  id="Hero"
  className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:mt-8 mt-12 items-center sm:w-full sm:h-full gap-6 sm:px-6 py-10 px-4"
>

  
 

  {/* Text Section */}

  <motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					 className="sm:flex-1 flex-[1.1] flex flex-col sm:items-start max-w-lg sm:text-left md:place-items-start space-y-8 items-center text-center justify-between "
				>
  < >
    <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl font-bold leading-snug ">
      Hi, I am Famuyiwa Peter
    </h1>

  

    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
      A Full-Stack Developer & Design Enthusiast
    </p>

    <a 
      href="/src/assets/public/CV.pdf"
      download="Famuyiwa_Peter_CV.pdf"
      className="bg-indigo-50 theme-light font-medium hover:text-white px-6 py-3 rounded-md hover:bg-indigo-600 duration-300 shadow-sm border border-gray-200"
    >
      <span  className="mr-1.5"><DownloadForOfflineOutlinedIcon/></span>
      Download CV
    </a>
  </>

  </motion.div>

 

  {/* Image Section */}
  <motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className=" sm:flex-[1.2] flex-1  justify-center"
			>
   <div id="hero-img" >
    <img
      src={hero}
      alt="Illustration"
      className=" w-full"
    />
  </div>

</motion.div>

</section>

 



)

}
export default Hero