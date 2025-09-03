import './App.css'
import Navbar from './assets/components/navbar'
import Hero from './assets/components/hero'




function App() {
  return (  
   <div>
    <section id='navbar'>
    <Navbar></Navbar>
    </section>

    <section id = 'hero'>
     <Hero></Hero>
    </section>

   </div>
  )
}

export default App
