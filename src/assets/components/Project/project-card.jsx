import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({ slug, title, category, image, link,  showExtraButton, Github }) {

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        id="project-gallery"
        className={`dark:bg-[#163B63] bg-white h-full w-full rounded-2xl shadow-lg hover:shadow-xl flex flex-col`}
      >
        <>
          <img src={image} alt="portfolio-img" className="w-full aspect-[4/3] object-fit border-none rounded-t-2xl" />
          <div className="px-4 py-4 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-l  text-gray-500 dark:text-white">{category}</p>
            </div>

            <span className="text-left mt-3 flex flex-row justify-between">
              <a
                href={link}
                 target="_blank"
                 rel="noopener noreferrer"
                className={`dark:bg-[#1e3851] bg-indigo-500 hover:bg-indigo-400 dark:hover:bg-[#294661] duration-300 focus:bg-purple-500 text-white font-medium cursor-pointer px-3 py-3 rounded-lg shadow-2xl`}
              >
                View Website
              </a>

              {showExtraButton && (
                <Link
                  to={`/project/${slug}`}
                  className={`dark:bg-[#1e3851] text-white font-medium bg-indigo-500 hover:bg-indigo-400 dark:hover:bg-[#294661] focus:bg-purple-500 duration-400 px-3 py-3 rounded-lg shadow-2xl`}
                >
                  Client Details
                </Link>
              )}

              {Github && (
                <a
                  href={`https://github.com/Ppryme/Portfolio-Project`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`dark:bg-[#1e3851] text-white font-medium bg-indigo-500 hover:bg-indigo-400 dark:hover:bg-[#294661] focus:bg-purple-500 duration-400 px-3 py-3 rounded-lg shadow-2xl`}
                >
                  View Github
                </a>
              )}
            </span>
          </div>
        </>
      </motion.div>
    </div>
  );
}
