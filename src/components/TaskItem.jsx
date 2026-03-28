export default function TaskItem({ topic, isChecked, toggleItem, isNextTask, onFocusMode }) {
    const getTypeStyles = (type) => {
        switch (type) {
            case 'theory': return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
            case 'practice': return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
            case 'ai': return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
            case 'project': return 'text-rose-400 bg-rose-500/10 border-rose-500/20';
            default: return 'text-zinc-400 bg-zinc-800 border-zinc-700';
        }
    };

    const getTypeLabel = (type) => {
        switch (type) {
            case 'theory': return 'TEORIA';
            case 'practice': return 'PRÁTICA';
            case 'ai': return 'IA';
            case 'project': return 'PROJETO';
            default: return 'TÓPICO';
        }
    };

    return (
        <li
            className={`
        group flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 p-4 rounded-xl transition-all duration-300 relative
        ${isChecked
                    ? 'bg-zinc-900/40 opacity-70 hover:opacity-100'
                    : isNextTask
                        ? 'bg-emerald-900/10 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.05)]'
                        : 'hover:bg-zinc-800/80 border border-transparent'
                }
      `}
        >
            {isNextTask && (
                <span className="absolute -top-3 -right-2 flex h-5 w-auto items-center justify-center rounded-full bg-emerald-500 px-2.5 py-0.5 text-[10px] sm:text-xs font-bold tracking-wider text-black shadow-[0_0_10px_rgba(16,185,129,0.6)] animate-pulse z-10">
                    PRÓXIMA META
                </span>
            )}

            <div className="flex items-start gap-4 flex-1 w-full relative">
                <div
                    className="pt-1 shrink-0 cursor-pointer active:scale-90 transition-transform"
                    onClick={() => toggleItem(topic.id)}
                >
                    <input
                        type="checkbox"
                        checked={isChecked}
                        readOnly
                        className="w-6 h-6 outline-none appearance-none rounded-md border-2 border-zinc-600 bg-zinc-900 checked:bg-emerald-500 checked:border-emerald-500 transition-[background-color,border-color,transform,box-shadow] duration-300 checked:shadow-[0_0_12px_rgba(16,185,129,0.4)] pointer-events-none flex items-center justify-center relative
            after:content-[''] after:hidden checked:after:block after:absolute after:left-[7px] after:top-[2px] after:w-[6px] after:h-[12px] after:border-r-[2.5px] after:border-b-[2.5px] after:border-zinc-950 after:rotate-[35deg] checked:after:rotate-45 after:transition-all after:duration-300"
                    />
                </div>

                <div className="flex-1 cursor-pointer" onClick={() => toggleItem(topic.id)}>
                    <div className="flex items-center gap-2 mb-1.5">
                        {topic.type && (
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-sm border uppercase tracking-wider ${getTypeStyles(topic.type)}`}>
                                {getTypeLabel(topic.type)}
                            </span>
                        )}
                    </div>
                    <h3
                        className={`
                text-base sm:text-lg font-medium transition-all duration-500 ease-out leading-snug
                ${isChecked
                                ? 'line-through text-zinc-600'
                                : isNextTask
                                    ? 'text-emerald-400 font-semibold drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]'
                                    : 'text-zinc-200 group-hover:text-emerald-400'
                            }
            `}
                    >
                        {topic.title}
                    </h3>
                    <p
                        className={`
                text-sm sm:text-base mt-2 transition-all duration-500 leading-relaxed
                ${isChecked ? 'line-through text-zinc-700' : isNextTask ? 'text-emerald-200/80' : 'text-zinc-400 group-hover:text-zinc-300'}
            `}
                    >
                        {topic.description}
                    </p>
                </div>
            </div>

            {!isChecked && (
                <div className="sm:shrink-0 flex sm:flex-col justify-end w-full sm:w-auto mt-2 sm:mt-0 items-center z-10">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onFocusMode(topic.id);
                        }}
                        className={`
                            flex items-center justify-center gap-2 px-4 py-2 sm:px-3 sm:py-2 rounded-lg font-bold text-xs sm:text-sm transition-all w-full sm:w-auto
                            ${isNextTask
                                ? 'bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:scale-105'
                                : 'bg-zinc-800 hover:bg-emerald-500/20 text-zinc-300 hover:text-emerald-400 border border-zinc-700 hover:border-emerald-500/50'}
                        `}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        FOCO
                    </button>
                </div>
            )}
        </li>
    );
}
