import React from 'react';

interface EcosystemCardProps {
  title: string;
  content: React.ReactNode;
}

const EcosystemCard: React.FC<EcosystemCardProps> = ({ title, content }) => {
  return (
    <div className="bg-white/5 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <div className="text-emerald-100">{content}</div>
    </div>
  );
};

export default EcosystemCard;