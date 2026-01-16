
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cancel01Icon as X,
    Alert01Icon as AlertTriangle,
    CheckmarkCircle02Icon as CheckCircle2,
    Clock01Icon as Clock,
    UserIcon as User,
    ArrowRight01Icon as ArrowRight,
    AlertCircleIcon as ShieldAlert,
    Activity01Icon as Activity,
    ZapIcon as Zap,
    SentIcon as Send,
    Link01Icon as LinkIcon
} from 'hugeicons-react';
import { cn } from '../utils/cn';
import { IncidentEntry } from './IncidentTable';

interface IncidentDetailModalProps {
    incident: IncidentEntry | null;
    isOpen: boolean;
    onClose: () => void;
}

export const IncidentDetailModal: React.FC<IncidentDetailModalProps> = ({ incident, isOpen, onClose }) => {
    if (!incident) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-zinc-900/60 z-[100] backdrop-blur-sm"
                    />

                    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[101] p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: 10 }}
                            className="bg-surface-white w-full max-w-5xl max-h-[92vh] rounded-2xl shadow-2xl pointer-events-auto overflow-hidden flex flex-col border border-border-subtle md-elevation-4"
                        >
                            {/* Incident Header */}
                            <div className="px-12 py-10 bg-surface-white border-b border-border-subtle text-zinc-800 relative flex items-center justify-between overflow-hidden">
                                <div className="relative z-10 flex items-center gap-6">
                                    <div className="w-16 h-16 bg-critical-50 rounded-xl flex items-center justify-center border border-critical-500/10 shadow-sm shadow-critical-500/10">
                                        <AlertTriangle className="w-8 h-8 text-critical-600" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1.5">
                                            <h2 className="text-3xl font-black tracking-tight text-zinc-900">{incident.id}</h2>
                                            <span className="px-3 py-1 bg-critical-50 text-critical-600 rounded-lg text-[10px] font-black uppercase tracking-widest border border-critical-500/10">{incident.status}</span>
                                        </div>
                                        <p className="text-zinc-400 font-bold flex items-center gap-2 uppercase tracking-widest text-[10px]">
                                            <Clock className="w-3.5 h-3.5" /> Logged {incident.timestamp}
                                        </p>
                                    </div>
                                </div>
                                <button onClick={onClose} className="relative z-10 p-3 hover:bg-zinc-50 rounded-xl md-transition border border-transparent hover:border-border-subtle md-click-scale">
                                    <X className="w-6 h-6 text-zinc-400 hover:text-zinc-900" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-12 space-y-10 bg-surface-base custom-scrollbar">
                                {/* Main Report & Strategy */}
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                                    <div className="lg:col-span-8 space-y-10">
                                        {/* AI Summary */}
                                        <div className="bg-surface-white p-10 rounded-2xl border border-border-subtle md-elevation-1">
                                            <h4 className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest mb-6 px-1 flex items-center gap-2">
                                                <Zap className="w-4 h-4 text-warning-500" /> AI-Generated Report
                                            </h4>
                                            <p className="text-xl font-bold text-zinc-800 leading-relaxed tracking-tight">
                                                {incident.title}. Multiple heuristic markers indicate a coordinated resource exhaustion pattern across the <span className="text-critical-600">edge nodes</span>. Root cause identified as configuration drift.
                                            </p>
                                        </div>

                                        {/* Remediation Checklist */}
                                        <div className="bg-surface-white p-10 rounded-2xl border border-border-subtle md-elevation-1">
                                            <h4 className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest mb-8 px-1">Tactical Remediation Pipeline</h4>
                                            <div className="space-y-4">
                                                {[
                                                    { step: "Isolate identified edge gateway nodes", status: "Completed" },
                                                    { step: "Rotate kernel-level encryption keys", status: "Pending" },
                                                    { step: "Perform deep scan on database write-locks", status: "In Progress" },
                                                    { step: "Re-index behavioral baseline via neural engine", status: "Pending" }
                                                ].map((item, i) => (
                                                    <div key={i} className="flex items-center justify-between p-6 bg-zinc-50/50 rounded-xl border border-border-subtle group hover:border-primary-200 md-transition">
                                                        <div className="flex items-center gap-4">
                                                            <div className={cn(
                                                                "w-6 h-6 rounded-full border-2 flex items-center justify-center md-transition shadow-sm",
                                                                item.status === 'Completed' ? "bg-success-500 border-success-500 text-white" : "border-zinc-200 bg-surface-white"
                                                            )}>
                                                                {item.status === 'Completed' && <CheckCircle2 className="w-4 h-4" />}
                                                            </div>
                                                            <span className={cn("text-[15px] font-bold tracking-tight md-transition", item.status === 'Completed' ? "text-zinc-400 line-through" : "text-zinc-700")}>{item.step}</span>
                                                        </div>
                                                        <span className={cn(
                                                            "text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg border",
                                                            item.status === 'Completed' ? "bg-success-50 text-success-600 border-success-500/10" : "bg-zinc-100 text-zinc-500 border-zinc-200"
                                                        )}>{item.status}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Linked Anomalies */}
                                        <div className="bg-surface-white p-10 rounded-2xl border border-border-subtle md-elevation-1">
                                            <h4 className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest mb-6 px-1 flex items-center gap-2">
                                                <LinkIcon className="w-4 h-4 text-primary-600" /> Linked Operational Signals
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {incident.linkedAnomalies.map((anom, i) => (
                                                    <div key={i} className="p-5 bg-zinc-50/50 rounded-xl border border-border-subtle flex items-center justify-between hover:border-primary-200 md-transition cursor-pointer group">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 bg-surface-white rounded-lg flex items-center justify-center border border-border-subtle md-elevation-1 group-hover:bg-primary-50 md-transition">
                                                                <ShieldAlert className="w-5 h-5 text-critical-600" />
                                                            </div>
                                                            <span className="text-[13px] font-bold text-zinc-700 uppercase tracking-tight">{anom}</span>
                                                        </div>
                                                        <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-primary-600 md-transition" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Sidebar */}
                                    <div className="lg:col-span-4 space-y-10">
                                        {/* Actions */}
                                        <div className="bg-surface-white p-8 rounded-2xl border border-border-subtle md-elevation-1 space-y-4">
                                            <h4 className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest mb-6 px-1">Incident Control</h4>
                                            <motion.button
                                                whileHover={{ y: -1 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full py-4 px-6 bg-zinc-900 text-white rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-black md-transition flex items-center justify-between group md-elevation-1"
                                            >
                                                Mark Resolved
                                                <CheckCircle2 className="w-5 h-5 text-success-400 group-hover:scale-110 md-transition" />
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ y: -1 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full py-4 px-6 bg-primary-600 text-white rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-primary-700 md-transition flex items-center gap-3 shadow-lg shadow-primary-500/20"
                                            >
                                                <Activity className="w-5 h-5" /> Transition State
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ y: -1 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full py-4 px-6 bg-surface-white border border-border-default text-zinc-700 rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-zinc-50 md-transition flex items-center gap-3"
                                            >
                                                <User className="w-5 h-5 text-primary-600" /> Assign Operator
                                            </motion.button>
                                        </div>

                                        {/* AI Feedback */}
                                        <div className="bg-zinc-900 p-8 rounded-2xl text-white space-y-6 md-elevation-4">
                                            <h4 className="text-[12px] font-black text-warning-500 uppercase tracking-widest px-1">Heuristic Feedback</h4>
                                            <div className="relative">
                                                <textarea
                                                    placeholder="Contribute to the neural baseline..."
                                                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-sm font-bold placeholder:text-zinc-600 resize-none h-32 outline-none focus:border-warning-500/50 md-transition"
                                                />
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="absolute bottom-4 right-4 p-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 md-transition shadow-lg shadow-primary-500/20"
                                                >
                                                    <Send className="w-4 h-4" />
                                                </motion.button>
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
