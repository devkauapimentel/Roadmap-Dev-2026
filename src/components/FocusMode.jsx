import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function FocusMode({ topic, onComplete, onBack }) {
    const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes pomodoro
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((timeLeft) => timeLeft - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const toggleTimer = () => setIsActive(!isActive);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    const handleComplete = () => {
        // Fire confetti from bottom left and right
        const count = 200;
        const defaults = { origin: { y: 0.7 } };

        function fire(particleRatio, opts) {
            confetti(Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio)
            }));
        }

        fire(0.25, { spread: 26, startVelocity: 55 });
        fire(0.2, { spread: 60 });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45 });

        setTimeout(() => {
            onComplete(topic.id);
        }, 1500); // 1.5 seconds delay to enjoy confetti
    };

    return (
        <div className="fixed inset-0 z-50 bg-zinc-950 flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in zoom-in duration-300">
            <button
                onClick={onBack}
                className="absolute top-6 left-6 text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm sm:text-base font-medium bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl hover:bg-zinc-800"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Voltar ao Mapa
            </button>

            <div className="max-w-3xl w-full flex flex-col items-center text-center space-y-10">
                <div className="bg-zinc-900 border border-zinc-800 p-8 sm:p-14 rounded-3xl shadow-2xl w-full relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-emerald-300 to-emerald-500 opacity-50"></div>

                    <div className="inline-block px-4 py-1.5 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs sm:text-sm font-bold tracking-widest uppercase mb-8 shadow-inner">
                        {topic.type === 'theory' ? '📘 Módulo Teórico' : topic.type === 'practice' ? '🛠️ Mão na Massa' : topic.type === 'ai' ? '🤖 Imersão IA' : '🚀 Projeto Prático'}
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
                        {topic.title}
                    </h1>

                    <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto font-medium">
                        {topic.description}
                    </p>
                </div>

                <div className="flex flex-col items-center gap-5 bg-zinc-900/50 p-6 rounded-3xl border border-zinc-800/50">
                    <div className="text-6xl sm:text-7xl font-mono font-black text-emerald-500 tabular-nums tracking-tighter drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                        {formatTime(timeLeft)}
                    </div>
                    <button
                        onClick={toggleTimer}
                        className={`text-sm sm:text-base font-bold uppercase tracking-widest transition-colors px-6 py-3 rounded-full border-2 ${isActive ? 'text-amber-500 border-amber-500/30 hover:bg-amber-500/10' : 'text-emerald-500 border-emerald-500/30 hover:bg-emerald-500/10'}`}
                    >
                        {isActive ? 'Pausar Pomodoro' : 'Iniciar Foco (25m)'}
                    </button>
                </div>

                <button
                    onClick={handleComplete}
                    className="group relative px-10 py-6 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xl sm:text-2xl rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.2)] hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-4 overflow-hidden border border-emerald-400"
                >
                    <span className="relative z-10 flex items-center gap-3 tracking-wide">
                        EU TERMINEI ISSO!
                        <svg className="w-7 h-7 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12 z-0"></div>
                </button>
            </div>

            <p className="absolute bottom-8 text-zinc-600 text-sm font-medium">
                Modo Hiperfoco TDAH — Longe de distrações.
            </p>
        </div>
    );
}
