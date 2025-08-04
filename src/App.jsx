import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// The Vite build log suggested using import() to split the chunks. I asked ChatGPT for the snippet and CoPilot helped with the implementation.
import { lazy, Suspense } from "react";

const NavBar = lazy(() => import("./components/NavBar"));
const HomePage = lazy(() => import("./pages/home"));
const ProjectsPage = lazy(() => import("./pages/projects"));
const AboutPage = lazy(() => import("./pages/about"));
const ContactPage = lazy(() => import("./pages/contact"));
const SkillsPage = lazy(() => import("./pages/skills"));
const Footer = lazy(() => import("./components/footer"));

//Main app, my own implementation
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-dvh">
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="/projects"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ProjectsPage />
              </Suspense>
            }
          />
          <Route
            path="/skills"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SkillsPage />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ContactPage />
              </Suspense>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
