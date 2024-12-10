import React from 'react';

const SustainableChoices: React.FC = () => {
  const categories = [
    {
      title: "Transportation",
      choices: [
        "Use public transportation",
        "Walk or cycle for short trips",
        "Consider an electric or hybrid vehicle",
        "Practice car-sharing or carpooling"
      ]
    },
    {
      title: "Food Choices",
      choices: [
        "Choose local and seasonal produce",
        "Reduce meat consumption",
        "Start a home garden",
        "Compost food waste"
      ]
    },
    {
      title: "Consumer Habits",
      choices: [
        "Buy products with minimal packaging",
        "Support eco-friendly brands",
        "Choose durable, long-lasting items",
        "Repair instead of replace"
      ]
    }
  ];

  return (
    <div className="bg-white/5 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-white mb-4">Sustainable Choices</h3>
      <p className="text-emerald-100 mb-4">
        Every choice we make has an environmental impact. Making sustainable choices
        helps create a better future for our planet.
      </p>

      <div className="space-y-6">
        {categories.map((category, index) => (
          <div key={index} className="bg-white/5 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-emerald-300 mb-2">
              {category.title}
            </h4>
            <ul className="list-disc list-inside text-emerald-100">
              {category.choices.map((choice, idx) => (
                <li key={idx}>{choice}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SustainableChoices;