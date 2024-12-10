import React from 'react';

const EnergyEfficiency: React.FC = () => {
  const energyTips = [
    {
      title: "Home Energy",
      tips: [
        "Install LED lighting",
        "Use smart thermostats",
        "Improve insulation",
        "Choose energy-efficient appliances"
      ]
    },
    {
      title: "Renewable Energy",
      tips: [
        "Consider solar panels",
        "Switch to renewable energy providers",
        "Use solar-powered outdoor lights",
        "Support community solar projects"
      ]
    }
  ];

  return (
    <div className="bg-white/5 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-white mb-4">Energy Efficiency</h3>
      <p className="text-emerald-100 mb-4">
        Making smart energy choices helps reduce our carbon footprint and saves money
        while protecting the environment.
      </p>

      <div className="space-y-6">
        {energyTips.map((section, index) => (
          <div key={index} className="bg-white/5 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-emerald-300 mb-2">
              {section.title}
            </h4>
            <ul className="list-disc list-inside text-emerald-100">
              {section.tips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnergyEfficiency;