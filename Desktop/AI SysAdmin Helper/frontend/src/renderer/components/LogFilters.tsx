import React from 'react';
import { motion } from 'framer-motion';
import { Search01Icon as Search, Calendar01Icon as Calendar, Shield01Icon as Shield, Database01Icon as Database, ArrowDown01Icon as ChevronDown, Activity01Icon as Activity } from 'hugeicons-react';
import { cn } from '../utils/cn';

interface LogFiltersProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
    severityFilter: string;
    setSeverityFilter: (value: string) => void;
}

export const LogFilters: React.FC<LogFiltersProps> = ({
    searchTerm,
    setSearchTerm,
    severityFilter,
    setSeverityFilter
}) => {
    return (
        <div className="space-y-6">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 bg-white p-2 rounded-xl border border-zinc-100/50 md-elevation-1 focus-within:md-elevation-2 md-transition"
            >
                {/* Search Bar */}
                <div className="relative flex-1 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4 group-focus-within:text-blue-500 md-transition" />
                    <motion.input
                        whileHover={{ scale: 1.005 }}
                        type="text"
                        placeholder="Filter payloads by node, ID, or content..."
                        className="w-full pl-11 pr-4 py-3 bg-[#f9fafb] border border-transparent rounded-lg text-sm font-bold text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-blue-100 focus:shadow-sm md-transition md-focus-ring"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Quick Filters */}
                <div className="flex flex-wrap items-center gap-3 pr-2">
                    <div className="flex bg-[#f9fafb] p-1 rounded-xl border border-zinc-100">
                        {['All', 'High', 'Medium', 'Low'].map((s) => (
                            <motion.button
                                key={s}
                                whileTap={{ scale: 0.96 }}
                                onClick={() => setSeverityFilter(s)}
                                className={cn(
                                    "px-4 py-1.5 text-[11px] font-black uppercase tracking-widest rounded-lg transition-all",
                                    severityFilter === s
                                        ? "bg-white text-blue-600 shadow-sm border border-zinc-100"
                                        : "text-zinc-400 hover:text-zinc-600"
                                )}
                            >
                                {s}
                            </motion.button>
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-white border border-zinc-200 rounded-xl text-zinc-600 font-bold hover:bg-[#f9fafb] transition-all md-elevation-1"
                    >
                        <Database className="w-4 h-4 text-[#3b82f6]" />
                        <span className="text-[11px] uppercase tracking-widest">Host</span>
                        <ChevronDown className="w-4 h-4 opacity-50" />
                    </motion.button>

                    <motion.button
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-white border border-zinc-200 rounded-xl text-zinc-600 font-bold hover:bg-[#f9fafb] transition-all md-elevation-1"
                    >
                        <Shield className="w-4 h-4 text-[#3b82f6]" />
                        <span className="text-[11px] uppercase tracking-widest">Source</span>
                        <ChevronDown className="w-4 h-4 opacity-50" />
                    </motion.button>

                    <motion.button
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white rounded-xl font-bold hover:bg-black transition-all shadow-lg shadow-zinc-900/10"
                    >
                        <Calendar className="w-4 h-4" />
                        <span className="text-[11px] uppercase tracking-widest">Pipeline</span>
                    </motion.button>
                </div>
            </motion.div>

            <div className="flex items-center gap-4 px-1">
                <div className="flex items-center gap-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none">
                    <Activity className="w-3 h-3 text-[#2ac12a] animate-pulse" />
                    Observability Tunnel active
                </div>
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    className="h-px flex-1 bg-zinc-100 origin-left"
                />
                <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.2em] leading-none">Last sync 14ms ago</p>
            </div>
        </div>
    );
};
