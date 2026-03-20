import Pic from '../../Images/brands/Aboutmepic.jpg'

export default function AboutMeBio () {
    return(
        <div id="about-me-bio" className=" flex sm:flex-row flex-col sm:gap-12 gap-6 space-y-4  ">
            <div className="w-full sm:w-1/4 mb-7 sm:mb-0 sm:px-0 px-2  ">
                <img className='rounded-lg ' src= {Pic} alt="aboutmebio" />
            </div>

            <div className="flex-1 w-full sm:text-justify  text-left px-4 space-y-3 mx-auto ">
                <p className=' '>Hi, I am Famuyiwa Peter. I am a Full Stack Developer and design lover who is passionate about bringing ideas to 
                    life through code and creativity. I enjoy working on the front-end and back-end, where I get to turn ideas into functional and 
                    beautiful digital experiences. I am passionate about building clean, efficient, 
                    and user-centric applications that not only work flawlessly but also look and feel amazing.
                    </p>

                    <p className=''>
                      My passion for design influences my development process, as I focus on details and strive to create interfaces that are intuitive and engaging. 
                      I am always on the lookout for new technologies and design trends that help me stay at the forefront and enhance my skills. Whether I am working on 
                      web applications or a design layout, I am passionate about blending creativity with technical expertise to create work that is outstanding.
                    </p>
            </div>
        </div>
    )
}