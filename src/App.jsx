import { useState, useEffect } from 'react';
import { roadmapData } from './data';
import Header from './components/Header';
import PhaseCard from './components/PhaseCard';
import FocusMode from './components/FocusMode';
import './index.css';

function App() {
  const [completedItems, setCompletedItems] = useState(() => {
    const saved = localStorage.getItem('roadmapProgress');
    if (saved) return JSON.parse(saved);
    return {};
  });

  const allTopics = roadmapData.flatMap((phase) => phase.topics);
  const currentNextTaskId = allTopics.find(t => !completedItems[t.id])?.id;

  const defaultExpandedPhaseIndex = roadmapData.findIndex(phase =>
    phase.topics.some(t => t.id === currentNextTaskId)
  );

  const [expandedPhaseIndex, setExpandedPhaseIndex] = useState(
    defaultExpandedPhaseIndex !== -1 ? defaultExpandedPhaseIndex : 0
  );

  const [focusedTaskId, setFocusedTaskId] = useState(null);

  useEffect(() => {
    localStorage.setItem('roadmapProgress', JSON.stringify(completedItems));
  }, [completedItems]);

  const toggleItem = (itemId) => {
    setCompletedItems((prev) => {
      const isCompleting = !prev[itemId];
      const newState = { ...prev, [itemId]: isCompleting };

      if (isCompleting) {
        const newNextTaskId = allTopics.find(t => !newState[t.id])?.id;
        if (newNextTaskId) {
          const nextPhaseIndex = roadmapData.findIndex(phase =>
            phase.topics.some(t => t.id === newNextTaskId)
          );
          setExpandedPhaseIndex((prevPhaseIndex) => {
            if (prevPhaseIndex !== nextPhaseIndex) {
              return nextPhaseIndex; // Auto-expand next phase gracefully
            }
            return prevPhaseIndex;
          });
        }
      }

      return newState;
    });
  };

  const handleCompleteFocus = (taskId) => {
    if (!completedItems[taskId]) {
      toggleItem(taskId);
    }
    setFocusedTaskId(null);
  };

  const focusedTopic = focusedTaskId ? allTopics.find(t => t.id === focusedTaskId) : null;

  const resetProgress = () => {
    if (window.confirm("Certeza que deseja resetar todo o progresso?")) {
      setCompletedItems({});
      localStorage.removeItem('roadmapProgress');
      setExpandedPhaseIndex(0);
    }
  };

  const totalItemsCount = allTopics.length;
  const completedCount = allTopics.filter((topic) => completedItems[topic.id]).length;
  const progressPercentage = totalItemsCount === 0 ? 0 : Math.round((completedCount / totalItemsCount) * 100);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans pb-20 selection:bg-emerald-500/30">
      {focusedTopic && (
        <FocusMode
          topic={focusedTopic}
          onComplete={handleCompleteFocus}
          onBack={() => setFocusedTaskId(null)}
        />
      )}

      <Header progressPercentage={progressPercentage} />

      <main className="max-w-3xl mx-auto p-4 mt-8">
        <p className="mb-10 text-zinc-400 leading-relaxed text-sm sm:text-base border-l-4 border-emerald-500 pl-4 bg-zinc-900/50 py-3 pr-4 rounded-r-lg shadow-sm">
          Bem-vindo ao seu rastreador focado desenvolvido em <strong>React</strong> e <strong>Tailwind CSS</strong>. Marque os tópicos abaixo conforme for estudando.<br />
          <strong className="text-emerald-400">Dica de Sucesso:</strong> Busque cerca de 70% de domínio em um tópico antes de avançar. Evite paralisia por análise!
        </p>

        <div className="flex flex-col gap-2">
          {roadmapData.map((phaseData, phaseIndex) => (
            <PhaseCard
              key={phaseIndex}
              phaseData={phaseData}
              completedItems={completedItems}
              toggleItem={toggleItem}
              isExpanded={expandedPhaseIndex === phaseIndex}
              onToggleExpand={() => setExpandedPhaseIndex(
                expandedPhaseIndex === phaseIndex ? null : phaseIndex
              )}
              nextTaskId={currentNextTaskId}
              onFocusMode={setFocusedTaskId}
            />
          ))}
        </div>

        <div className="mt-16 mb-8 text-center">
          <button
            onClick={resetProgress}
            className="text-xs text-zinc-500 hover:text-red-400 transition-colors px-6 py-3 border border-zinc-800 hover:border-red-900 rounded-lg hover:bg-red-950/20"
          >
            Zeragem de Fábrica (Apagar Progresso Local)
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
