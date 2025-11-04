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
                label="Full name"
                name="Fullname"
                type="text"
                />
                
                
              
              <FloatingInputb
                label="Email Address"
                name="email"
                type="email"
                 />
               
                
             
           
            <FloatingInputb
              label="Phone no"
              name="Phonenumber"
              type="number"
              
              
             
              
            />
            <textarea
              placeholder="Enter message"
              name="message"
              className="bg-transparent border-b border-b-dark/30 h-24 text-sm placeholder:text-sm  focus:border-b-lightblue focus:outline-none text-dark"
             
             
              
            ></textarea>
             
          </form>
  </div>

  <div id="contact-details">

  </div>
</section>
    )
}