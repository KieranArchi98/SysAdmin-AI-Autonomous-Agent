import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Book01Icon as BookOpen,
    RefreshIcon as RefreshCw,
    Add01Icon as Plus,
    Database01Icon as Database,
    CodeIcon as Binary,
    Shield01Icon as Shield
} from 'hugeicons-react';
import { KBTable, KBEntry } from '../components/KBTable';
import { KBFilters } from '../components/KBFilters';
import { KBDetailModal } from '../components/KBDetailModal';
import { cn } from '../utils/cn';

const initialKBEntries: KBEntry[] = [
    {
        id: 'KB-HEUR-101',
        description: 'Resource Exhaustion Mitigation (Standard)',
        remediation: '# Step 1: Isolate node\n# Step 2: Flush write-buffers\n# Step 3: Rotate JWT secrets',
        severity: 'Critical',
        lastUpdated: '2026-01-14',
        category: 'Infrastructure'
    },
    {
        id: 'KB-AUTH-202',
        description: 'Suspicious Auth Activity Remediation',
        remediation: 'lock_user_account($USER_ID)\ninvalidate_session_tokens($USER_ID)\ntrigger_manual_audit()',
        severity: 'High',
        lastUpdated: '2026-01-13',
        category: 'Security'
    },
    {
        id: 'KB-NET-303',
        description: 'Latency Outlier Correction Strategy',
        remediation: 'rebalance_gateway_traffic()\ncheck_dns_propagation()\nverify_isp_uplink()',
        severity: 'Medium',
        lastUpdated: '2026-01-12',
        category: 'Network'
    },
    {
        id: 'KB-SYS-404',
        description: 'Minor Kernel Buffer Warning Adjustments',
        remediation: 'echo 1 > /proc/sys/vm/drop_caches\nsysctl -p',
        severity: 'Low',
        lastUpdated: '2026-01-10',
        category: 'System'
    },
];

export const KB = () => {
    const [entries, setEntries] = useState<KBEntry[]>(initialKBEntries);
    const [searchTerm, setSearchTerm] = useState('');
    const [severityFilter, setSeverityFilter] = useState('All');
    const [selectedEntry, setSelectedEntry] = useState<KBEntry | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredEntries = entries.filter(entry => {
        const matchesSearch = entry.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            entry.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            entry.remediation.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSeverity = severityFilter === 'All' || entry.severity === severityFilter;
        return matchesSearch && matchesSeverity;
    });

    const handleRowClick = (entry: KBEntry) => {
        setSelectedEntry(entry);
        setIsModalOpen(true);
    };

    const handleSave = (updatedEntry: KBEntry) => {
        setEntries(prev => prev.map(e => e.id === updatedEntry.id ? updatedEntry : e));
    };

    const handleCreateNew = () => {
        const newEntry: KBEntry = {
            id: `KB-NEW-${Math.floor(Math.random() * 1000)}`,
            description: 'New Remediation Strategy',
            remediation: '# Enter instructions here...',
            severity: 'Medium',
            lastUpdated: new Date().toISOString().split('T')[0],
            category: 'Uncategorized'
        };
        setSelectedEntry(newEntry);
        setIsModalOpen(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 md:p-10 space-y-10 min-h-screen bg-surface-base"
        >
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-2">
                <div>
                    <h2 className="text-3xl font-black text-zinc-900 tracking-tight flex items-center gap-3">
                        Policy Library
                    </h2>
                    <p className="text-zinc-500 text-[11px] mt-1.5 font-bold uppercase tracking-[0.2em] opacity-60 italic leading-relaxed">Heuristic strategies and manually refined system policies</p>
                </div>

                <div className="flex items-center gap-3 px-2">
                    <motion.button
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2.5 px-6 py-3 bg-surface-white border border-border-default rounded-xl font-black text-zinc-600 hover:bg-zinc-50 hover:border-border-default md-transition md-elevation-1 text-[11px] uppercase tracking-widest"
                    >
                        <RefreshCw className="w-4 h-4" /> Global Sync
                    </motion.button>
                    <motion.button
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleCreateNew}
                        className="px-6 py-3 bg-primary-600 text-white rounded-xl font-black hover:bg-primary-700 md-transition md-elevation-1 text-[11px] uppercase tracking-widest flex items-center gap-2.5 shadow-lg shadow-primary-500/20"
                    >
                        <Plus className="w-4 h-4" /> New Strategy
                    </motion.button>
                </div>
            </div>

            {/* KB Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { label: 'Verified Tactic', value: '1.2k', icon: Shield, color: 'text-success-600', sub: 'Confidently Matched' },
                    { label: 'Cloud Node Cluster', value: '18', icon: Database, color: 'text-primary-600', sub: 'Across 4 Domains' },
                    { label: 'Logic Pattern', value: '44', icon: Binary, color: 'text-warning-600', sub: 'High Confidence' },
                ].map((stat, i) => (
                    <div key={i} className="bg-surface-white p-8 rounded-2xl border border-border-subtle md-elevation-1 hover:md-elevation-3 md-transition flex items-center gap-6 group">
                        <div className="w-16 h-16 bg-zinc-50 rounded-xl flex items-center justify-center border border-border-subtle shrink-0 group-hover:bg-primary-50 md-transition">
                            <stat.icon className={cn("w-7 h-7 md-transition", stat.color)} />
                        </div>
                        <div className="min-w-0">
                            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none mb-1.5">{stat.label}</p>
                            <p className="text-3xl font-black text-zinc-900 leading-none tracking-tighter">{stat.value}</p>
                            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-2 truncate opacity-60">{stat.sub}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Content Section */}
            <div className="bg-surface-white rounded-2xl border border-border-subtle md-elevation-1 overflow-hidden">
                <div className="px-8 py-6 border-b border-border-subtle flex items-center justify-between bg-surface-white">
                    <h3 className="text-sm font-black text-zinc-900 flex items-center gap-3 uppercase tracking-widest">
                        <BookOpen className="w-4 h-4 text-primary-600" />
                        Tactical Repository
                    </h3>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-success-500 shadow-sm shadow-success-500/50" />
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest opacity-60">Version v2.4.0 active</span>
                    </div>
                </div>

                <div className="p-8 md:p-10 space-y-12">
                    <KBFilters
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        severityFilter={severityFilter}
                        setSeverityFilter={setSeverityFilter}
                    />

                    <div className="mt-8">
                        <KBTable
                            entries={filteredEntries}
                            onRowClick={handleRowClick}
                        />
                    </div>
                </div>
            </div>

            <KBDetailModal
                entry={selectedEntry}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
            />
        </motion.div>
    );
};
