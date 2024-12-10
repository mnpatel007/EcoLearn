import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParticleEcosystem from './components/ParticleEcosystem';
import IntroSection from './components/IntroSection';
import Learning from './pages/Learning';
import Topics from './pages/Topics';
import EcosystemBalance from './pages/EcosystemBalance';
import ClimateAction from './pages/ClimateAction';
import SustainableLiving from './pages/SustainableLiving';
import EmissionCalculator from './pages/EmissionCalculator';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-emerald-900 relative overflow-hidden">
        <ParticleEcosystem />
        <Routes>
          <Route path="/" element={<IntroSection />} />
          <Route path="/learn" element={<Learning />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/ecosystem-balance" element={<EcosystemBalance />} />
          <Route path="/climate-action" element={<ClimateAction />} />
          <Route path="/sustainable-living" element={<SustainableLiving />} />
          <Route path="/calculator" element={<EmissionCalculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;