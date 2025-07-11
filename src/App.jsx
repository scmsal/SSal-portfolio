import { useState } from "react";

import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import pages
import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";

//import component
import NavBar from "./components/NavBar";

//Main app
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
