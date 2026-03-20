import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTopButton from "./assets/components/shared/useScroll";
import "./app.css";
import Navbar from "./assets/components/navbar/navbar";
import Project from "./assets/components/Project/project";
import Footer from "./assets/components/footer";
import ScrollToTop from "./assets/components/shared/ScrrolToTop";
import { SingleProjectProvider } from "./assets/components/contexts/SingleProject-context";
import ProjectSingle from "./assets/pages/projectsingle-page";


const Hero = lazy(() => import("./assets/components/hero"));
const ProjectPage = lazy(() => import("./assets/pages/project-page"));
const Aboutme = lazy(() => import("./assets/pages/Aboutme"));
const Contact = lazy(() => import("./assets/components/contact"));

function App() {
  const [open, setOpen] = useState(false);
  const [hireMePopup, setIsHireMePopup] = useState(false);


  return (
    <Router>
      <SingleProjectProvider>
        <ScrollToTop />
      

        <motion.div
          initial={false}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`min-h-screen  dark:bg-[#0d2438] 
          text-gray-800 dark:text-white transition-all duration-300
          `}

          onClick={() => { setOpen(false); }}

        >
          {hireMePopup && (
            <div
              className="fixed inset-0 backdrop-blur-md bg-black/30 z-30"
              onClick={() => setIsHireMePopup(false)}
            />
          )}
          
          <div className="mx-auto p-0 text-center max-w-6xl">
            
            {/* Navbar */}
            <Navbar open={open} setOpen={setOpen} hireMePopup={hireMePopup} setIsHireMePopup={setIsHireMePopup}  />

            <Suspense
              fallback={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  className="flex justify-center items-center h-40 text-indigo-600 text-xl font-semibold"
                >
                  Loading...
                </motion.div>
              }
            >
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <Project />
                    </>
                  }
                />

                <Route path="/project-page" element={<ProjectPage />} />
                <Route path="/contact-page" element={<Contact    />} />
                <Route path="/Aboutme" element={<Aboutme />} />
                <Route path="/project/:slug" element={<ProjectSingle />} />
              </Routes>
            </Suspense>

            <Footer />
            <ScrollToTopButton />
          </div>
        </motion.div>
        
      </SingleProjectProvider>
      
    </Router>
  );
}

export default App;