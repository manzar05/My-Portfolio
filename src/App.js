import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Resume from './pages/Resume'
import About from './pages/About';
import Services from './pages/Services';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App bg-[#EEEDED]">
      <Router>
      <Navbar />
      <div className='m-h-[90vh] pt-6 mx-6 mb-10 '>
      <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
      </Routes>
      </div>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
