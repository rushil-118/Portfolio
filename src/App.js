import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Blog />
      <Contact />
    </>
    
  );
}

export default App;
