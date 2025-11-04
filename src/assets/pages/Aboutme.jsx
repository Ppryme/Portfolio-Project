import AboutMeBio from "../components/About-Me/aboutme-bio"
import AboutCounter from "../components/About-Me/AboutmeCounter"
import Brands from "../components/About-Me/Brands-container"
import Skills from "../components/About-Me/Skills"
import { motion } from "framer-motion"
export default function Aboutme ({darkMode}) {
    return (
        <motion.section 
            className="max-w-6xl py-28 "
            initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
            >
            <AboutMeBio/>

            <Skills darkMode = {darkMode}/>

            <AboutCounter darkMode={darkMode}/>

            <Brands/>


        </motion.section>
        
    )
}