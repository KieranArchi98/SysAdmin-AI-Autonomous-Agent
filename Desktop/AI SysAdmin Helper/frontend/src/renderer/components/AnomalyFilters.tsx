import React from 'react';
import { motion } from 'framer-motion';
import { Search01Icon as Search, Database01Icon as Database, ArrowDown01Icon as ChevronDown, Calendar01Icon as Calendar, Activity01Icon as Activity } from 'hugeicons-react';
import { cn } from '../utils/cn';

interface AnomalyFiltersProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
    statusFilter: string;
    setStatusFilter: (value: string) => void;
    severityFilter: string;
    setSeverityFilter: (value: string) => void;
}

export const AnomalyFilters: React.FC<AnomalyFiltersProps> = ({
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    severityFilter,
    setSeverityFilter,
}) => {
    return (
        <div className="space-y-6">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-surface-white p-2 rounded-xl border border-border-subtle flex flex-col lg:flex-row items-stretch lg:items-center gap-4 md-elevation-1 focus-within:md-elevation-2 md-transition"
            >
                {/* Search Bar */}
                <div className="relative flex-1 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4 group-focus-within:text-primary-600 md-transition" />
                    <motion.input
                        whileHover={{ scale: 1.005 }}
                        type="text"
                        placeholder="Search by ID, keyword, or node..."
                        className="w-full pl-11 pr-4 py-2.5 bg-zinc-50 border border-transparent rounded-lg text-sm text-zinc-700 font-normal placeholder:text-zinc-400 focus:outline-none focus:bg-surface-white focus:border-primary-200 focus:shadow-sm md-transition md-focus-ring"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Quick Filters */}
                <div className="flex flex-wrap items-center gap-2 pr-2">
                    {/* Status Filter */}
                    <div className="flex bg-zinc-50 p-1 rounded-lg border border-border-subtle">
                        {['All', 'Open', 'Acknowledged', 'Resolved'].map((s) => (
                            <motion.button
                                key={s}
                                whileTap={{ scale: 0.96 }}
                                onClick={() => setStatusFilter(s)}
                                className={cn(
                                    "px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-md transition-all",
                                    statusFilter === s
                                        ? "bg-surface-white text-primary-600 shadow-sm border border-border-subtle"
                                        : "text-zinc-500 hover:text-zinc-700"
                                )}
                            >
                                {s}
                            </motion.button>
                        ))}
                    </div>

                    <div className="bg-zinc-50 p-1 rounded-lg border border-border-subtle flex">
                        {['All', 'Critical', 'High', 'Medium', 'Low'].map((sev) => (
                            <motion.button
                                key={sev}
                                whileTap={{ scale: 0.96 }}
                                onClick={() => setSeverityFilter(sev)}
                                className={cn(
                                    "px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-md transition-all",
                                    severityFilter === sev
                                        ? "bg-surface-white text-primary-600 shadow-sm border border-border-subtle"
                                        : "text-zinc-500 hover:text-zinc-700"
                                )}
                            >
                                {sev}
                            </motion.button>
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-4 py-2 bg-surface-white border border-zinc-200 rounded-lg text-zinc-700 text-xs font-bold uppercase tracking-widest hover:bg-zinc-50 transition-all md-elevation-1"
                    >
                        <Database className="w-3.5 h-3.5 text-primary-600" />
                        <span>Host</span>
                        <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                    </motion.button>

                    <motion.button
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-primary-700 transition-all md-elevation-1 shadow-lg shadow-primary-500/20"
                    >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Timeline</span>
                    </motion.button>
                </div>
            </motion.div>

            <div className="flex items-center gap-4 px-2">
                <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">
                    <Activity className="w-3 h-3 text-primary-600" />
                    AI Heuristic Correlation active
                </div>
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    className="h-px flex-1 bg-border-subtle origin-left"
                />
                <p className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.2em] leading-none">Heuristic v2.4a</p>
            </div>
        </div>
    );
};
