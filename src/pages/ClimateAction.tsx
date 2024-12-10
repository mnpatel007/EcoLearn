import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import GreenhouseEffect from '../components/climate/GreenhouseEffect';
import GlobalImpact from '../components/climate/GlobalImpact';
import Solutions from '../components/climate/Solutions';

const ClimateAction: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-8">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-white mb-8 hover:text-emerald-400 transition-colors"
      >
        <ArrowLeft /> Back to Home
      </button>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Climate Action</h1>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Taking Action Against Climate Change
          </h2>
          <p className="text-emerald-100 mb-6">
            Climate change is one of the most pressing challenges of our time.
            Learn about its causes and what actions we can take to make a difference.
          </p>

          <div className="grid gap-6">
            <GreenhouseEffect />
            <GlobalImpact />
            <Solutions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimateAction;