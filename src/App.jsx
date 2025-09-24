import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/navbar/navbar'
import Hero from './assets/components/hero'
import Project from './assets/components/project'
import Footer from './assets/components/footer'




function App() {
   const [open, setOpen] = useState(false);
   const [darkMode, setIsDarkMode] = useState(false);
  return ( 
 
   <div id="root" className= {`${darkMode ? "dark dark:bg-[#102D44] text-white " : "bg-white text-gray-800"} 
  } `} >
    <div  className={`mx-auto p-2 text-center max-w-fit`}>
    <section id='navbar'>
    <Navbar open={open} setOpen={setOpen} darkMode = {darkMode} setIsDarkMode={setIsDarkMode}></Navbar>
    </section>

    <section id = 'hero'>
     <Hero></Hero>
    </section>

     <section id = 'Project'>
     <Project darkMode= {darkMode}></Project>
    </section>

    <section id='Footer'>
      <Footer darkMode= {darkMode} setIsDarkMode={setIsDarkMode}></Footer>
    </section>  
    </div>

   </div>
  )
}

export default App
