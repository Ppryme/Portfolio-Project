import FloatingInputb from "./FloatingInputb"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
export default function Contact ({darkMode}){
    return (
        
<section 
  id="contact-container" 
  className=" min-h-screen mx-auto pt-25 px-4 flex flex-col-reverse xl:flex-row gap-28"
>
  <div 
    id="contact-form" 
    className={`${darkMode ? "bg-[#102D44] text-white" : "bg-white text-gray-800"} p-6 rounded-lg shadow-2xl max-w-[32rem]  max-h-fit flex-1 py-12 `}
  >
    <h3 className="text-2xl font-bold mb-4">Contact Form</h3>

    <form className="flex flex-col gap-14" >
            
              <input hidden name="ContactForm" type="text"  />
              <FloatingInputb
                label="Full name"
                name="Fullname"
                type="text"
                 darkMode= {darkMode}
                />
                
                
              
              <FloatingInputb
                label="Email Address"
                name="email"
                type="email"
                 darkMode= {darkMode}
                 />
               
                
             
           
            <FloatingInputb
              label="Phone no"
              name="Phonenumber"
              type="number"
               darkMode= {darkMode}
              />
            <textarea
              placeholder="Enter message"
              name="message"
              className={`bg-transparent border-b border-b-dark/30 h-24 text-sm placeholder:text-sm ${darkMode ? "focus:placeholder-white-500": "focus:placeholder-indigo-500"} 
              focus:border-b-lightblue focus:outline-none text-dark`}
               darkMode= {darkMode}
             
             
              
            ></textarea>

             <span className="text-left"> <button className="text-lg bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-300 font-bold text-white py-3 px-4 rounded-lg">Send Message</button></span>
             
          </form>
        
  </div>

  <div id="contact-details " className="flex flex-col text-left gap-6">
      <h3 className="sm:text-3xl text-2xl mb-6 mt-6">Contact Me</h3>
      <span className="space-x-3 cursor-pointer sm:text-xl text-[16px]  flex"><LocationOnOutlinedIcon/><p>Ifako-Ijaiye, Ijaiye/Ojokoro 101232, Lagos</p></span>
      <span className="space-x-3 cursor-pointer sm:text-xl text-[16px]"> <EmailOutlinedIcon/>  <span>famuyiwapeter2004@gmail.com</span></span>
      <span className="space-x-3 cursor-pointer sm:text-xl text-[16px]"> <LocalPhoneOutlinedIcon/> <span>08146498950</span></span>
  </div>
</section>
        
    )
}