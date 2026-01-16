import React from 'react';
import { AlertCircleIcon as ShieldAlert, UserIcon as User, ArrowDown01Icon as ChevronDown, Calendar01Icon as Calendar, LabelIcon as Hash } from 'hugeicons-react';
import { cn } from '../utils/cn';
import { motion } from 'framer-motion';

interface IncidentFiltersProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
    statusFilter: string;
    setStatusFilter: (value: string) => void;
}

export const IncidentFilters: React.FC<IncidentFiltersProps> = ({
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter
}) => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-6">
                {/* Search Bar */}
                <div className="relative flex-1 group focus-within:md-elevation-3 md-transition rounded-2xl">
                    <Hash className="absolute left-4.5 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5 group-focus-within:text-primary-600 md-transition" />
                    <input
                        type="text"
                        placeholder="SEARCH BY ID OR OPERATIONAL SIGNAL..."
                        className="w-full pl-13 pr-5 py-4 bg-zinc-50 border border-border-subtle rounded-2xl text-[13px] font-black text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-primary-300 focus:bg-surface-white md-transition md-focus-ring uppercase tracking-widest shadow-inner shadow-zinc-950/[0.02]"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Quick Filters */}
                <div className="flex flex-wrap items-center gap-4">
                    {/* Status Filter */}
                    <div className="flex bg-zinc-50/50 p-2 rounded-2xl border border-border-subtle shadow-inner">
                        {['All', 'Triage', 'In Progress', 'Resolved'].map((s) => (
                            <motion.button
                                key={s}
                                whileTap={{ scale: 0.96 }}
                                onClick={() => setStatusFilter(s)}
                                className={cn(
                                    "px-5 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl md-transition shadow-sm",
                                    statusFilter === s
                                        ? "bg-surface-white text-zinc-900 shadow-md border border-border-subtle"
                                        : "text-zinc-400 hover:text-zinc-600 border border-transparent"
                                )}
                            >
                                {s}
                            </motion.button>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <motion.button
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-3 px-6 py-3.5 bg-surface-white border border-border-subtle rounded-2xl text-zinc-600 font-black hover:bg-zinc-50 md-transition md-elevation-1 uppercase tracking-widest text-[11px]"
                        >
                            <ShieldAlert className="w-4.5 h-4.5 text-critical-500" />
                            <span>Severity</span>
                            <ChevronDown className="w-4 h-4 opacity-30" />
                        </motion.button>

                        <motion.button
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-3 px-6 py-3.5 bg-surface-white border border-border-subtle rounded-2xl text-zinc-600 font-black hover:bg-zinc-50 md-transition md-elevation-1 uppercase tracking-widest text-[11px]"
                        >
                            <User className="w-4.5 h-4.5 text-primary-600" />
                            <span>Operator</span>
                            <ChevronDown className="w-4 h-4 opacity-30" />
                        </motion.button>

                        <motion.button
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-3 px-6 py-3.5 bg-zinc-950 text-white rounded-2xl font-black hover:bg-black md-transition shadow-xl shadow-zinc-900/20 uppercase tracking-[0.2em] text-[11px]"
                        >
                            <Calendar className="w-4.5 h-4.5 text-primary-500" />
                            <span>Temporal View</span>
                        </motion.button>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-6 px-1">
                <div className="flex items-center gap-3 text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none bg-zinc-50/50 px-4 py-2 rounded-full border border-border-subtle italic">
                    <div className="w-2 h-2 rounded-full bg-warning-500 shadow-sm shadow-warning-500/50 animate-pulse" />
                    Active triage protocol engaged
                </div>
                <div className="h-px flex-1 bg-border-subtle opacity-40" />
                <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.2em] leading-none italic">Response SLA: <span className="text-warning-600 opacity-100 not-italic">15m remaining</span></p>
            </div>
        </div>
    );
};
