import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cancel01Icon as X,
    AlertCircleIcon as ShieldAlert,
    SentIcon as Send,
    CheckmarkCircle02Icon as CheckCircle2,
    Activity01Icon as Activity,
    ZapIcon as Zap,
    Clock01Icon as Clock,
    ArrowRight01Icon as ArrowRight,
    CodeIcon as Terminal
} from 'hugeicons-react';
import { cn } from '../utils/cn';
import { AnomalyEntry } from './AnomalyTable';

interface AnomalyDetailModalProps {
    anomaly: AnomalyEntry | null;
    isOpen: boolean;
    onClose: () => void;
}

export const AnomalyDetailModal: React.FC<AnomalyDetailModalProps> = ({ anomaly, isOpen, onClose }) => {
    if (!anomaly) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[101] p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: 10 }}
                            className="bg-surface-white w-full max-w-5xl max-h-[90vh] rounded-2xl border border-border-subtle md-elevation-4 pointer-events-auto overflow-hidden flex flex-col"
                        >
                            {/* Header */}
                            <div className="px-10 py-8 border-b border-border-subtle flex items-center justify-between bg-surface-white">
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 bg-zinc-50 rounded-xl flex items-center justify-center border border-border-subtle">
                                        <ShieldAlert className="w-7 h-7 text-primary-600" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h2 className="text-2xl font-black text-zinc-900 tracking-tight">Anomaly Analysis</h2>
                                            <span className="px-2 py-0.5 bg-zinc-100 border border-border-subtle rounded-lg text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">{anomaly.id}</span>
                                        </div>
                                        <p className="text-zinc-500 font-bold flex items-center gap-2 uppercase tracking-widest text-[10px]">
                                            <Activity className="w-3.5 h-3.5 text-primary-600" /> Correlated Telemetry Segment • Entity {anomaly.host || anomaly.entity}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-3 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 rounded-xl md-transition border border-transparent hover:border-border-subtle md-click-scale"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-10 space-y-8 bg-surface-base custom-scrollbar">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                    <div className="lg:col-span-8 space-y-8">
                                        {/* Status Cards */}
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="bg-surface-white p-5 rounded-2xl border border-border-subtle md-elevation-1">
                                                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">Confidence</p>
                                                <p className="text-xl font-black text-zinc-800 tracking-tight">{anomaly.confidence}%</p>
                                            </div>
                                            <div className="bg-surface-white p-5 rounded-2xl border border-border-subtle md-elevation-1">
                                                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">Severity</p>
                                                <p className={cn(
                                                    "text-xl font-black tracking-tight",
                                                    anomaly.severity === 'Critical' ? 'text-critical-600' :
                                                        anomaly.severity === 'High' ? 'text-warning-600' : 'text-primary-600'
                                                )}>{anomaly.severity}</p>
                                            </div>
                                            <div className="bg-surface-white p-5 rounded-2xl border border-border-subtle md-elevation-1">
                                                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">Pulse Timing</p>
                                                <p className="text-xl font-black text-zinc-800 tracking-tight">{anomaly.timestamp.split(' ')[1]}</p>
                                            </div>
                                        </div>

                                        {/* Main Analysis */}
                                        <div className="bg-surface-white p-8 rounded-2xl border border-border-subtle md-elevation-1">
                                            <div className="flex items-center gap-3 mb-6">
                                                <Terminal className="w-4 h-4 text-primary-600" />
                                                <h4 className="text-[11px] font-bold text-zinc-800 uppercase tracking-[0.2em]">Technical Decomposition</h4>
                                            </div>
                                            <p className="text-lg font-bold text-zinc-700 leading-relaxed mb-6 tracking-tight">
                                                Neural engine identified a <span className="text-primary-600">{anomaly.type}</span> signature pattern.
                                                Entity behavioral entropy exceeded <span className="text-critical-600">heuristic thresholds</span> on node <span className="bg-zinc-900 text-white px-2 py-0.5 rounded-lg font-mono text-[13px] mx-1">{anomaly.host || anomaly.entity}</span>.
                                            </p>
                                            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 font-mono text-[13px] text-zinc-400 block leading-relaxed whitespace-pre shadow-inner">
                                                {`{
    "engine": "autonomous_v4",
    "entropy_delta": "0.924",
    "origin_id": "${anomaly.host || anomaly.entity}",
    "checksum": "SHA256-429FA0..."
}`}
                                            </div>
                                        </div>

                                        {/* AI Remediation Card */}
                                        <div className="bg-primary-600 p-8 rounded-2xl text-white relative overflow-hidden shadow-lg shadow-primary-500/20">
                                            <div className="relative z-10">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center border border-white/20">
                                                        <Zap className="w-5 h-5 text-white" />
                                                    </div>
                                                    <h4 className="text-lg font-black tracking-tight uppercase">Agent Recommendation</h4>
                                                </div>
                                                <p className="opacity-95 font-bold leading-relaxed mb-8 text-[15px] tracking-tight">
                                                    Signature aligns with <span className="underline decoration-white/40 decoration-2">INC-881</span>. Strategy: immediate isolation of node segment and automated rollback of latest configuration delta.
                                                </p>
                                                <div className="flex gap-4">
                                                    <motion.button
                                                        whileHover={{ y: -1 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        className="px-6 py-2.5 bg-surface-white text-primary-600 font-bold rounded-xl text-[12px] uppercase tracking-widest hover:bg-zinc-50 md-transition"
                                                    >
                                                        Deploy Remediation
                                                    </motion.button>
                                                    <motion.button
                                                        whileHover={{ y: -1 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        className="px-6 py-2.5 bg-white/10 border border-white/20 text-white font-bold rounded-xl text-[12px] uppercase tracking-widest hover:bg-white/20 md-transition"
                                                    >
                                                        Discard Signal
                                                    </motion.button>
                                                </div>
                                            </div>
                                            <Zap className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 rotate-12" />
                                        </div>
                                    </div>

                                    <div className="lg:col-span-4 space-y-8">
                                        {/* Quick Actions */}
                                        <div className="bg-surface-white p-6 rounded-2xl border border-border-subtle md-elevation-1 space-y-3">
                                            <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Workflow Pipeline</h4>
                                            <motion.button
                                                whileHover={{ y: -1 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full py-3.5 px-6 bg-primary-600 text-white rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-primary-700 md-transition flex items-center justify-center gap-2 shadow-lg shadow-primary-500/20"
                                            >
                                                <CheckCircle2 className="w-5 h-5" /> Acknowledge
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ y: -1 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full py-3.5 px-6 bg-zinc-900 text-white rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-black md-transition flex items-center justify-between group"
                                            >
                                                <span>Promote to Incident</span>
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 md-transition" />
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ y: -1 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full py-3.5 px-6 bg-zinc-50 border border-border-subtle text-zinc-800 rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-zinc-100 md-transition flex items-center justify-center gap-2"
                                            >
                                                <Zap className="w-5 h-5 text-success-500" /> Force Resolve
                                            </motion.button>
                                        </div>

                                        {/* Neural Feedback */}
                                        <div className="bg-surface-white p-6 rounded-2xl border border-border-subtle md-elevation-1">
                                            <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Post-Analysis Pulse</h4>
                                            <textarea
                                                placeholder="Enter analyst observation..."
                                                className="w-full p-4 bg-zinc-50 border border-border-subtle rounded-xl text-[13px] font-bold text-zinc-700 placeholder:text-zinc-400 resize-none h-40 outline-none focus:bg-surface-white focus:border-primary-200 md-transition md-focus-ring"
                                            />
                                            <motion.button
                                                whileHover={{ y: -1 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full mt-3 py-3 bg-zinc-50 text-primary-600 rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-primary-50 border border-primary-500/10 md-transition flex items-center justify-center gap-2"
                                            >
                                                <Send className="w-4 h-4" /> Save Context
                                            </motion.button>
                                        </div>

                                        {/* Related Links */}
                                        <motion.button
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full p-6 bg-surface-white border border-border-subtle rounded-2xl md-elevation-1 flex items-center justify-between group hover:border-primary-200 md-transition"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center border border-border-subtle group-hover:bg-primary-50 md-transition">
                                                    <Clock className="w-5 h-5 text-zinc-400 group-hover:text-primary-600 md-transition" />
                                                </div>
                                                <div className="text-left">
                                                    <p className="text-[13px] font-black text-zinc-800 tracking-tight">Historical Context</p>
                                                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">12 Associated Signals</p>
                                                </div>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-zinc-300 group-hover:text-primary-600 md-transition" />
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
