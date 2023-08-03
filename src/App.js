import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import "./App.css";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
     
     </>
  );
}

export default App;
