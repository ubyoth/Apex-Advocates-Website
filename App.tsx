
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SuccessStories from './pages/SuccessStories';
import KnowledgeCentre from './pages/KnowledgeCentre';
import Contact from './pages/Contact';
import SportsLaw from './pages/SportsLaw';
import Practices from './pages/Practices';
import About from './pages/About';
import LegalAssistant from './components/LegalAssistant';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practices" element={<Practices />} /> 
            <Route path="/practices/sports" element={<SportsLaw />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/knowledge" element={<KnowledgeCentre />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <LegalAssistant />
      </div>
    </Router>
  );
};

export default App;
