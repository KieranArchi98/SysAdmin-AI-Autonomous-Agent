import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Alert01Icon as ShieldAlert, RefreshIcon as RefreshCw, Shield01Icon as Shield } from 'hugeicons-react';
import { AnomalyTable } from '../components/AnomalyTable';
import { AnomalyFilters } from '../components/AnomalyFilters';
import { AnomalyDetailModal } from '../components/AnomalyDetailModal';
import { cn } from '../utils/cn';
const initialAnomalies = [
    { id: 'ANOM-4422', timestamp: '2026-01-15 19:25:10', host: 'edge-gateway-02', eventID: 'PATTERN-X', type: 'Traffic Spike', severity: 'Critical', status: 'Open', confidence: '98%' },
    { id: 'ANOM-4423', timestamp: '2026-01-15 19:20:05', host: 'db-cluster-main', eventID: 'PATTERN-Y', type: 'Auth Bypass', severity: 'High', status: 'Acknowledged', confidence: '84%' },
    { id: 'ANOM-4424', timestamp: '2026-01-15 19:15:48', host: 'worker-node-04', eventID: 'PATTERN-Z', type: 'Latent Process', severity: 'Medium', status: 'Resolved', confidence: '94%' },
    { id: 'ANOM-4425', timestamp: '2026-01-15 19:10:22', host: 'api-gateway-v1', eventID: 'PATTERN-A', type: 'Resource Exhaustion', severity: 'Medium', status: 'Open', confidence: '78%' },
];
export const Anomalies = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [severityFilter, setSeverityFilter] = useState('All');
    const [selectedAnomaly, setSelectedAnomaly] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const filteredAnomalies = initialAnomalies.filter(anom => {
        const matchesSearch = anom.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
            anom.host.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (anom.eventID && anom.eventID.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesStatus = statusFilter === 'All' || anom.status === statusFilter;
        return matchesSearch && matchesStatus;
    });
    const handleRowClick = (anomaly) => {
        setSelectedAnomaly(anomaly);
        setIsModalOpen(true);
    };
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "p-6 md:p-10 space-y-10 min-h-screen bg-surface-base", children: [_jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-6 px-2", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-3xl font-black text-zinc-900 tracking-tight", children: "Security Center" }), _jsx("p", { className: "text-zinc-500 text-[11px] mt-1.5 font-bold uppercase tracking-[0.2em] opacity-60 italic leading-relaxed", children: "AI behavioral analysis and pattern matching" })] }), _jsx("div", { className: "flex items-center gap-4", children: _jsxs("div", { className: "bg-surface-white px-6 py-4 rounded-2xl border border-border-subtle flex items-center gap-8 md-elevation-1", children: [_jsxs("div", { className: "flex flex-col", children: [_jsx("span", { className: "text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none", children: "Threat Score" }), _jsx("span", { className: "text-xl font-black text-critical-600 mt-2 tracking-tight", children: "92/100" })] }), _jsx("div", { className: "w-px h-8 bg-zinc-100" }), _jsxs("div", { className: "flex flex-col", children: [_jsx("span", { className: "text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none", children: "Neural Load" }), _jsx("span", { className: "text-xl font-black text-primary-600 mt-2 tracking-tight", children: "44%" })] })] }) })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
                    { label: 'Active Threats', value: '12', icon: ShieldAlert, color: 'text-critical-600' },
                    { label: 'Nodes Monitored', value: '124', icon: Shield, color: 'text-primary-600' },
                    { label: 'Neural Accuracy', value: '99.4%', icon: RefreshCw, color: 'text-success-600' },
                ].map((stat, i) => (_jsxs("div", { className: "p-8 rounded-2xl border border-border-subtle flex items-center gap-6 bg-surface-white md-elevation-1 hover:md-elevation-3 md-transition group", children: [_jsx("div", { className: "w-16 h-16 bg-zinc-50 rounded-xl flex items-center justify-center border border-border-subtle shrink-0 group-hover:bg-primary-50 md-transition", children: _jsx(stat.icon, { className: cn("w-7 h-7 md-transition", stat.color) }) }), _jsxs("div", { children: [_jsx("p", { className: "text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5", children: stat.label }), _jsx("p", { className: "text-3xl font-black text-zinc-900 tracking-tight", children: stat.value })] })] }, i))) }), _jsxs("div", { className: "bg-surface-white rounded-2xl border border-border-subtle p-8 md:p-10 md-elevation-1", children: [_jsx(AnomalyFilters, { searchTerm: searchTerm, setSearchTerm: setSearchTerm, statusFilter: statusFilter, setStatusFilter: setStatusFilter, severityFilter: severityFilter, setSeverityFilter: setSeverityFilter }), _jsx("div", { className: "mt-12", children: _jsx(AnomalyTable, { anomalies: filteredAnomalies, onRowClick: handleRowClick }) })] }), _jsx(AnomalyDetailModal, { anomaly: selectedAnomaly, isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })] }));
};
