import React, { useState } from 'react';
import { Send } from 'lucide-react';

const AskAI: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    // Simulated AI response - In a real application, this would call an AI API
    setTimeout(() => {
      const responses: Record<string, string> = {
        default: "I'm here to help you understand environmental topics. Please ask a specific question about climate change, ecosystems, or sustainable living.",
        climate: "Climate change is caused by the increase of greenhouse gases in Earth's atmosphere, primarily from human activities like burning fossil fuels and deforestation. This leads to global warming and various environmental impacts.",
        ecosystem: "Ecosystems are communities of living organisms interacting with their physical environment. They're delicate balances of species and resources that can be disrupted by human activity and climate change.",
        sustainable: "Sustainable living means making choices that reduce our environmental impact. This includes using renewable energy, reducing waste, conserving water, and choosing eco-friendly products."
      };

      const lowerQuestion = question.toLowerCase();
      let response = responses.default;

      if (lowerQuestion.includes('climate')) response = responses.climate;
      else if (lowerQuestion.includes('ecosystem')) response = responses.ecosystem;
      else if (lowerQuestion.includes('sustainable')) response = responses.sustainable;

      setAnswer(response);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-8">
      <h2 className="text-xl font-semibold text-white mb-4">Ask AI About Environment</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask about climate change, ecosystems, or sustainable living..."
            className="flex-1 bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors text-white disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>

      {isLoading && (
        <div className="mt-4 text-emerald-400">Thinking...</div>
      )}

      {answer && !isLoading && (
        <div className="mt-4 p-4 bg-white/5 rounded-lg">
          <p className="text-emerald-100">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AskAI;