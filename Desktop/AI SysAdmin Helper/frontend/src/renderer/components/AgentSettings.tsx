import React, { useState } from 'react';
import {
    Brain01Icon as Brain,
    CpuIcon as Cpu,
    RefreshIcon as RefreshCw,
    Activity01Icon as Activity,
    HelpCircleIcon as Info,
    Shield01Icon as Shield,
    Activity02Icon as Dna
} from 'hugeicons-react';
import { cn } from '../utils/cn';
import { motion } from 'framer-motion';

export const AgentSettings: React.FC = () => {
    const [reasoningDepth, setReasoningDepth] = useState(74);
    const [learningEnabled, setLearningEnabled] = useState(true);
    const [multiHost, setMultiHost] = useState(true);

    return (
        <div className="space-y-10">
            <div className="px-1">
                <h3 className="text-xl font-black text-zinc-900 tracking-tight leading-none mb-2.5">Neural Architecture</h3>
                <p className="text-zinc-500 font-bold text-[11px] uppercase tracking-widest opacity-60 italic">Tune heuristic parameters and neural learning behavior</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Reasoning Depth */}
                <div className="lg:col-span-8 p-10 bg-surface-white rounded-2xl border border-border-subtle md-elevation-1 space-y-12 group hover:md-elevation-3 md-transition">
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-zinc-50 rounded-xl flex items-center justify-center text-primary-600 border border-border-subtle group-hover:bg-primary-50 md-transition shadow-sm">
                            <Brain className="w-7 h-7" />
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1.5 opacity-60">Reasoning Multiplier</h4>
                            <p className="text-[13px] text-zinc-500 font-bold leading-none uppercase tracking-tight">Higher depth improves precision but increases inference latency</p>
                        </div>
                    </div>

                    <div className="space-y-10">
                        <div className="flex justify-between items-end px-1">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.2em] leading-none mb-3 italic">Strategy Density</span>
                                <div className="flex items-center gap-3">
                                    <Shield className="w-4 h-4 text-primary-600 opacity-40" />
                                    <span className="text-[11px] font-black text-zinc-800 uppercase tracking-widest">Adaptive Level</span>
                                </div>
                            </div>
                            <span className="text-6xl font-black text-zinc-900 tracking-tighter leading-none">{reasoningDepth}<span className="text-[24px] text-zinc-200 ml-1 font-bold">%</span></span>
                        </div>

                        <div className="relative h-2.5 w-full bg-zinc-50 rounded-full border border-border-subtle shadow-inner">
                            <motion.div
                                className="absolute inset-y-0 left-0 bg-primary-600 rounded-full shadow-lg shadow-primary-500/20"
                                style={{ width: `${reasoningDepth}%` }}
                            />
                            <input
                                type="range"
                                min="10"
                                max="100"
                                value={reasoningDepth}
                                onChange={(e) => setReasoningDepth(parseInt(e.target.value))}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            />
                            <motion.div
                                className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-surface-white border-2 border-primary-600 rounded-full shadow-md z-0 pointer-events-none"
                                style={{ left: `calc(${reasoningDepth}% - 12px)` }}
                            />
                        </div>

                        <div className="flex justify-between text-[10px] font-black text-zinc-300 uppercase tracking-[0.2em] italic px-1">
                            <span>Reactive</span>
                            <span>Analytical</span>
                        </div>
                    </div>

                    <div className="p-6 bg-zinc-50/50 rounded-2xl border border-border-subtle flex items-start gap-5 shadow-inner">
                        <div className="w-8 h-8 rounded-lg bg-surface-white flex items-center justify-center border border-border-subtle shadow-sm shrink-0">
                            <Info className="w-4 h-4 text-primary-600" />
                        </div>
                        <p className="text-[11px] font-bold text-zinc-500 leading-relaxed uppercase tracking-tight opacity-80">
                            Optimal resolution for large clusters is <span className="text-zinc-900">65% - 85%</span>. Deep analysis (90+) may induce a slight delay in real-time stream processing.
                        </p>
                    </div>
                </div>

                {/* Toggles */}
                <div className="lg:col-span-4 space-y-6">
                    {[
                        {
                            label: 'Neural Backprop',
                            desc: 'Evolve models based on manual triage feedback',
                            icon: RefreshCw,
                            state: learningEnabled,
                            setter: setLearningEnabled,
                            color: 'text-success-600'
                        },
                        {
                            label: 'Vector Mapping',
                            desc: 'Correlate events across the global telemetry mesh',
                            icon: Dna,
                            state: multiHost,
                            setter: setMultiHost,
                            color: 'text-primary-600'
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-surface-white rounded-2xl border border-border-subtle md-elevation-1 flex flex-col justify-between group h-[calc(50%-12px)] hover:md-elevation-3 md-transition">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center border md-transition shadow-sm",
                                        item.state ? "bg-zinc-50 border-border-subtle" : "bg-surface-white border-zinc-100",
                                        item.color)}>
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-[11px] font-black text-zinc-800 uppercase tracking-widest leading-none">{item.label}</h4>
                                </div>
                                <p className="text-[11px] text-zinc-400 font-bold leading-relaxed uppercase tracking-tight italic opacity-80">{item.desc}</p>
                            </div>
                            <div className="mt-8 flex items-center justify-between">
                                <span className={cn("text-[10px] font-black uppercase tracking-[0.2em] leading-none", item.state ? "text-success-600" : "text-zinc-300")}>
                                    {item.state ? 'Engaged' : 'Dormant'}
                                </span>
                                <button
                                    onClick={() => item.setter(!item.state)}
                                    className={cn(
                                        "w-11 h-6 rounded-full transition-all relative flex items-center",
                                        item.state ? "bg-zinc-900 shadow-lg shadow-zinc-900/10" : "bg-zinc-100 shadow-inner"
                                    )}
                                >
                                    <motion.div
                                        animate={{ x: item.state ? 22 : 2 }}
                                        className="w-4 h-4 bg-white rounded-full shadow-md"
                                    />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hardware Acceleration Info */}
            <div className="bg-zinc-900 p-10 rounded-2xl text-white flex flex-col md:flex-row md:items-center justify-between border border-zinc-800 relative overflow-hidden shadow-2xl shadow-primary-500/10 group">
                <div className="flex items-center gap-10 relative z-10">
                    <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-md shadow-inner group-hover:bg-white/10 md-transition">
                        <Cpu className="w-10 h-10 text-primary-500" />
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-2 h-2 rounded-full bg-success-500 animate-pulse shadow-sm shadow-success-500/50" />
                            <h4 className="font-black text-[11px] uppercase tracking-[0.3em] text-primary-500">Compute Engine</h4>
                        </div>
                        <h5 className="font-black text-2xl tracking-tight uppercase">GPU Acceleration Active</h5>
                        <p className="text-zinc-500 text-[13px] font-bold mt-2 uppercase tracking-tight opacity-80 italic">Utilizing <span className="text-white italic">DirectCompute</span> for 8.4x faster inference.</p>
                    </div>
                </div>
                <div className="mt-8 md:mt-0 flex items-center gap-6 bg-white/5 px-8 py-6 rounded-2xl border border-white/5 relative z-10 backdrop-blur-md shadow-inner">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-500/60 mb-2 leading-none">Efficiency</span>
                        <span className="text-4xl font-black text-white tracking-tighter leading-none">99.2<span className="text-lg ml-1 opacity-20 font-bold">%</span></span>
                    </div>
                    <Activity className="w-10 h-10 text-primary-500 opacity-10 group-hover:opacity-30 md-transition" />
                </div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/5 rounded-full -mr-48 -mt-48 blur-[80px] opacity-50 group-hover:opacity-70 md-transition" />
            </div>
        </div>
    );
};
