import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import EcosystemCard from '../components/EcosystemCard';
import { foodWebContent, biodiversityContent, naturalCyclesContent } from '../data/ecosystemContent';

const EcosystemBalance: React.FC = () => {
  const navigate = useNavigate();

  const renderFoodWebContent = () => (
    <div className="space-y-4">
      <p>{foodWebContent.intro}</p>
      <div className="space-y-2">
        {foodWebContent.keyPoints.map((point, index) => (
          <div key={index} className="ml-4">
            <strong className="text-emerald-300">{point.title}:</strong>{' '}
            <span>{point.description}</span>
            {point.examples && (
              <span className="block ml-4 text-emerald-200">
                Examples: {point.examples}
              </span>
            )}
            {point.types && (
              <ul className="ml-4 list-disc list-inside">
                {point.types.map((type, idx) => (
                  <li key={idx}>{type}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderBiodiversityContent = () => (
    <div className="space-y-4">
      <p>{biodiversityContent.intro}</p>
      <ul className="list-disc list-inside space-y-2">
        {biodiversityContent.importance.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );

  const renderNaturalCyclesContent = () => (
    <div className="space-y-4">
      <p>{naturalCyclesContent.intro}</p>
      <div className="space-y-4">
        {naturalCyclesContent.cycles.map((cycle, index) => (
          <div key={index} className="ml-4">
            <strong className="text-emerald-300">{cycle.name}:</strong>
            <p className="ml-4">{cycle.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-8">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-white mb-8 hover:text-emerald-400 transition-colors"
      >
        <ArrowLeft /> Back to Home
      </button>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Ecosystem Balance</h1>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Understanding Natural Ecosystems</h2>
          <p className="text-emerald-100 mb-6">
            Ecosystems are complex networks of living organisms interacting with their physical environment.
            Each species plays a crucial role in maintaining the balance of nature.
          </p>

          <div className="grid gap-6">
            <EcosystemCard 
              title="Food Webs"
              content={renderFoodWebContent()}
            />
            <EcosystemCard 
              title="Biodiversity"
              content={renderBiodiversityContent()}
            />
            <EcosystemCard 
              title="Natural Cycles"
              content={renderNaturalCyclesContent()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemBalance;