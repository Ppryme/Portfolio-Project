import { FiClock, FiTag } from "react-icons/fi";

export default function ProjectSingleHeader({ singleProjectData }) {
  if (!singleProjectData || !singleProjectData.ProjectHeader) {
    return null; 
  }

  const { title, publishDate, tags } = singleProjectData.ProjectHeader;

  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <FiClock />
          <span>{publishDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <FiTag />
          <span>{tags}</span>
        </div>
      </div>
    </div>
  );
}