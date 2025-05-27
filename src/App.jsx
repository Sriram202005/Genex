import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Support from './pages/Support';
import Jobs from './pages/Jobs';
import TrainingPrograms from './pages/TrainingPrograms';
import InternshipPrograms from './pages/InternshipPrograms'; 
import Portfolio from './pages/Portfolio';
import Objective from './pages/Objective';
import CorporateTraining from './pages/CorporateTraining';


import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen rounded-2xl shadow-md">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/support" element={<Support />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/training-programs" element={<TrainingPrograms />} />
            <Route path="/internship-programs" element={<InternshipPrograms />} />
            <Route path="/corporate-training" element={<CorporateTraining />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/objective" element={<Objective />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
