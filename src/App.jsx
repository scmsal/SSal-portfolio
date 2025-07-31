import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// The Vite build log suggested using import() to split the chunks. I asked ChatGPT for the snippet and CoPilot helped with the implementation.
import { lazy, Suspense } from "react";

const NavBar = lazy(() => import("./components/NavBar"));
const HomePage = lazy(() => import("./pages/home"));
const ProjectsPage = lazy(() => import("./pages/projects"));
const AboutPage = lazy(() => import("./pages/about"));
const ContactPage = lazy(() => import("./pages/contact"));
const SkillsPage = lazy(() => import("./pages/skills_projects_vertical"));
const Footer = lazy(() => import("./components/footer"));

//Main app, my own implementation
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
