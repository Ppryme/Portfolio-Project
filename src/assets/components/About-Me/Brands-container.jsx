
import { clientsData } from "../../script/Brand-data"
import { clientsHeading } from "../../script/Brand-data"


export default function Brands() {
    return (
        <>
        <h1 className="text-3xl font-medium my-16">{clientsHeading}</h1>
        <section className=" gap-6 max-w-6xl mx-auto  grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2     ">
         
           { clientsData.map( (brands) =>  <div className="mx-auto flex-nowrap"> < img className="sm:w-54 w-44 shadow-sm rounded-sm bg-white " src= {brands.img} alt={brands.title} key={brands.id} /> </div>)} 
       
        </section>
        </>
    )
}