import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamePage from "./pages/GamePage";
import CandyCrushHome from "./pages/Dashboard";
import ContactPage from "./pages/Contact";
import DeveloperCard from "./pages/Developer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CandyCrushHome />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/developer" element={<DeveloperCard />} />
      </Routes>
    </Router>
  );
}

export default App;
