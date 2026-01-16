import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ComputerIcon as Monitor, Notification01Icon as Bell, Shield01Icon as ShieldCheck, UserIcon as User, ArrowRight01Icon as ChevronRight, RefreshIcon as RefreshCw, Activity01Icon as Activity } from 'hugeicons-react';
import { cn } from '../utils/cn';
import { LogSourceSettings } from '../components/LogSourceSettings';
import { AlertSettings } from '../components/AlertSettings';
import { AgentSettings } from '../components/AgentSettings';
import { UserSettings as UserSettingsComp } from '../components/UserSettings';
export const Settings = () => {
    const [activeTab, setActiveTab] = useState('monitoring');
    const tabs = [
        { id: 'monitoring', label: 'Telemetry Source', icon: Monitor, color: 'text-primary-500' },
        { id: 'alerts', label: 'Heuristic Logic', icon: Bell, color: 'text-warning-500' },
        { id: 'agent', label: 'AI Resonance', icon: ShieldCheck, color: 'text-success-500' },
        { id: 'user', label: 'Identity Protocol', icon: User, color: 'text-primary-600' },
    ];
    const renderContent = () => {
        switch (activeTab) {
            case 'monitoring': return _jsx(LogSourceSettings, {});
            case 'alerts': return _jsx(AlertSettings, {});
            case 'agent': return _jsx(AgentSettings, {});
            case 'user': return _jsx(UserSettingsComp, {});
            default: return _jsx(LogSourceSettings, {});
        }
    };
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "p-6 md:p-10 space-y-10 min-h-screen overflow-x-hidden", children: [_jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-6 px-2", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-4xl font-black text-zinc-900 tracking-tight", children: "Control Cluster" }), _jsx("p", { className: "text-zinc-500 text-xs mt-2 font-bold uppercase tracking-[0.2em] opacity-60 italic leading-relaxed", children: "Fine-tune the neural heartbeat of your architectural lattice" })] }), _jsx("div", { className: "flex items-center gap-4", children: _jsxs("div", { className: "bg-surface-white px-6 py-4 rounded-2xl border border-border-subtle flex items-center gap-8 md-elevation-1", children: [_jsxs("div", { className: "flex flex-col", children: [_jsx("span", { className: "text-xs font-bold text-zinc-400 uppercase tracking-widest leading-none mb-1.5", children: "Architecture" }), _jsx("span", { className: "text-sm font-black text-zinc-700 uppercase tracking-widest leading-none opacity-80", children: "v2.4.12-Stable" })] }), _jsx("div", { className: "w-px h-8 bg-zinc-100" }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-success-500 animate-pulse shadow-sm shadow-success-500/50" }), _jsx("span", { className: "text-xs font-bold text-success-600 uppercase tracking-widest", children: "Active Sink" })] })] }) })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 items-start px-2", children: [_jsxs("div", { className: "lg:col-span-3 space-y-8", children: [_jsx("div", { className: "bg-surface-white p-2 rounded-2xl border border-border-subtle md-elevation-1 space-y-1 shadow-sm", children: tabs.map((tab) => (_jsxs(motion.button, { whileHover: { x: 4 }, whileTap: { scale: 0.98 }, onClick: () => setActiveTab(tab.id), className: cn("w-full flex items-center justify-between p-3.5 rounded-xl md-transition group relative", activeTab === tab.id
                                        ? "bg-primary-50 text-primary-600"
                                        : "hover:bg-zinc-50 text-zinc-500"), children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(motion.div, { animate: {
                                                        backgroundColor: activeTab === tab.id ? 'var(--color-primary-600)' : 'var(--color-surface-white)',
                                                        color: activeTab === tab.id ? '#ffffff' : 'var(--color-border-default)'
                                                    }, className: cn("w-9 h-9 rounded-xl flex items-center justify-center md-transition md-elevation-1 border border-border-subtle"), children: _jsx(tab.icon, { className: "w-4.5 h-4.5" }) }), _jsx("span", { className: "text-xs font-black uppercase tracking-widest", children: tab.label })] }), _jsx(motion.div, { animate: {
                                                opacity: activeTab === tab.id ? 1 : 0,
                                                x: activeTab === tab.id ? 0 : -10
                                            }, children: _jsx(ChevronRight, { className: "w-4 h-4 text-primary-600" }) })] }, tab.id))) }), _jsxs("div", { className: "p-8 bg-surface-white rounded-2xl border border-border-subtle md-elevation-1 space-y-6", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Activity, { className: "w-5 h-5 text-primary-600" }), _jsx("span", { className: "text-[10px] font-black text-zinc-400 uppercase tracking-widest", children: "Instance Health" })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("div", { className: "h-1.5 w-full bg-zinc-50 rounded-full overflow-hidden border border-zinc-100 shadow-inner", children: _jsx("div", { className: "h-full bg-success-500 w-[98%] shadow-sm" }) }), _jsx("p", { className: "text-[10px] font-bold text-zinc-500 uppercase tracking-widest opacity-60", children: "98% Synchronization Delta" })] })] })] }), _jsxs("div", { className: "lg:col-span-9 bg-surface-white min-h-[660px] rounded-2xl border border-border-subtle md-elevation-1 overflow-hidden md-transition hover:md-elevation-2", children: [_jsxs("div", { className: "px-8 py-6 border-b border-border-subtle flex items-center justify-between bg-surface-white", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-1.5 h-5 bg-primary-600 rounded-full shadow-sm shadow-primary-500/50" }), _jsxs("h3", { className: "text-sm font-black text-zinc-900 uppercase tracking-widest", children: [tabs.find(t => t.id === activeTab)?.label, " Module"] })] }), _jsxs("div", { className: "flex items-center gap-3 px-4 py-2 bg-zinc-50 border border-border-subtle rounded-xl shadow-inner group", children: [_jsx(RefreshCw, { className: "w-3.5 h-3.5 text-zinc-400 group-hover:rotate-180 md-transition" }), _jsx("span", { className: "text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none", children: "Auto-save Pulse Active" })] })] }), _jsx("div", { className: "p-8 md:p-12 relative", children: _jsx(AnimatePresence, { mode: "wait", children: _jsx(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] }, children: renderContent() }, activeTab) }) })] })] })] }));
};
