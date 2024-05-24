import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import Projects from "@/components/projects/Projects";
import Services from "@/components/Services";
import Contact from "@/components/contact";
import About from "@/components/about/About";
import Skills from "@/components/skills";
export default function Home() {
  return (
    <div className="main">
      <Navbar></Navbar>

      
      <About></About> 
 <Projects></Projects>
      <Contact></Contact>

      <Footer></Footer>  
    </div>
  );
}
