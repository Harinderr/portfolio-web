import Link from "next/link"
export default function Navbar() {
    return (
        <div className="Landingpage">
           <div className="nav_container fixed top-0 z-10">
           // eslint-disable-next-line react/no-unescaped-entities
            <div className="nav_head"> Web<span>Dev</span></div>
            <nav className="navbar">
                <Link className="nav_links"  href={"#"}  >Home</Link>
                <Link className="nav_links" href={"#about"}  >About</Link>
                <Link className="nav_links" href={"#service"}  >Services</Link>
                <Link className="nav_links" href={"#projects"}  >Projects</Link>
                <Link className="nav_links" href={"#contact"}>  Contact</Link>
            </nav>
            
            </div>
            // eslint-disable-next-line react/no-unescaped-entities
            <h1 className="h-80 mt-20 text-white">LET'S <span>BUILD</span> TOGETHER</h1>
      </div>
     
    )
}