import React from 'react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      category: "Energy",
      items: [
        "Transition to renewable energy sources",
        "Improve energy efficiency",
        "Develop smart grid technology"
      ]
    },
    {
      category: "Transportation",
      items: [
        "Electric vehicles adoption",
        "Public transit improvement",
        "Sustainable urban planning"
      ]
    },
    {
      category: "Industry",
      items: [
        "Carbon capture technology",
        "Circular economy practices",
        "Green manufacturing"
      ]
    }
  ];

  return (
    <div className="bg-white/5 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-white mb-4">Climate Solutions</h3>
      <div className="space-y-6">
        <p className="text-emerald-100">
          There are many promising solutions to address climate change, from technological 
          innovations to policy changes and individual actions.
        </p>
        {solutions.map((solution, index) => (
          <div key={index} className="space-y-2">
            <h4 className="text-emerald-300 font-semibold">{solution.category}</h4>
            <ul className="list-disc list-inside text-emerald-100">
              {solution.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;