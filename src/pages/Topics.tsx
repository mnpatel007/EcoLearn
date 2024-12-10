import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Leaf, Wind, Sparkles } from 'lucide-react';

const Topics: React.FC = () => {
  const navigate = useNavigate();

  const topics = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Ecosystem Balance",
      path: "/ecosystem-balance",
      description: "Explore the delicate balance of nature's ecosystems"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Climate Action",
      path: "/climate-action",
      description: "Learn about climate change and how to make a difference"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Sustainable Living",
      path: "/sustainable-living",
      description: "Discover practical ways to live more sustainably"
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-white mb-8 hover:text-emerald-400 transition-colors"
      >
        <ArrowLeft /> Back to Home
      </button>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Explore Topics</h1>
        
        <div className="grid gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              onClick={() => navigate(topic.path)}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-600 rounded-lg text-white">
                  {topic.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{topic.title}</h3>
                  <p className="text-emerald-100 mt-1">{topic.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;