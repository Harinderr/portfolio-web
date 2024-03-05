import Image from "next/image"
import frontend from "@/../../public/frontend.png"
import backend from "@/../../public/backend.png"
export default function Services() {
    return (
        <div id="service" className=" service_container py-10 flex flex-col">
            <h1 className="service_text text-center">Services</h1>
            <div className="frontend_container grid grid-cols-2 my-6 h-80">
            <div className="frontend_img mx-auto">
               <Image src={frontend} width={500} height={500}></Image>
            </div>
            <div className="frontend_des p-10 text-center flex items-center">
              <p>I let people build frontend of website with the help of technologies like HTML, CSS, Javascript, React, NextJs, Taiwind, Bootstrap and many other external librairies. 
              </p>
            </div>
            </div>
            <div className="Backend_container grid grid-cols-2" >
            <div className="backend_des p-10 text-center flex items-center">
                <p>I also let people build backend of the website with the help of technologies like Nodejs, express, MongoDB, MySql, RESTapi, nextjs etc.</p>
            </div>
            <div className="backend_img mx-auto">
                <Image src={backend} width={500} height={500}></Image>
            </div>
            </div>
        </div>
    )
}