import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Alert01Icon as ShieldAlert,
    RefreshIcon as RefreshCw,
    Shield01Icon as Shield
} from 'hugeicons-react';
import { AnomalyTable, AnomalyEntry } from '../components/AnomalyTable';
import { AnomalyFilters } from '../components/AnomalyFilters';
import { AnomalyDetailModal } from '../components/AnomalyDetailModal';
import { cn } from '../utils/cn';

const initialAnomalies: AnomalyEntry[] = [
    { id: 'ANOM-4422', timestamp: '2026-01-15 19:25:10', host: 'edge-gateway-02', eventID: 'PATTERN-X', type: 'Traffic Spike', severity: 'Critical', status: 'Open', confidence: '98%' },
    { id: 'ANOM-4423', timestamp: '2026-01-15 19:20:05', host: 'db-cluster-main', eventID: 'PATTERN-Y', type: 'Auth Bypass', severity: 'High', status: 'Acknowledged', confidence: '84%' },
    { id: 'ANOM-4424', timestamp: '2026-01-15 19:15:48', host: 'worker-node-04', eventID: 'PATTERN-Z', type: 'Latent Process', severity: 'Medium', status: 'Resolved', confidence: '94%' },
    { id: 'ANOM-4425', timestamp: '2026-01-15 19:10:22', host: 'api-gateway-v1', eventID: 'PATTERN-A', type: 'Resource Exhaustion', severity: 'Medium', status: 'Open', confidence: '78%' },
];

export const Anomalies = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [severityFilter, setSeverityFilter] = useState('All');
    const [selectedAnomaly, setSelectedAnomaly] = useState<AnomalyEntry | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredAnomalies = initialAnomalies.filter(anom => {
        const matchesSearch = anom.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
            anom.host.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (anom.eventID && anom.eventID.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesStatus = statusFilter === 'All' || anom.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const handleRowClick = (anomaly: AnomalyEntry) => {
        setSelectedAnomaly(anomaly);
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
                    <h2 className="text-3xl font-black text-zinc-900 tracking-tight">Security Center</h2>
                    <p className="text-zinc-500 text-[11px] mt-1.5 font-bold uppercase tracking-[0.2em] opacity-60 italic leading-relaxed">AI behavioral analysis and pattern matching</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="bg-surface-white px-6 py-4 rounded-2xl border border-border-subtle flex items-center gap-8 md-elevation-1">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">Threat Score</span>
                            <span className="text-xl font-black text-critical-600 mt-2 tracking-tight">92/100</span>
                        </div>
                        <div className="w-px h-8 bg-zinc-100" />
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">Neural Load</span>
                            <span className="text-xl font-black text-primary-600 mt-2 tracking-tight">44%</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { label: 'Active Threats', value: '12', icon: ShieldAlert, color: 'text-critical-600' },
                    { label: 'Nodes Monitored', value: '124', icon: Shield, color: 'text-primary-600' },
                    { label: 'Neural Accuracy', value: '99.4%', icon: RefreshCw, color: 'text-success-600' },
                ].map((stat, i) => (
                    <div key={i} className="p-8 rounded-2xl border border-border-subtle flex items-center gap-6 bg-surface-white md-elevation-1 hover:md-elevation-3 md-transition group">
                        <div className="w-16 h-16 bg-zinc-50 rounded-xl flex items-center justify-center border border-border-subtle shrink-0 group-hover:bg-primary-50 md-transition">
                            <stat.icon className={cn("w-7 h-7 md-transition", stat.color)} />
                        </div>
                        <div>
                            <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5">{stat.label}</p>
                            <p className="text-3xl font-black text-zinc-900 tracking-tight">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Content Section */}
            <div className="bg-surface-white rounded-2xl border border-border-subtle p-8 md:p-10 md-elevation-1">
                <AnomalyFilters
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    statusFilter={statusFilter}
                    setStatusFilter={setStatusFilter}
                    severityFilter={severityFilter}
                    setSeverityFilter={setSeverityFilter}
                />

                <div className="mt-12">
                    <AnomalyTable
                        anomalies={filteredAnomalies}
                        onRowClick={handleRowClick}
                    />
                </div>
            </div>

            <AnomalyDetailModal
                anomaly={selectedAnomaly}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </motion.div>
    );
};
