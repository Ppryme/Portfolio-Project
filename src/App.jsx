import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTopButton from "./assets/components/shared/useScroll";
import { lazy, Suspense } from 'react';
import "./app.css";
import Navbar from "./assets/components/navbar/navbar";
import Project from "./assets/components/Project/project";
import Footer from "./assets/components/footer";
import ScrollToTop from "./assets/components/shared/ScrrolToTop";
import { SingleProjectProvider } from "./assets/components/contexts/SingleProject-context";
import ProjectSingle from "./assets/pages/projectsingle-page";
import ProjectGrid from "./assets/components/Project/Project-grid";


const Hero = lazy(() => import("./assets/components/hero"));
 const ProjectPage = lazy(() => import('./assets/pages/project-page'));
  const Aboutme = lazy(() => import('./assets/pages/Aboutme'));
  const Contact = lazy(() => import('./assets/components/contact'));



function App() {
  const [open, setOpen] = useState(false);

  
 const [darkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  // Save to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);


 
  return (
    <Router>
      <SingleProjectProvider>
      <ScrollToTop/>
      <motion.div
        initial={false}
        animate={{
          backgroundColor: darkMode ? "#0D2438" : "#ffffff",
          color: darkMode ? "#ffffff " : "#1f2937", // gray-800
          opacity: 1,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={`min-h-screen `}
        onClick={() => open && setOpen(false)}
       
      >
        <div id="app-container root" className="mx-auto p-0   text-center    max-w-6xl" >
          {/* Navbar always visible */}
          <Navbar 
            open={open}
            setOpen={setOpen}
            darkMode={darkMode}
            setIsDarkMode={setIsDarkMode}
             
          />

          <Suspense fallback={
             <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
     transition={{ duration: 2}}
      className="flex justify-center items-center h-40 text-indigo-600 text-xl font-semibold"
    >
      Loading...
    </motion.div>
          }>
          {/* Routes control what page content is shown */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  
                  <Project darkMode={darkMode} />
                </>
              }
            />
            <Route
              path="/project-page"
              element={<ProjectPage darkMode={darkMode} />}
            />
           <Route
              path="/contact-page"
              element = {<Contact darkMode={darkMode}/>}
           />

           <Route
              path="/Aboutme"
              element = {<Aboutme darkMode={darkMode}/>}
           />

           

           <Route
              path="/project/:slug"
              element = {<ProjectSingle darkMode={darkMode}/>}
           />

          </Routes>
          </Suspense>

          {/* Footer always visible */}
          <Footer darkMode={darkMode} setIsDarkMode={setIsDarkMode} />
          <ScrollToTopButton darkMode={darkMode}/>
        </div>
        
      </motion.div>
      </SingleProjectProvider>
    </Router>
  );
}

export default App;
