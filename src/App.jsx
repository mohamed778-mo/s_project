import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Dedicated Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ExpertisePage from './pages/ExpertisePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import TechnicalSkillsPage from './pages/TechnicalSkillsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-black flex flex-col font-sans selection:bg-black selection:text-white">
        {/* Persistent Engineering Header */}
        <Navbar />

        {/* Dynamic Multi-Page Router View */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/expertise" element={<ExpertisePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/technical-skills" element={<TechnicalSkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Persistent Engineering Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
