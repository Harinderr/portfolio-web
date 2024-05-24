'use client'
import Link from "next/link"
import styles from './navbar.module.css'
import { useEffect, useState } from "react"
export default function Navbar() {
  const [clicked, setClicked] = useState(false)
  function menuClick() {
   clicked ? setClicked(false) : setClicked(true)
  }
  useEffect (() => {

  },[clicked])
    return (
       <div className={styles.Landingpage}>
           <div className= {`${styles.nav_container} bg-slate-900`}>
           
            <div className={styles.nav_head}> Web<span className="text-blue-600">Dev</span></div>
            <nav className={styles.navbar}>
                <Link className="nav_links"  href={"#"}  >Home</Link>
                <Link className="nav_links" href={"#about"}  >About</Link>
                <Link className="nav_links" href={"#service"}  >Services</Link>
                <Link className="nav_links" href={"#projects"}  >Projects</Link>
                <Link id='contact_nav' className={`${styles.contact_nav} nav_links rounded-full`}href={"#contact"}>  Contact</Link>
            </nav>
           
            
            <button className={styles.hamburger} onClick={menuClick}>&#9776;</button>
            </div>
          { clicked && (<nav id="nav_box " className={`navbar bg-slate-900 h-auto p-4 flex flex-row hover:bg-blue-600 justify-around flex-wrap `}>
                <Link className="nav_links text-white hover:bg-blue-600 p-4"  href={"#"}  >Home</Link>
                <Link className="nav_links text-white hover:bg-blue-600 p-4" href={"#about"}  >About</Link>
                <Link className="nav_links text-white hover:bg-blue-600 p-4" href={"#service"}  >Services</Link>
                <Link className="nav_links text-white hover:bg-blue-600 p-4" href={"#projects"}  >Projects</Link>
                <Link className="nav_links text-white hover:bg-blue-600 p-4" href={"#contact"}>  Contact</Link>
            </nav>)}
  
             
            <div className={`${styles.lp_wrapper}  w-2/3 h-full p-10 mt-16`}> {/* eslint-disable-next-line react/no-unescaped-entities  */}
            <p className={`${styles.lp_text} lp_text text-left mb-8 text-[3.2rem] font-bold  text-slate-200 drop-shadow-[0_1px_1px_white]`}>We provide <span>creative solutions</span>  to turn you ideas into <span>digital reality</span>
            
             </p>
            
            <Link className="font-medium text-xs hover:bg-white hover:text-blue-600 border-2 border-yellow-600 text-white  px-8 tracking-wider py-3 hover" href={"#contact"}>  MORE ABOUT ME</Link>
            </div>
            
      </div>
     
    )
}