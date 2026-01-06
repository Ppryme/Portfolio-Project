
import FloatingInputb from "../components/FloatingInputb"
export default function ContactPage () {
    return(
<section 
  id="contact-container" 
  className=" min-h-screen mx-auto mt-8 px-4"
>
  <div 
    id="contact-form" 
    className={`${darkMode ? "bg-[#0a2e54] text-white" : "bg-white text-gray-800"} p-6 rounded-lg shadow-md max-w-[34rem] min-h-svh`}
  >
    <h3 className="text-xl font-bold mb-4">Contact Form</h3>

    <form className="flex flex-col gap-12" >
            
              <input hidden name="ContactForm" type="text"  />
              <FloatingInputb
                label="name"
                name="Fullname"
                type="text"
                id = "name"
                />
                
                
              
              <FloatingInputb
                label="Email Address"
                name="email"
                type="email"
                id = "email"
                 />
               
                
             
           
            <FloatingInputb
              label="Phone no"
              name="Phonenumber"
              type="number"
               id = "phone no"
              
              
             
              
            />
            <textarea
              placeholder="Enter message"
              name="message"
              className="bg-transparent border-b border-b-dark/30 h-24 text-sm placeholder:text-sm  focus:border-b-lightblue focus:outline-none text-dark"
              label = "subject"
             
             
              
            ></textarea>
             
          </form>
  </div>

  <div id="contact-details">

  </div>
</section>
    )
}