import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footers from "./components/Footers";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footers />
    </div>
  );
}
