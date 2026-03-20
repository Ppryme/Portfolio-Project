import ProjectCard from './project-card';
import { Projectprops} from '../../script/props';

export default function ProjectGrid ({selectedCategory, searchQuery,darkMode}) {
    return (
<div
  id="project-gallery"
  className="p-2 border-t  border-t-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-8  items-stretch sm:gap-10">

{/* Fileter byy search or category */}



{Projectprops
          .filter((project) => {
            // Category filter
            const matchesCategory =
              selectedCategory === "All Projects" ||
              project.category === selectedCategory;

            // Search filter
            const matchesSearch = project.title 
              .toLowerCase()
              .includes(searchQuery.toLowerCase());

            return matchesCategory && matchesSearch;
          })
          .map((project, index) => (
            <ProjectCard id={project.id}   slug={project.slug}
              key={`${project.category}-${index}`}
              {...project}
              showExtraButton = {project.extra}
              Github = {project.Github}
            />
          ))}
</div>
    )
}