import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Project';

function App() {
  const [isIntroVisible, setIsIntroVisible] = useState(true);

  useEffect(() => {
    // Set a timer to hide the intro after 2 seconds
    const timer = setTimeout(() => {
      setIsIntroVisible(false);
    }, 2000); // Change this value to 1000 for 1 second

    // Cleanup the timer when component unmounts
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
      {/* Navigation Links */}
      
      <nav>
      {/* <h2  class="heading">My Portfolio</h2> */}
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

     <div className='margint'>
        <ul>
        
          <li><Link  class="pages" to="/">Home</Link></li>
          <li><Link class="pages" to="/about">About</Link></li>
          <li><Link  class="pages" to="/projects">Projects</Link></li>
          <li><Link  class="pages" to="/contact">Contact</Link></li>
        </ul>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
  
)}

</div>
  );
}

export default App;
