import './App.css'
import Navbar from './assets/components/navbar'
import Hero from './assets/components/hero'
import Project from './assets/components/project'




function App() {
  return (  
   <div>
    <section id='navbar'>
    <Navbar></Navbar>
    </section>

    <section id = 'hero'>
     <Hero></Hero>
    </section>

     <section id = 'Project'>
     <Project></Project>
    </section>

   </div>
  )
}

export default App
