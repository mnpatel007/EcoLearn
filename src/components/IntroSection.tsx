import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Leaf, Wind, Calculator } from 'lucide-react';

const IntroSection: React.FC = () => {
  const navigate = useNavigate();

  const topics = [
    {
      icon: <Leaf className="w-8 h-8 text-emerald-400" />,
      title: 'Ecosystem Balance',
      description: 'Learn how different species interact and maintain harmony in nature',
      path: '/ecosystem-balance'
    },
    {
      icon: <Wind className="w-8 h-8 text-blue-400" />,
      title: 'Climate Action',
      description: 'Understand climate change and discover ways to make a difference',
      path: '/climate-action'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
      title: 'Sustainable Living',
      description: 'Explore practical steps towards a more sustainable lifestyle',
      path: '/sustainable-living'
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white px-4">
      <div className="max-w-4xl text-center space-y-8 relative z-10">
        <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500 filter drop-shadow-lg">
          EcoLearn
        </h1>
        <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed">
          Discover the delicate balance of our ecosystem through an immersive
          learning experience
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <button
            onClick={() => navigate('/learn')}
            className="group relative px-8 py-4 bg-emerald-600 rounded-full overflow-hidden transition-all duration-300 hover:bg-emerald-700"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Start Learning
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </button>
          <button
            onClick={() => navigate('/topics')}
            className="group relative px-8 py-4 border-2 border-emerald-500 rounded-full overflow-hidden transition-all duration-300 hover:border-emerald-400"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Leaf className="w-5 h-5" />
              Explore Topics
            </span>
          </button>
          <button
            onClick={() => navigate('/calculator')}
            className="group relative px-8 py-4 bg-blue-600 rounded-full overflow-hidden transition-all duration-300 hover:bg-blue-700"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              CO2 Calculator
            </span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {topics.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="backdrop-blur-lg bg-white/10 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-emerald-100">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntroSection;