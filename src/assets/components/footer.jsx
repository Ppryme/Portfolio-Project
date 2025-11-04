import SocialLink from "./social-link"
export default function Footer ({darkMode}) {
    return (
        <div className=" mt-14 max-w-6xl   flex flex-col items-center  ">
            <h3 className="text-3xl sm:text-4xl font-normal  ">Follow Me</h3>

           <SocialLink darkMode={darkMode}/>

        </div>  
    )
}
