import React from 'react';

const GlobalImpact: React.FC = () => {
  const impacts = [
    {
      region: "Polar Regions",
      effects: "Melting ice caps, rising sea levels, threatened wildlife"
    },
    {
      region: "Coastal Areas",
      effects: "Flooding, erosion, saltwater intrusion"
    },
    {
      region: "Tropical Regions",
      effects: "Extreme weather, coral bleaching, biodiversity loss"
    },
    {
      region: "Agricultural Zones",
      effects: "Changed growing seasons, drought, crop failures"
    }
  ];

  return (
    <div className="bg-white/5 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-white mb-4">Global Impact</h3>
      <div className="space-y-4">
        <p className="text-emerald-100">
          Climate change affects different regions and ecosystems in various ways, 
          creating a cascade of environmental challenges worldwide.
        </p>
        <div className="grid gap-4">
          {impacts.map((impact, index) => (
            <div key={index} className="bg-white/5 p-4 rounded-lg">
              <h4 className="text-emerald-300 font-semibold mb-2">{impact.region}</h4>
              <p className="text-emerald-100">{impact.effects}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalImpact;