import TaskItem from './TaskItem';

export default function PhaseCard({
    phaseData,
    completedItems,
    toggleItem,
    isExpanded,
    onToggleExpand,
    nextTaskId,
    onFocusMode
}) {
    const phaseTopicsCount = phaseData.topics.length;
    const phaseCompletedCount = phaseData.topics.filter((t) => completedItems[t.id]).length;

    const phaseProgress = phaseTopicsCount === 0 ? 0 : Math.round((phaseCompletedCount / phaseTopicsCount) * 100);

    return (
        <section
            className={`mb-6 p-4 sm:p-6 rounded-2xl shadow-xl transition-all duration-500 border ${isExpanded
                ? 'bg-zinc-900 border-zinc-700'
                : 'bg-zinc-900/50 border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900'
                }`}
        >
            <div
                className="flex justify-between items-center cursor-pointer group select-none"
                onClick={onToggleExpand}
            >
                <div className="flex-1">
                    <h2 className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${isExpanded ? 'text-emerald-400' : 'text-zinc-100 group-hover:text-emerald-400'}`}>
                        {phaseData.phase}
                    </h2>
                    <div className="w-full bg-zinc-800/80 h-1.5 rounded-full mt-3 overflow-hidden">
                        <div
                            className="h-full bg-emerald-500/80 transition-all duration-700 ease-out"
                            style={{ width: `${phaseProgress}%` }}
                        ></div>
                    </div>
                </div>

                <div className="flex items-center ml-4 shrink-0 gap-3">
                    <span className="text-xs font-semibold bg-zinc-800 text-zinc-300 py-1.5 px-3 rounded-full">
                        {phaseCompletedCount} / {phaseTopicsCount}
                    </span>
                    <div className={`p-1 bg-zinc-800/50 rounded-full transform transition-all duration-300 text-zinc-400 group-hover:text-emerald-400 ${isExpanded ? 'rotate-180 bg-zinc-800' : ''}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            <div
                className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6 pt-4 border-t border-zinc-800/80' : 'grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0 border-transparent'
                    }`}
            >
                <div className="overflow-hidden">
                    <ul className="flex flex-col gap-3">
                        {phaseData.topics.map((topic) => {
                            const isChecked = completedItems[topic.id] || false;
                            const isNextTask = topic.id === nextTaskId;

                            return (
                                <TaskItem
                                    key={topic.id}
                                    topic={topic}
                                    isChecked={isChecked}
                                    toggleItem={toggleItem}
                                    isNextTask={isNextTask}
                                    onFocusMode={onFocusMode}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}
