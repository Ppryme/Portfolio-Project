import Pic from '../../Images/brands/Aboutmepic.jpg'

export default function AboutMeBio () {
    return(
        <div id="about-me-bio" className=" flex sm:flex-row flex-col sm:gap-12 gap-6 space-y-4  ">
            <div className="w-full sm:w-1/4 mb-7 sm:mb-0 sm:px-0 px-2  ">
                <img className='rounded-lg ' src= {Pic} alt="aboutmebio" />
            </div>

            <div className="flex-1 w-full sm:text-justify  text-center px-4 space-y-3 mx-auto ">
                <p className=' '>Hi, my name is Famuyiwa Peter — I’m a Full Stack Developer and design enthusiast who loves bringing ideas to life 
                    through code and creativity. I enjoy working on both the front-end and back-end, turning concepts into functional, visually 
                    appealing digital experiences. I’m passionate about creating clean, efficient, and user-focused applications that not only work 
                    seamlessly but also look and feel great.
                    
                    
                    </p>

                    <p className=''>
                       My love for design drives how I approach development — I pay close attention to detail and always aim for interfaces that are 
                       intuitive and engaging. I’m constantly exploring new technologies, frameworks, and design trends to stay ahead and improve my 
                       craft. Whether I’m building scalable web apps or refining a layout, I take pride in blending creativity with technical precision 
                       to deliver work that truly stands out.
                    </p>
            </div>
        </div>
    )
}