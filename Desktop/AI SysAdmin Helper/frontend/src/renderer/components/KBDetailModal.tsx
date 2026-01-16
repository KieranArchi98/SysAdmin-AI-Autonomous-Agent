import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cancel01Icon as X,
    Tick01Icon as Save,
    Delete02Icon as Trash2,
    Shield01Icon as ShieldCheck,
    Activity01Icon as Activity,
    ZapIcon as Zap,
    Database01Icon as Database
} from 'hugeicons-react';
import { cn } from '../utils/cn';
import { KBEntry } from './KBTable';

interface KBDetailModalProps {
    entry: KBEntry | null;
    isOpen: boolean;
    onClose: () => void;
    onSave: (entry: KBEntry) => void;
}

export const KBDetailModal: React.FC<KBDetailModalProps> = ({ entry, isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState<KBEntry | null>(null);

    useEffect(() => {
        if (entry) {
            setFormData({ ...entry });
        }
    }, [entry]);

    if (!formData) return null;

    const handleSave = () => {
        onSave(formData);
        onClose();
    };

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
                            {/* KB Header */}
                            <div className="px-10 py-8 bg-surface-white border-b border-border-subtle text-zinc-800 relative flex items-center justify-between overflow-hidden">
                                <div className="relative z-10 flex items-center gap-6">
                                    <div className="w-16 h-16 bg-zinc-50 rounded-xl flex items-center justify-center border border-border-subtle">
                                        <Database className="w-8 h-8 text-primary-600" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h2 className="text-2xl font-black tracking-tight leading-none text-zinc-900">{formData.id}</h2>
                                            <span className="px-2.5 py-1 bg-zinc-100 border border-border-subtle rounded-lg text-[10px] font-bold uppercase tracking-widest leading-none text-zinc-400">{formData.category}</span>
                                        </div>
                                        <p className="text-zinc-400 font-bold flex items-center gap-2 uppercase tracking-widest text-[10px] leading-none">
                                            <ShieldCheck className="w-3.5 h-3.5 text-primary-600" /> Heuristic Policy Master Entry
                                        </p>
                                    </div>
                                </div>
                                <button onClick={onClose} className="relative z-10 p-3 hover:bg-zinc-50 rounded-xl md-transition border border-transparent hover:border-border-subtle md-click-scale group">
                                    <X className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-10 space-y-10 bg-surface-base custom-scrollbar">
                                {/* Editor Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                                    <div className="lg:col-span-8 space-y-8">
                                        {/* Description Editor */}
                                        <div className="bg-surface-white p-8 rounded-2xl border border-border-subtle md-elevation-1">
                                            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4 block px-1">Operational Context</label>
                                            <textarea
                                                className="w-full text-xl font-bold text-zinc-800 leading-relaxed bg-zinc-50 border border-border-subtle rounded-xl p-6 focus:bg-surface-white md-transition md-focus-ring outline-none placeholder:text-zinc-300 min-h-[100px] resize-none tracking-tight"
                                                value={formData.description}
                                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                placeholder="Enter technical details and background..."
                                            />
                                        </div>

                                        {/* Remediation Editor */}
                                        <div className="bg-surface-white p-8 rounded-2xl border border-border-subtle md-elevation-1">
                                            <div className="flex items-center justify-between mb-6 px-1">
                                                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Autonomous Logic Pipeline</label>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-success-500 animate-pulse" />
                                                    <span className="text-[10px] font-black text-success-600 uppercase tracking-widest">AI Scripting Active</span>
                                                </div>
                                            </div>
                                            <div className="relative group">
                                                <div className="absolute inset-0 bg-zinc-900 rounded-2xl -m-0.5 border border-zinc-900 pointer-events-none" />
                                                <textarea
                                                    className="relative w-full min-h-[300px] p-8 bg-transparent text-success-500 font-mono text-[13px] leading-relaxed outline-none transition-all custom-scrollbar selection:bg-success-500/10"
                                                    value={formData.remediation}
                                                    onChange={(e) => setFormData({ ...formData, remediation: e.target.value })}
                                                    placeholder="Enter recovery commands..."
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sidebar Metadata */}
                                    <div className="lg:col-span-4 space-y-8">
                                        {/* Configuration */}
                                        <div className="bg-surface-white p-6 rounded-2xl border border-border-subtle md-elevation-1 space-y-6">
                                            <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4 px-1 leading-none">Heuristic Class</h4>

                                            <div className="grid grid-cols-2 gap-2">
                                                {['Critical', 'High', 'Medium', 'Low'].map((sev) => (
                                                    <button
                                                        key={sev}
                                                        onClick={() => setFormData({ ...formData, severity: sev as any })}
                                                        className={cn(
                                                            "px-4 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest border md-transition",
                                                            formData.severity === sev
                                                                ? "bg-primary-50 border-primary-500/10 text-primary-600 shadow-sm"
                                                                : "bg-surface-white border-zinc-100 text-zinc-400 hover:bg-zinc-50"
                                                        )}
                                                    >
                                                        {sev}
                                                    </button>
                                                ))}
                                            </div>

                                            <div className="pt-4 border-t border-border-subtle">
                                                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1 mb-3 leading-none">Policy Status</p>
                                                <div className="flex items-center gap-3 p-4 bg-success-50/50 rounded-xl border border-success-500/10">
                                                    <ShieldCheck className="w-5 h-5 text-success-600" />
                                                    <div>
                                                        <p className="text-[11px] font-bold text-zinc-800 uppercase tracking-widest leading-none">Verified Policy</p>
                                                        <p className="text-[10px] font-bold text-success-600 mt-1.5 italic">Modified {formData.lastUpdated}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="bg-surface-white p-6 rounded-2xl border border-border-subtle md-elevation-1 space-y-3">
                                            <motion.button
                                                whileHover={{ y: -1 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={handleSave}
                                                className="w-full py-4 px-6 bg-primary-600 text-white rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-primary-700 md-transition flex items-center justify-between group shadow-lg shadow-primary-500/20"
                                            >
                                                Push to Registry
                                                <Save className="w-5 h-5 group-hover:scale-110 md-transition" />
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ y: -1 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full py-4 px-6 bg-zinc-50 border border-border-subtle text-zinc-700 rounded-xl font-bold text-[11px] uppercase tracking-widest hover:bg-zinc-800 hover:text-white md-transition flex items-center gap-3"
                                            >
                                                <Activity className="w-4 h-4 text-primary-600" /> Associate Signal
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ y: -1 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full py-4 px-6 bg-critical-50 border border-critical-500/10 text-critical-600 rounded-xl font-bold text-[11px] uppercase tracking-widest hover:bg-critical-600 hover:text-white md-transition flex items-center gap-3"
                                            >
                                                <Trash2 className="w-4 h-4" /> Purge Tactic
                                            </motion.button>
                                        </div>

                                        {/* AI Alignment */}
                                        <div className="bg-surface-white p-6 rounded-2xl border border-border-subtle md-elevation-1">
                                            <div className="flex items-center justify-between mb-4 px-1">
                                                <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">Neural Confidence</h4>
                                                <Zap className="w-3.5 h-3.5 text-warning-500" />
                                            </div>
                                            <div className="flex items-center gap-4 p-4 bg-zinc-50 rounded-xl border border-zinc-50">
                                                <div className="flex-1">
                                                    <div className="h-1.5 w-full bg-zinc-200 rounded-full overflow-hidden mb-2">
                                                        <div className="h-full bg-success-500 w-[94.2%] shadow-sm" />
                                                    </div>
                                                    <p className="text-[11px] font-bold text-zinc-500 tracking-tight">
                                                        Heuristic Accuracy: <span className="text-zinc-800 font-bold">94.2%</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
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
