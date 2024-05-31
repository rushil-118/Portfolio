import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <><NavBar /><Home /><About /><Education /><Experience /><Contact /></>
  );
}

export default App;
