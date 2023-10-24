import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Footer from './component/Footer';
import Menu from './Page/Menu';
import About from './Page/About';
import Contact from './Page/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Menu} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
