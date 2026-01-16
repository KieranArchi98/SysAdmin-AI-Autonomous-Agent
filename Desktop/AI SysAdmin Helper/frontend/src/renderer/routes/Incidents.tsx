import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Alert01Icon as AlertTriangle,
    RefreshIcon as RefreshCw,
    Add01Icon as Plus,
    FilterIcon as Filter,
    Activity01Icon as Activity,
    Shield01Icon as Shield
} from 'hugeicons-react';
import { IncidentTable, IncidentEntry } from '../components/IncidentTable';
import { IncidentFilters } from '../components/IncidentFilters';
import { IncidentDetailModal } from '../components/IncidentDetailModal';
import { cn } from '../utils/cn';

const initialIncidents: IncidentEntry[] = [
    { id: 'INC-2026-001', title: 'Critical Resource Exhaustion in Cluster A', severity: 'Critical', status: 'In Progress', assignedTo: 'Kieran (AI)', timestamp: '2026-01-15 14:30:00', linkedAnomalies: ['ANOM-4422', 'ANOM-4425'], description: 'Memory usage exceeded 95% on worker nodes, triggering pod evictions.' },
    { id: 'INC-2026-002', title: 'Suspicious Auth Activity on Database Nodes', severity: 'High', status: 'Open', assignedTo: 'Security Team', timestamp: '2026-01-15 15:45:12', linkedAnomalies: ['ANOM-4423'], description: 'Multiple failed login attempts detected from unknown IP subnet.' },
    { id: 'INC-2026-003', title: 'Latent Process Execution on Worker-04', severity: 'Medium', status: 'Resolved', assignedTo: 'System Admin', timestamp: '2026-01-15 16:10:05', linkedAnomalies: ['ANOM-4424'], description: 'Unidentified process eating CPU cycles during off-peak hours.' },
    { id: 'INC-2026-004', title: 'Minor Network Latency Outlier', severity: 'Low', status: 'Closed', assignedTo: 'Automated Bot', timestamp: '2026-01-15 17:30:48', linkedAnomalies: [], description: 'Brief spike in latency detected on edge gateway.' },
];

export const Incidents = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [selectedIncident, setSelectedIncident] = useState<IncidentEntry | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredIncidents = initialIncidents.filter(inc => {
        const matchesSearch = inc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            inc.id.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All' || inc.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const handleRowClick = (incident: IncidentEntry) => {
        setSelectedIncident(incident);
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
                        Operation Center
                    </h2>
                    <p className="text-zinc-500 text-[11px] mt-1.5 font-bold uppercase tracking-[0.2em] opacity-60 italic leading-relaxed">Coordinate recovery and track remediation for AI-identified system breaches</p>
                </div>

                <div className="flex items-center gap-3 px-2">
                    <motion.button
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2.5 px-6 py-3 bg-surface-white border border-border-default rounded-xl text-zinc-600 font-black hover:bg-zinc-50 hover:border-border-default md-transition md-elevation-1 text-[11px] uppercase tracking-widest"
                    >
                        <Filter className="w-4 h-4" /> Filter Stack
                    </motion.button>
                    <motion.button
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2.5 px-6 py-3 bg-primary-600 text-white rounded-xl font-black hover:bg-primary-700 md-transition md-elevation-1 text-[11px] uppercase tracking-widest shadow-lg shadow-primary-500/20"
                    >
                        <Plus className="w-4 h-4" /> Manual Log
                    </motion.button>
                </div>
            </div>

            {/* Triage Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { label: 'Unassigned', value: '3', color: 'text-critical-600', sub: 'Requires Triage', icon: AlertTriangle },
                    { label: 'Active Pipeline', value: '8', color: 'text-primary-600', sub: 'Currently Processing', icon: Activity },
                    { label: 'Closed Today', value: '14', color: 'text-success-600', sub: 'Post-Mortem Ready', icon: Shield },
                    { label: 'Avg Delta', value: '42m', color: 'text-zinc-900', sub: 'Time-to-Resolution', icon: RefreshCw }
                ].map((stat, i) => (
                    <div key={i} className="bg-surface-white p-6 rounded-2xl border border-border-subtle md-elevation-1 hover:md-elevation-3 md-transition flex flex-col gap-1 group">
                        <div className="flex items-center justify-between mb-4 px-1">
                            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{stat.label}</p>
                            <div className="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center border border-border-subtle group-hover:bg-primary-50 md-transition">
                                <stat.icon className={cn("w-4 h-4 md-transition", stat.color)} />
                            </div>
                        </div>
                        <p className={cn("text-3xl font-black tracking-tighter px-1", stat.color)}>{stat.value}</p>
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1 mt-2 opacity-60">{stat.sub}</p>
                    </div>
                ))}
            </div>

            {/* Content Section */}
            <div className="bg-surface-white rounded-2xl border border-border-subtle md-elevation-1 overflow-hidden">
                <div className="px-8 py-6 border-b border-border-subtle flex items-center justify-between bg-surface-white">
                    <h3 className="text-sm font-black text-zinc-900 flex items-center gap-3 uppercase tracking-widest">
                        <AlertTriangle className="w-4 h-4 text-critical-600" />
                        Operational Workflows
                    </h3>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-critical-500 animate-pulse shadow-sm shadow-critical-500/50" />
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest opacity-60">Real-time sync active</span>
                    </div>
                </div>

                <div className="p-8 md:p-10 space-y-12">
                    <IncidentFilters
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        statusFilter={statusFilter}
                        setStatusFilter={setStatusFilter}
                    />

                    <div className="mt-8 overflow-hidden">
                        <IncidentTable
                            incidents={filteredIncidents}
                            onRowClick={handleRowClick}
                        />
                    </div>
                </div>
            </div>

            <IncidentDetailModal
                incident={selectedIncident}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </motion.div>
    );
};
