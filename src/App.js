import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Project';
import './App.css'; // Make sure your CSS is correctly imported

function App() {
  const [isIntroVisible, setIsIntroVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu on small screens

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isIntroVisible ? (
        <div className="intro-animation">
          <h1>My Portfolio</h1>
        </div>
      ) : (
        <Router>
          <div className="App">
            <nav>
              {/* Title or Logo */}
              <div className="waviy">
                <span style={{ '--i': 1 }}>M</span>
                <span style={{ '--i': 2 }}>Y</span>
                &nbsp;
                <span style={{ '--i': 3 }}>P</span>
                <span style={{ '--i': 4 }}>O</span>
                <span style={{ '--i': 5 }}>R</span>
                <span style={{ '--i': 6 }}>T</span>
                <span style={{ '--i': 7 }}>F</span>
                <span style={{ '--i': 8 }}>O</span>
                <span style={{ '--i': 9 }}>L</span>
                <span style={{ '--i': 10 }}>I</span>
                <span style={{ '--i': 11 }}>O</span>
              </div>

              {/* Hamburger Icon */}
              <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                ☰
              </div>

              {/* Navigation Links */}
              <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                  <li ><Link className="pages" to="/portfolio-website"  onClick={() => setIsMenuOpen(!isMenuOpen)} >Home</Link></li>
                  <li><Link className="pages" to="/portfolio-website/about"  onClick={() => {setTimeout(() => {setIsMenuOpen(!isMenuOpen); }, 500);
    }} >About</Link></li>
                  <li><Link className="pages" to="/portfolio-website/projects" onClick={() => setIsMenuOpen(!isMenuOpen)} >Projects</Link></li>
                  <li><Link className="pages" to="/portfolio-website/contact" onClick={() => setIsMenuOpen(!isMenuOpen)}>Contact</Link></li>
                </ul>
              </div>
            </nav>

            {/* Routes */}
            <Routes>
              <Route path="/portfolio-website" element={<Home />} />
              <Route path="/portfolio-website/about" element={<About />} />
              <Route path="/portfolio-website/projects" element={<Projects />} />
              <Route path="/portfolio-website/contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
