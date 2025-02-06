import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import Hexnode from './Components/Hexnode/Hexnode';
import Advantage from './Components/Advantage/Advantage';
import Platform from './Components/Platforms/Platform';
import Customers from './Components/Customers/Customers';
import Footer from './Components/Footer/Footer';
import Chatbot from './Components/Chatbot';
import Trail from './Components/Trail/Trail';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
              <Hexnode />
              <Advantage />
              <Platform />
              <Customers />
              <Chatbot />
              <Footer />
            </>
          }
        />
        <Route path="/trail" element={<Trail />} />
      </Routes>
    </Router>
  );
}

export default App;
