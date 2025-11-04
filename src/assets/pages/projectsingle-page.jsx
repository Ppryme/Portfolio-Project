// src/assets/pages/projectsingle-page.jsx
import { useParams } from "react-router-dom";
import { allProjectDetails } from "../script/SingleProjectData"; // adjust path if needed
import ProjectSingleHeader from "../components/Project/project-header";
import ProjectInfo from "../components/Project/Project-info";
import ProjectGallery from "../components/Project/project-gallery";
import ProjectRelatedProjects from "../components/Project/Related-projects";
import { motion } from "framer-motion";

export default function ProjectSingle({darkMode}) {
  const { slug } = useParams();
  // DEBUG: log the url id
  console.debug("URL id param:", slug);

  // find project — ensure id types align (string vs number)

  const singleProjectData =
  allProjectDetails.find((project) => project.slug?.toLowerCase() === slug?.toLowerCase()) ||
  allProjectDetails.find((project) => project.id.toString() === slug);


  // If not found, show not found message — avoids passing undefined to children
  if (!singleProjectData) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto mt-10 p-6">
         Project not found — slug: {slug}<br/>
        Available slugs: {allProjectDetails.map(p => p.slug).join(", ")}
      </motion.div>
    );
  }

  // Project found — pass *the project object* as prop
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto pt-28 p-6">
      <ProjectSingleHeader singleProjectData={singleProjectData} />
      <ProjectGallery singleProjectData={singleProjectData}/>
      <ProjectInfo singleProjectData={singleProjectData} darkMode = {darkMode} />
      <ProjectRelatedProjects singleProjectData={singleProjectData} />
    </motion.div>
  );
}
