import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ReduceReuse from '../components/sustainable/ReduceReuse';
import EnergyEfficiency from '../components/sustainable/EnergyEfficiency';
import SustainableChoices from '../components/sustainable/SustainableChoices';

const SustainableLiving: React.FC = () => {
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
        <h1 className="text-4xl font-bold text-white mb-8">Sustainable Living</h1>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Living in Harmony with Nature
          </h2>
          <p className="text-emerald-100 mb-6">
            Discover practical ways to reduce your environmental impact and live
            a more sustainable lifestyle. Every small action counts towards
            creating a better future for our planet.
          </p>

          <div className="grid gap-6">
            <ReduceReuse />
            <EnergyEfficiency />
            <SustainableChoices />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainableLiving;