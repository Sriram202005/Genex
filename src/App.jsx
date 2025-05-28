import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home';
import Objective from './pages/Objective';
import Portfolio from './pages/Portfolio';
import ProductDevelopment from './pages/ProductDevelopment';
import ITConsulting from './pages/ITConsulting';  
import ITResourcing from './pages/ITResourcing'; 
import TrainingPrograms from './pages/TrainingPrograms';
import InternshipPrograms from './pages/InternshipPrograms';
import CorporateTraining from './pages/CorporateTraining';
import Jobs from './pages/Jobs';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/objective" element={<Objective />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/product-development" element={<ProductDevelopment />} />
        <Route path="/it-consulting" element={<ITConsulting />} /> 
        <Route path="/it-resourcing" element={<ITResourcing />} />
        <Route path="/training-programs" element={<TrainingPrograms />} />
        <Route path="/internship-programs" element={<InternshipPrograms />} />
        <Route path="/corporate-training" element={<CorporateTraining />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
