import { motion } from 'framer-motion';
import {
    RefreshIcon as RefreshCw,
    Shield01Icon as ShieldCheck,
    Analytics01Icon as TrendingUp,
    Layout03Icon as LayoutGrid,
    ZapIcon as Zap
} from 'hugeicons-react';
import { LatencyMatrix } from '../components/LatencyMatrix';
import { ServiceStatus } from '../components/ServiceStatus';
import { ResourceGauges } from '../components/ResourceGauges';
import { cn } from '../utils/cn';

export const SystemHealth = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 md:p-10 space-y-10 min-h-screen bg-surface-base"
        >
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-2">
                <div>
                    <h2 className="text-3xl font-black text-zinc-900 tracking-tight flex items-center gap-4">
                        Diagnostic Center
                    </h2>
                    <p className="text-zinc-500 text-[11px] mt-1.5 font-bold uppercase tracking-[0.2em] opacity-60 italic leading-relaxed">Cluster-wide diagnostic center monitoring latency propagation and heartbeats</p>
                </div>

                <div className="flex items-center gap-4 px-2">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 bg-primary-600 text-white rounded-xl font-black hover:bg-primary-700 md-transition md-elevation-1 text-[10px] uppercase tracking-widest shadow-lg shadow-primary-500/20 flex items-center gap-2.5"
                    >
                        <RefreshCw className="w-4 h-4" /> Trigger Pulse
                    </motion.button>
                </div>
            </div>

            {/* Top Row: Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Active Nodes', value: '12', icon: LayoutGrid, color: 'text-primary-600' },
                    { label: 'Avg Latency', value: '14ms', icon: TrendingUp, color: 'text-success-600' },
                    { label: 'Total Memory', value: '128GB', icon: Zap, color: 'text-warning-600' },
                    { label: 'Security Class', value: 'Alpha', icon: ShieldCheck, color: 'text-primary-600' },
                ].map((stat, i) => (
                    <div key={i} className="bg-surface-white p-6 rounded-2xl border border-border-subtle md-elevation-1 hover:md-elevation-3 md-transition flex items-center gap-6 h-[140px] group">
                        <div className="w-16 h-16 bg-zinc-50 rounded-xl flex items-center justify-center border border-border-subtle shrink-0 group-hover:bg-primary-50 md-transition">
                            <stat.icon className={cn("w-7 h-7 md-transition", stat.color)} />
                        </div>
                        <div className="min-w-0">
                            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5 truncate leading-none">{stat.label}</p>
                            <p className="text-3xl font-black text-zinc-900 tracking-tighter truncate leading-none">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Diagnostic Layout */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
                {/* Left Column: Latency & Services */}
                <div className="xl:col-span-8 space-y-10">
                    <div className="bg-surface-white rounded-2xl border border-border-subtle p-6 md:p-10 md-elevation-1">
                        <ServiceStatus />
                    </div>
                    <div className="bg-surface-white rounded-2xl border border-border-subtle p-6 md:p-10 md-elevation-1">
                        <LatencyMatrix />
                    </div>
                </div>

                {/* Right Column: Resource Gauges */}
                <div className="xl:col-span-4 space-y-10 min-w-0">
                    <div className="bg-surface-white rounded-2xl border border-border-subtle p-6 md:p-10 md-elevation-1 overflow-hidden">
                        <div className="mb-10">
                            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-1.5">Resource Telemetry</h3>
                            <p className="text-zinc-400 font-bold text-[10px] uppercase tracking-widest opacity-60">Cluster-wide consumption</p>
                        </div>
                        <ResourceGauges />
                    </div>

                    {/* Neural Outlook Panel */}
                    <div className="p-10 bg-zinc-900 rounded-2xl text-white flex flex-col justify-between overflow-hidden relative group md-elevation-4 border border-zinc-800">
                        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 md-transition">
                            <Zap className="w-48 h-48 text-primary-500 rotate-12" />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-12">
                                <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 backdrop-blur-md">
                                    <ShieldCheck className="w-7 h-7 text-success-500" />
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-bold text-success-400 uppercase tracking-widest leading-none mb-2">Neural Status</p>
                                    <p className="text-sm font-black text-white uppercase tracking-widest">Nominal</p>
                                </div>
                            </div>
                            <h4 className="text-2xl font-black mb-6 tracking-tight uppercase">Autonomic Outlook</h4>
                            <p className="text-zinc-400 font-bold text-[13px] leading-relaxed mb-12 uppercase tracking-wide opacity-80">
                                The AI heuristic engine predicts <span className="text-white">zero critical downtime</span> in the next telemetry window. Risk scores remained <span className="text-success-400 italic">below 4.2%</span>.
                            </p>
                            <div className="space-y-4">
                                <motion.button
                                    whileHover={{ y: -1 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 px-6 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 md-transition text-[11px] uppercase tracking-widest shadow-lg shadow-primary-500/20"
                                >
                                    Generate Audit
                                </motion.button>
                                <motion.button
                                    whileHover={{ y: -1 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 px-6 bg-white/5 border border-white/10 text-zinc-400 rounded-xl font-bold hover:bg-white/10 md-transition text-[11px] uppercase tracking-widest"
                                >
                                    Export Context
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
