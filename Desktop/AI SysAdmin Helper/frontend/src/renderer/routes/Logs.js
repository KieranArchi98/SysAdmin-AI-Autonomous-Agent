import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Note01Icon as FileText, Download01Icon as Download, RefreshIcon as RefreshCw, Activity01Icon as Activity } from 'hugeicons-react';
import { LogTable } from '../components/LogTable';
import { LogFilters } from '../components/LogFilters';
import { LogDetailModal } from '../components/LogDetailModal';
const initialLogs = [
    { id: 'EVT-9923', timestamp: '2026-01-15 19:42:10', host: 'edge-gateway-02', level: 'Audit_Success', source: 'Security', severity: 'Low', message: 'User "admin" successfully authenticated via RSA gateway from 192.168.1.44.' },
    { id: 'EVT-9922', timestamp: '2026-01-15 19:40:05', host: 'db-cluster-main', level: 'DB_Reconnect', source: 'System', severity: 'Medium', message: 'Read-replica "RR-04" lost sync with primary. Auto-failover initiated within 4ms.' },
    { id: 'EVT-9921', timestamp: '2026-01-15 19:38:15', host: 'worker-node-04', level: 'OOM_Killer', source: 'Application', severity: 'Critical', message: 'Process "node_worker" (PID 442) terminated due to memory exhaustion in cgroup "app-prod".' },
    { id: 'EVT-9920', timestamp: '2026-01-15 19:35:48', host: 'api-gateway-v4', level: 'Rate_Limit', source: 'Security', severity: 'High', message: 'IP 45.22.11.9 blocked for 600s after exceeding 500 req/sec threshold.' },
    { id: 'EVT-9919', timestamp: '2026-01-15 19:30:22', host: 'edge-gateway-02', level: 'Disk_Clean', source: 'System', severity: 'Low', message: 'Temporary buffer cache cleared on mount point /var/log/sysadmin.' },
];
export const Logs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [severityFilter, setSeverityFilter] = useState('All');
    const [selectedLog, setSelectedLog] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const filteredLogs = initialLogs.filter(log => {
        const matchesSearch = log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
            log.host.toLowerCase().includes(searchTerm.toLowerCase()) ||
            log.level.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSeverity = severityFilter === 'All' || log.severity === severityFilter;
        return matchesSearch && matchesSeverity;
    });
    const handleRowClick = (log) => {
        setSelectedLog(log);
        setIsModalOpen(true);
    };
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "p-6 md:p-10 space-y-10 min-h-screen bg-surface-base", children: [_jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-6 px-2", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-3xl font-black text-zinc-900 tracking-tight", children: "Log Registry" }), _jsx("p", { className: "text-zinc-500 text-[11px] mt-1.5 font-bold uppercase tracking-[0.2em] opacity-60 italic leading-relaxed", children: "Centralized telemetry inspection for distributed clusters" })] }), _jsx("div", { className: "flex items-center gap-4", children: _jsxs("div", { className: "bg-surface-white px-6 py-4 rounded-2xl border border-border-subtle flex items-center gap-6 md-elevation-1", children: [_jsxs("div", { className: "flex flex-col", children: [_jsx("span", { className: "text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none", children: "Stream Status" }), _jsx("span", { className: "text-[13px] font-black text-zinc-700 mt-1.5 uppercase tracking-widest", children: "Standby" })] }), _jsx("div", { className: "w-px h-8 bg-zinc-100" }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Activity, { className: "w-5 h-5 text-primary-600" }), _jsx("span", { className: "text-[10px] font-black text-primary-600 uppercase tracking-[0.2em]", children: "Active Sink" })] })] }) })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                    { label: 'Event Pulse', value: '1.2k/s', sub: 'Last 5m average', icon: Activity },
                    { label: 'Persistence', value: '30 Days', sub: 'Elastic tier active', icon: FileText },
                    { label: 'Ingest Delta', value: '4ms', sub: 'Global average', icon: RefreshCw }
                ].map((item, i) => (_jsxs("div", { className: "bg-surface-white p-6 rounded-2xl border border-border-subtle md-elevation-1 hover:md-elevation-3 md-transition flex items-center gap-5 group", children: [_jsx("div", { className: "w-14 h-14 bg-zinc-50 rounded-xl flex items-center justify-center border border-border-subtle shrink-0 group-hover:bg-primary-50 md-transition", children: _jsx(item.icon, { className: "w-6 h-6 text-primary-600 md-transition" }) }), _jsxs("div", { className: "min-w-0", children: [_jsx("p", { className: "text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1", children: item.label }), _jsx("p", { className: "text-2xl font-black text-zinc-900 tracking-tighter", children: item.value }), _jsx("p", { className: "text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5 truncate opacity-60", children: item.sub })] })] }, i))) }), _jsxs("div", { className: "bg-surface-white rounded-2xl border border-border-subtle md-elevation-1 overflow-hidden", children: [_jsxs("div", { className: "px-8 py-6 border-b border-border-subtle flex items-center justify-between bg-surface-white", children: [_jsxs("h3", { className: "text-sm font-black text-zinc-900 flex items-center gap-3 uppercase tracking-wider", children: [_jsx(FileText, { className: "w-4 h-4 text-primary-600" }), "Telemetry Feed"] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("button", { className: "flex items-center gap-2 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] hover:text-primary-600 md-transition", children: [_jsx(Download, { className: "w-4 h-4" }), " Download Trace"] }), _jsxs(motion.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, className: "flex items-center gap-2 px-6 py-2.5 bg-primary-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary-700 md-elevation-1 md-transition shadow-lg shadow-primary-500/20", children: [_jsx(RefreshCw, { className: "w-4 h-4" }), " Go Live"] })] })] }), _jsxs("div", { className: "p-8 md:p-10 space-y-12", children: [_jsx(LogFilters, { searchTerm: searchTerm, setSearchTerm: setSearchTerm, severityFilter: severityFilter, setSeverityFilter: setSeverityFilter }), _jsx("div", { className: "mt-8", children: _jsx(LogTable, { logs: filteredLogs, onRowClick: handleRowClick }) })] })] }), _jsx(LogDetailModal, { log: selectedLog, isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })] }));
};
