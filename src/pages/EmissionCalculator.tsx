import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Car, Home, Plane, ShoppingBag } from 'lucide-react';

interface EmissionSource {
  id: string;
  label: string;
  icon: React.ReactNode;
  multiplier: number;
}

const EmissionCalculator: React.FC = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<Record<string, number>>({
    transportation: 0,
    home: 0,
    flights: 0,
    consumption: 0,
  });

  const sources: EmissionSource[] = [
    { id: 'transportation', label: 'Car Travel (km/year)', icon: <Car />, multiplier: 0.12 },
    { id: 'home', label: 'Home Energy (kWh/year)', icon: <Home />, multiplier: 0.4 },
    { id: 'flights', label: 'Flights (hours/year)', icon: <Plane />, multiplier: 90 },
    { id: 'consumption', label: 'Shopping ($/month)', icon: <ShoppingBag />, multiplier: 0.02 },
  ];

  const calculateTotal = () => {
    return Object.entries(values).reduce((total, [key, value]) => {
      const source = sources.find(s => s.id === key);
      return total + (value * (source?.multiplier || 0));
    }, 0);
  };

  const total = calculateTotal();

  return (
    <div className="min-h-screen p-8">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-white mb-8 hover:text-emerald-400 transition-colors"
      >
        <ArrowLeft /> Back to Home
      </button>
      
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold text-white mb-8">CO2 Emission Calculator</h1>
        
        <div className="grid gap-8">
          {sources.map((source) => (
            <div key={source.id} className="bg-white/5 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                {source.icon}
                <h3 className="text-xl text-white">{source.label}</h3>
              </div>
              <input
                type="number"
                value={values[source.id] || ''}
                onChange={(e) => setValues({
                  ...values,
                  [source.id]: parseFloat(e.target.value) || 0
                })}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
                placeholder="Enter value"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-emerald-900/50 rounded-lg">
          <h2 className="text-2xl text-white mb-4">Your Annual CO2 Emissions</h2>
          <p className="text-4xl font-bold text-emerald-400">
            {total.toFixed(2)} tonnes CO2e
          </p>
          <p className="mt-4 text-white/80">
            {total > 10 
              ? "Your carbon footprint is above average. Consider reducing emissions in high-impact areas."
              : "Great job! Your carbon footprint is below average. Keep up the sustainable choices!"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmissionCalculator;