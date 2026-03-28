export default function Header({ progressPercentage }) {
    return (
        <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 px-4 py-5 shadow-sm shadow-emerald-900/10 transition-all">
            <div className="max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-3">
                    <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">
                        Roadmap <span className="text-emerald-400">TDAH</span>
                    </h1>
                    <span className="text-sm font-medium text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full transition-all">
                        {progressPercentage}% Completo
                    </span>
                </div>
                <div className="w-full h-2.5 bg-zinc-800 rounded-full overflow-hidden shadow-inner">
                    <div
                        className="h-full bg-emerald-500 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
            </div>
        </header>
    );
}
