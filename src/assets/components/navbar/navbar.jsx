import { useState } from "react";
import Sidebar from "./sidebar";
import HiremePopup from "./Hireme-popup";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/theme-context";

function Navbar({ open, setOpen, hireMePopup, setIsHireMePopup, popup, setPopup }) {

  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white/80 dark:bg-[#0D2438]/98 backdrop-blur-xs w-full flex justify-between items-center py-3 px-4 gap-6 mb-6 lg:px-6 fixed right-0 left-0 top-0 shadow-sm z-10"
    >
      {/* Logo */}
      <div className="flex-shrink-0 text-xl md:text-2xl lg:text-3xl font-bold text-indigo-600 dark:text-white">
        PRYME TECH
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex flex-1 md:flex-[0.5] min-w-0 gap-4 md:gap-8 text-nowrap justify-center items-center font-medium text-lg">
        <Link to="/" className="hover:text-indigo-600 dark:hover:text-white">
          Home
        </Link>
        <Link to="/project-page" className="hover:text-indigo-600 dark:hover:text-white">
          Projects
        </Link>
        <Link to="/Aboutme" className="hover:text-indigo-600 dark:hover:text-white">
          About me
        </Link>
        <Link to="/contact-page" className="hover:text-indigo-600 dark:hover:text-white">
          Contact
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-2">
        <button
          onClick={(e) => { e.stopPropagation(); setIsHireMePopup((prev) => !prev) }}
          className="hidden md:block py-2 px-4 bg-indigo-500 font-bold text-white rounded-md hover:bg-indigo-600"
        >
          Hire Me
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded bg-gray-100 dark:bg-[#18314c]"
        >
          {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={(e) => { e.stopPropagation(); setOpen((prev) => !prev) }}
          className="md:hidden"
        >
          <MenuIcon />
        </button>
      </div>

      {/* Hire Me Popup */}
      
        <HiremePopup
          hireMePopup={hireMePopup}
          setIsHireMePopup={setIsHireMePopup}
          popup={popup}
          setPopup={setPopup}
        />
     
      

      {/* Sidebar */}
      <Sidebar
        open={open}
        setOpen={setOpen}
        hireMePopup={hireMePopup}
        setIsHireMePopup={setIsHireMePopup}
      />
    </motion.nav>
  );
}

export default Navbar;