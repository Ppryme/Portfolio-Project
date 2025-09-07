export default function ProjectCard ({title, category, image}) {
    return (
        <div className=" bg-white rounded-2xl shadow-md  ">
            <img  src={image} alt="portfolio-img" className="w-full h-54  object-cover" />
        <div className="p-4 space-y-2">
             <h3 className="text-lg font-semibold text-gray-700 ">{title}</h3>
            <p className="text-md text-gray-600">{category}</p>
        </div>
           
        </div>
    )
}