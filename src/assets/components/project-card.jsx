export default function ProjectCard ({title, category, image, link}) {
    return (
    <a href={link}>
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl flex flex-col h-full">
  <img src={image} alt="portfolio-img" className="w-full h-48 object-cover rounded-t-2xl " />
  <div className="p-6 space-y-2 flex-1">
    <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
    <p className="text-l text-gray-600">{category}</p>
  </div>
</div>
</a>
    )
}