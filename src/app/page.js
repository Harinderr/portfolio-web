import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/contact";
import About from "@/components/About";
export default function Home() {
  return (
    <div className="main">
      <Navbar></Navbar>

      <About></About>
      <Services></Services>
      <Projects></Projects>
      <Contact></Contact>

      <Footer></Footer>
    </div>
  );
}
