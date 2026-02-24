import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({ slug, title, category, image, link, darkMode, showExtraButton }) {

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        id="project-gallery"
        className={`${darkMode ? "bg-[#163B63]" : "bg-white"} h-full w-full rounded-2xl shadow-lg hover:shadow-xl flex flex-col`}
      >
        <>
          <img src={image} alt="portfolio-img" className="w-full aspect-[4/3] object-fit border-none rounded-t-2xl" />
          <div className="px-4 py-4 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-l font-medium text-gray-500">{category}</p>
            </div>

            <span className="text-left mt-3 flex flex-row justify-between">
              <a
                href={link}
                 target="_blank"
                 rel="noopener noreferrer"
                className={`${darkMode ? "bg-[#1e3851] text-white font-medium" : "bg-indigo-500 hover:bg-indigo-400 duration-300 focus:bg-purple-500 text-white font-medium"} cursor-pointer px-3 py-3 rounded-lg shadow-2xl`}
              >
                View Website
              </a>

              {showExtraButton && (
                <Link
                  to={`/project/${slug}`}
                  className={`${darkMode ? "bg-[#1e3851] text-white font-medium" : "bg-indigo-500 hover:bg-indigo-400 focus:bg-purple-500 duration-400 text-white font-medium"} px-3 py-3 rounded-lg shadow-2xl`}
                >
                  Client Details
                </Link>
              )}
            </span>
          </div>
        </>
      </motion.div>
    </div>
  );
}
