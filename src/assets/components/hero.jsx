
import hero from  '../Images/Hero.jpg'

function Hero () {
return (
 <section id="Hero" className=" md:px-6  md:py-12 sm:px-3 sm:py-6 max-w-6xl mx-auto flex gap-2 flex-col sm:flex-row    md:flex-row items-center sm:w-full sm:h-full ">
     <div id="hero-text" className="flex-1 flex-col sm:text-left  md:place-items-start space-y-9 md:space-y-6 items-center text-center    ">
      
       <h1 className="text-gray-700  text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold md:text-left   leading-snug max-w-xl">
          Hi, I am Famuyiwa Peter
        </h1>

       <p className="text-base  sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-medium md:text-left leading-relaxed max-w-xl">
          A Full-Stack Developer & Design Enthusiast
        </p>

       <a 
        href="/cv.pdf" 
        download="Famuyiwa_Peter_CV.pdf" 
         className="bg-indigo-50 text-gray-500 font-medium   hover:text-white px-6 py-3 rounded-md hover:bg-indigo-600 shadow-sm border border-gray-200 ">
        Download CV
        </a>
     </div>

     <div id="hero-img" className="flex-1 justify-center ">
        <img src= {hero} alt="Illustration" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto  mt-4 md:mt-0 sm:py-0" />
     </div>
    </section>
 



)

}
export default Hero