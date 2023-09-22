import './app.css';
import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import SoftSkills from './components/Soft Skills/softskills';
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <SoftSkills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
