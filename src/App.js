import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styling/App.css';
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
