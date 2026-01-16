import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cancel01Icon as X, AlertCircleIcon as ShieldAlert, SentIcon as Send, Bookmark02Icon as Bookmark, Link01Icon as ExternalLink, Clock01Icon as Clock, CodeIcon as Terminal } from 'hugeicons-react';
import { cn } from '../utils/cn';
import { LogEntry } from './LogTable';

interface LogDetailModalProps {
    log: LogEntry | null;
    isOpen: boolean;
    onClose: () => void;
}

export const LogDetailModal: React.FC<LogDetailModalProps> = ({ log, isOpen, onClose }) => {
    if (!log) return null;

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
                            className="bg-surface-white w-full max-w-4xl max-h-[85vh] rounded-2xl border border-border-subtle md-elevation-4 pointer-events-auto overflow-hidden flex flex-col"
                        >
                            {/* Header */}
                            <div className="px-10 py-8 border-b border-border-subtle flex items-center justify-between bg-surface-white">
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 bg-zinc-50 rounded-xl flex items-center justify-center border border-border-subtle">
                                        <ShieldAlert className={cn(
                                            "w-7 h-7",
                                            log.severity === 'Critical' ? "text-critical-600" :
                                                log.severity === 'High' ? "text-warning-600" : "text-primary-600"
                                        )} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h2 className="text-2xl font-black text-zinc-900 tracking-tight">Trace Visualization</h2>
                                            <span className="px-2 py-0.5 bg-zinc-100 border border-border-subtle rounded-lg text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">{log.id}</span>
                                        </div>
                                        <p className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest leading-none flex items-center gap-2">
                                            <Terminal className="w-3.5 h-3.5 text-primary-600" /> Operational Context Capture
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

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-10 space-y-8 bg-surface-base custom-scrollbar">
                                {/* Core Message Card */}
                                <div className="bg-surface-white border border-border-subtle rounded-2xl p-8 md-elevation-1">
                                    <div className="flex items-center gap-2 mb-4 text-[10px] font-bold text-primary-600 uppercase tracking-[0.2em]">
                                        <Clock className="w-3.5 h-3.5" /> Payload Captured {log.timestamp}
                                    </div>
                                    <p className="text-xl font-bold text-zinc-800 leading-relaxed italic tracking-tight">
                                        "{log.message}"
                                    </p>
                                </div>

                                {/* Attributes */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <h4 className="flex items-center gap-2 text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em] px-1">
                                            Telemetry Metadata
                                        </h4>
                                        <div className="bg-surface-white rounded-2xl p-6 space-y-1 border border-border-subtle md-elevation-1">
                                            {[
                                                { label: 'Origin Host', value: log.host },
                                                { label: 'Audit Severity', value: log.severity },
                                                { label: 'Domain Layer', value: 'Observation' },
                                                { label: 'Ingest Status', value: 'Verified' },
                                            ].map((attr, i) => (
                                                <div key={i} className="flex justify-between items-center py-3 border-b border-zinc-50 last:border-0">
                                                    <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">{attr.label}</span>
                                                    <span className="text-[13px] font-bold text-zinc-800 font-mono">{attr.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="flex items-center gap-2 text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em] px-1">
                                            Correlation Engine
                                        </h4>
                                        <div className="bg-surface-white rounded-2xl p-6 border border-border-subtle md-elevation-1">
                                            <div className="p-4 bg-zinc-50 rounded-xl border border-border-subtle flex items-center justify-between group cursor-pointer hover:border-primary-200 md-transition">
                                                <div>
                                                    <p className="text-[13px] font-bold text-zinc-900 tracking-tight">Pattern #ANM-902</p>
                                                    <p className="text-[10px] font-bold text-primary-600 uppercase tracking-widest mt-0.5">Matched Heuristic</p>
                                                </div>
                                                <ExternalLink className="w-4 h-4 text-zinc-300 group-hover:text-primary-600 md-transition" />
                                            </div>
                                            <div className="mt-4 p-4 bg-success-50/50 rounded-xl border border-success-500/10">
                                                <p className="text-[13px] font-bold text-success-700 leading-relaxed tracking-tight">
                                                    Confidence Match: <span className="text-success-800">98.2%</span>. Signature aligns with known performance bottlenecks.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Parsed Fields JSON Tree */}
                                <div className="space-y-4 pb-4">
                                    <h4 className="flex items-center gap-2 text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em] px-1">
                                        Raw Observation Segment
                                    </h4>
                                    <div className="bg-zinc-900 rounded-2xl p-6 md-elevation-1 overflow-x-auto border border-zinc-800">
                                        <pre className="text-emerald-400 text-xs font-mono leading-relaxed">
                                            {JSON.stringify({
                                                observation: {
                                                    host: log.host,
                                                    id: log.id,
                                                    layer: "telemetry",
                                                    integrity: "verified",
                                                    pulse: `trc-${log.id.toLowerCase()}`
                                                },
                                                payload: {
                                                    segment: log.message,
                                                    iso_captured: new Date(log.timestamp).toISOString(),
                                                    rank_weight: log.severity === 'Critical' ? 0.95 : 0.45
                                                },
                                                heuristics: {
                                                    pattern: "auth_v4_success",
                                                    delta: 0.982
                                                }
                                            }, null, 4)}
                                        </pre>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <div className="px-10 py-6 border-t border-border-subtle bg-surface-white flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <motion.button
                                        whileHover={{ y: -1 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex items-center gap-2 px-6 py-2.5 bg-primary-600 text-white rounded-xl text-[12px] font-bold uppercase tracking-widest hover:bg-primary-700 md-transition shadow-lg shadow-primary-500/20"
                                    >
                                        <Bookmark className="w-4 h-4" /> Pin Trace
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ y: -1 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex items-center gap-2 px-6 py-2.5 bg-surface-white border border-border-default rounded-xl text-zinc-600 text-[12px] font-bold uppercase tracking-widest hover:bg-zinc-50 md-transition"
                                    >
                                        <Send className="w-4 h-4" /> Dispatch Report
                                    </motion.button>
                                </div>
                                <motion.button
                                    whileHover={{ y: -1 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={onClose}
                                    className="px-10 py-2.5 bg-zinc-900 text-white rounded-xl text-[12px] font-bold uppercase tracking-widest hover:bg-black md-transition md-elevation-1"
                                >
                                    Dismiss
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
