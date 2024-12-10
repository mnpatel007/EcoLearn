import React from 'react';

const GreenhouseEffect: React.FC = () => {
  return (
    <div className="bg-white/5 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-white mb-4">The Greenhouse Effect</h3>
      <div className="space-y-4 text-emerald-100">
        <p>
          The greenhouse effect is how our planet stays warm enough for life. It's like a big blanket 
          around Earth made of gases in the atmosphere.
        </p>
        
        <div>
          <h4 className="font-semibold text-emerald-300 mb-2">How It Works:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>The Sun sends energy to Earth in the form of sunlight</li>
            <li>Some of this sunlight is absorbed by the Earth's surface, making it warm</li>
            <li>The Earth then releases some of this heat back into the atmosphere</li>
            <li>Greenhouse gases trap some of this heat and send it back to Earth</li>
            <li>This process keeps our planet at a livable temperature</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-emerald-300 mb-2">Key Greenhouse Gases:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Carbon dioxide (CO₂)</li>
            <li>Methane (CH₄)</li>
            <li>Water vapor (H₂O)</li>
            <li>Nitrous oxide (N₂O)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GreenhouseEffect;