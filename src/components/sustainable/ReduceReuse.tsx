import React from 'react';

const ReduceReuse: React.FC = () => {
  const tips = [
    {
      category: "Reduce",
      description: "Using less to create less waste",
      examples: [
        "Use reusable water bottles instead of disposable ones",
        "Turn off lights and electronics when not in use",
        "Choose quality products over quantity",
        "Plan meals to reduce food waste"
      ]
    },
    {
      category: "Reuse",
      description: "Finding new ways to use items instead of disposing them",
      examples: [
        "Use both sides of paper for notes",
        "Convert old clothes into cleaning rags",
        "Carry reusable shopping bags",
        "Repurpose glass jars for storage"
      ]
    }
  ];

  return (
    <div className="bg-white/5 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-white mb-4">Reduce & Reuse</h3>
      <p className="text-emerald-100 mb-4">
        The first steps toward sustainable living focus on minimizing waste and
        maximizing the life cycle of products we use.
      </p>
      
      <div className="space-y-6">
        {tips.map((tip, index) => (
          <div key={index} className="bg-white/5 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-emerald-300 mb-2">
              {tip.category}
            </h4>
            <p className="text-emerald-100 mb-2">{tip.description}</p>
            <ul className="list-disc list-inside text-emerald-100">
              {tip.examples.map((example, idx) => (
                <li key={idx}>{example}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReduceReuse;