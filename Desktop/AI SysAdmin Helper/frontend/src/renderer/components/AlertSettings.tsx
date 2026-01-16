import React, { useState } from 'react';
import {
    Message01Icon as Slack,
    Mail01Icon as Mail,
    AlertCircleIcon as ShieldAlert,
    ArrowRight01Icon as ChevronRight,
    Tick01Icon as Save,
    SentIcon as Send,
    Activity01Icon as Activity
} from 'hugeicons-react';
import { cn } from '../utils/cn';
import { motion } from 'framer-motion';

export const AlertSettings: React.FC = () => {
    const [slackUrl, setSlackUrl] = useState('https://hooks.slack.com/services/T123/B456/XYZ');
    const [email, setEmail] = useState('admin@edaca.systems');
    const [threshold, setThreshold] = useState('High');

    return (
        <div className="space-y-10">
            <div className="px-1">
                <h3 className="text-xl font-black text-zinc-900 tracking-tight leading-none mb-2.5">Notification Pipelines</h3>
                <p className="text-zinc-500 font-bold text-[11px] uppercase tracking-widest opacity-60">Where should the AI broadcast critical system reports?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Slack Config */}
                <div className="p-10 bg-surface-white rounded-2xl border border-border-subtle md-elevation-1 space-y-8 group hover:md-elevation-3 md-transition">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-white border border-black/10 shadow-lg shadow-zinc-900/10">
                                <Slack className="w-6 h-6" />
                            </div>
                            <h4 className="font-black text-zinc-800 text-lg tracking-tight">Slack Sink</h4>
                        </div>
                        <span className="px-3 py-1 bg-success-50 text-success-600 text-[9px] font-black uppercase tracking-widest rounded-lg border border-success-500/10 leading-none shadow-sm">Active</span>
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1 opacity-60 italic">Webhook Protocol URL</label>
                        <input
                            type="text"
                            className="w-full p-5 bg-zinc-50 border border-border-subtle rounded-xl text-sm font-black text-zinc-700 outline-none focus:border-primary-300 focus:bg-surface-white md-transition shadow-inner"
                            value={slackUrl}
                            onChange={(e) => setSlackUrl(e.target.value)}
                        />
                    </div>
                    <motion.button
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-zinc-900 text-white rounded-xl font-black text-[12px] uppercase tracking-widest hover:bg-black md-transition flex items-center justify-center gap-3 shadow-lg shadow-zinc-900/10"
                    >
                        Force Test Signal <ChevronRight className="w-4 h-4 opacity-40" />
                    </motion.button>
                </div>

                {/* Email Config */}
                <div className="p-10 bg-surface-white rounded-2xl border border-border-subtle md-elevation-1 space-y-8 group hover:md-elevation-3 md-transition">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center text-primary-600 border border-border-subtle group-hover:bg-primary-50 md-transition">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h4 className="font-black text-zinc-800 text-lg tracking-tight">Email Dispatch</h4>
                        </div>
                        <span className="px-3 py-1 bg-zinc-100 text-zinc-400 text-[9px] font-black uppercase tracking-widest rounded-lg border border-zinc-200 leading-none">Sync Pending</span>
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1 opacity-60 italic">Dispatch Destination</label>
                        <input
                            type="email"
                            className="w-full p-5 bg-zinc-50 border border-border-subtle rounded-xl text-sm font-black text-zinc-700 outline-none focus:border-primary-300 focus:bg-surface-white md-transition shadow-inner"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="alerts@example.com"
                        />
                    </div>
                    <motion.button
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-surface-white border border-border-subtle text-zinc-600 rounded-xl font-black text-[12px] uppercase tracking-widest hover:bg-zinc-50 md-transition flex items-center justify-center gap-3 md-elevation-1"
                    >
                        Verify SMTP Handshake <Send className="w-4 h-4 opacity-40" />
                    </motion.button>
                </div>
            </div>

            {/* Severity Thresholds */}
            <div className="bg-surface-white rounded-2xl p-10 border border-border-subtle md-elevation-1 relative overflow-hidden group hover:md-elevation-3 md-transition">
                <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                    <div className="lg:w-1/3 space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-warning-50 rounded-xl flex items-center justify-center border border-warning-500/10">
                                <ShieldAlert className="w-5 h-5 text-warning-600" />
                            </div>
                            <h4 className="text-xl font-black text-zinc-900 tracking-tight uppercase">Logic Gate</h4>
                        </div>
                        <p className="text-[13px] text-zinc-400 font-bold leading-relaxed opacity-80 uppercase tracking-tight">Define the minimum heuristic severity required to trigger an external broadcast signal.</p>
                    </div>

                    <div className="lg:w-2/3 flex flex-col justify-center gap-8">
                        <div className="flex items-center justify-between bg-zinc-50 p-2 rounded-2xl border border-border-subtle shadow-inner">
                            {['Critical', 'High', 'Medium', 'Low'].map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setThreshold(s)}
                                    className={cn(
                                        "flex-1 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                                        threshold === s
                                            ? "bg-surface-white text-zinc-900 shadow-sm border border-border-subtle"
                                            : "text-zinc-400 hover:text-zinc-600"
                                    )}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-4 px-2">
                            <Activity className="w-4 h-4 text-primary-600 animate-pulse" />
                            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none opacity-60">
                                Active Strategy: Routing <span className="text-zinc-900">{threshold}+</span> events to synchronized channels
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-6">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-primary-600 text-white rounded-xl font-black uppercase tracking-widest text-[13px] hover:bg-primary-700 md-transition flex items-center gap-4 shadow-xl shadow-primary-500/20"
                >
                    <Save className="w-6 h-6" /> Sync Logic
                </motion.button>
            </div>
        </div>
    );
};
