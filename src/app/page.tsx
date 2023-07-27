import NavBar from "../../components/NavBar";
import Home from "../../components/Home";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Project from "../../components/Project";

export default function Main() {
  return (
    <div className="main">
      <NavBar />
      <Home />
      <About />
      <Contact />
      <Project />
    </div>
  );
}
