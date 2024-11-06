// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      </header>
      <main className="App-main"></main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
