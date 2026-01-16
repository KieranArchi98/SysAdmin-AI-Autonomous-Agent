import React from 'react';
import { Search01Icon as Search, Database01Icon as Database, ArrowDown01Icon as ChevronDown, FilterIcon as Filter } from 'hugeicons-react';
import { cn } from '../utils/cn';

interface KBFiltersProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
    severityFilter: string;
    setSeverityFilter: (value: string) => void;
}

export const KBFilters: React.FC<KBFiltersProps> = ({
    searchTerm,
    setSearchTerm,
    severityFilter,
    setSeverityFilter
}) => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
                {/* Search Bar */}
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search tactics by name, ID or code snippets..."
                        className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm font-medium text-zinc-700 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-300 transition-all shadow-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Quick Filters */}
                <div className="flex flex-wrap items-center gap-3">
                    {/* Severity Filter */}
                    <div className="flex bg-zinc-50 p-1 rounded-lg border border-zinc-100 shadow-sm">
                        {['All', 'Critical', 'High', 'Medium', 'Low'].map((s) => (
                            <button
                                key={s}
                                onClick={() => setSeverityFilter(s)}
                                className={cn(
                                    "px-4 py-1.5 text-[11px] font-medium uppercase tracking-wider rounded-md transition-all",
                                    severityFilter === s
                                        ? "bg-white text-zinc-800 shadow-sm border border-zinc-100"
                                        : "text-zinc-400 hover:text-zinc-600"
                                )}
                            >
                                {s}
                            </button>
                        ))}
                    </div>

                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-zinc-200 rounded-lg text-zinc-600 font-medium hover:bg-zinc-50 transition-all shadow-sm">
                        <Database className="w-4 h-4 text-[#10b981]" />
                        <span className="text-[13px]">Cluster</span>
                        <ChevronDown className="w-4 h-4 opacity-50" />
                    </button>

                    <button className="flex items-center gap-2 px-5 py-2.5 bg-[#3b82f6] text-white rounded-lg font-medium hover:opacity-95 transition-all shadow-sm">
                        <Filter className="w-4 h-4" />
                        <span className="text-[13px]">Refine Tactics</span>
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-4 px-1">
                <div className="flex items-center gap-2 text-[10px] font-medium text-zinc-400 uppercase tracking-widest leading-none">
                    <div className="w-2 h-2 rounded-full bg-[#3b82f6] shadow-[0_0_8px_rgba(59,130,246,0.3)] animate-pulse" />
                    Neural training set synchronization active
                </div>
                <div className="h-px flex-1 bg-zinc-100" />
                <p className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest leading-none">1,248 Remediation Rules indexed</p>
            </div>
        </div>
    );
};
