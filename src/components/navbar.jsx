'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
export default function Navbar() {
  const [clicked, setClicked] = useState(false)
  function menuClick() {
   clicked ? setClicked(false) : setClicked(true)
  }
  useEffect (() => {

  },[clicked])
    return (
       <div className="Landingpage">
           <div className="nav_container">
           
            <div className="nav_head"> Web<span>Dev</span></div>
            <nav className={`navbar`}>
                <Link className="nav_links"  href={"#"}  >Home</Link>
                <Link className="nav_links" href={"#about"}  >About</Link>
                <Link className="nav_links" href={"#service"}  >Services</Link>
                <Link className="nav_links" href={"#projects"}  >Projects</Link>
                <Link className="nav_links" href={"#contact"}>  Contact</Link>
            </nav>
           
            <button class='hamburger'onClick={menuClick}>&#9776;</button>
            
            </div>
          { clicked && (<nav id="nav_box" className={`navbar h-16 flex flex-row justify-around `}>
                <Link className="nav_links"  href={"#"}  >Home</Link>
                <Link className="nav_links" href={"#about"}  >About</Link>
                <Link className="nav_links" href={"#service"}  >Services</Link>
                <Link className="nav_links" href={"#projects"}  >Projects</Link>
                <Link className="nav_links" href={"#contact"}>  Contact</Link>
            </nav>)}
  
              {/* eslint-disable-next-line react/no-unescaped-entities  */}
            <h1 className="h-full mt-20 text-white">LET'S <span>BUILD</span> TOGETHER</h1>
            
      </div>
     
    )
}