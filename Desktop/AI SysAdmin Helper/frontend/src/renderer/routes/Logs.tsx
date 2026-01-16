import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Note01Icon as FileText,
    Download01Icon as Download,
    RefreshIcon as RefreshCw,
    Activity01Icon as Activity
} from 'hugeicons-react';
import { LogTable, LogEntry } from '../components/LogTable';
import { LogFilters } from '../components/LogFilters';
import { LogDetailModal } from '../components/LogDetailModal';

const initialLogs: LogEntry[] = [
    { id: 'EVT-9923', timestamp: '2026-01-15 19:42:10', host: 'edge-gateway-02', level: 'Audit_Success', source: 'Security', severity: 'Low', message: 'User "admin" successfully authenticated via RSA gateway from 192.168.1.44.' },
    { id: 'EVT-9922', timestamp: '2026-01-15 19:40:05', host: 'db-cluster-main', level: 'DB_Reconnect', source: 'System', severity: 'Medium', message: 'Read-replica "RR-04" lost sync with primary. Auto-failover initiated within 4ms.' },
    { id: 'EVT-9921', timestamp: '2026-01-15 19:38:15', host: 'worker-node-04', level: 'OOM_Killer', source: 'Application', severity: 'Critical', message: 'Process "node_worker" (PID 442) terminated due to memory exhaustion in cgroup "app-prod".' },
    { id: 'EVT-9920', timestamp: '2026-01-15 19:35:48', host: 'api-gateway-v4', level: 'Rate_Limit', source: 'Security', severity: 'High', message: 'IP 45.22.11.9 blocked for 600s after exceeding 500 req/sec threshold.' },
    { id: 'EVT-9919', timestamp: '2026-01-15 19:30:22', host: 'edge-gateway-02', level: 'Disk_Clean', source: 'System', severity: 'Low', message: 'Temporary buffer cache cleared on mount point /var/log/sysadmin.' },
];

export const Logs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [severityFilter, setSeverityFilter] = useState('All');
    const [selectedLog, setSelectedLog] = useState<LogEntry | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredLogs = initialLogs.filter(log => {
        const matchesSearch = log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
            log.host.toLowerCase().includes(searchTerm.toLowerCase()) ||
            log.level.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSeverity = severityFilter === 'All' || log.severity === severityFilter;
        return matchesSearch && matchesSeverity;
    });

    const handleRowClick = (log: LogEntry) => {
        setSelectedLog(log);
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
                    <h2 className="text-3xl font-black text-zinc-900 tracking-tight">Log Registry</h2>
                    <p className="text-zinc-500 text-[11px] mt-1.5 font-bold uppercase tracking-[0.2em] opacity-60 italic leading-relaxed">Centralized telemetry inspection for distributed clusters</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="bg-surface-white px-6 py-4 rounded-2xl border border-border-subtle flex items-center gap-6 md-elevation-1">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">Stream Status</span>
                            <span className="text-[13px] font-black text-zinc-700 mt-1.5 uppercase tracking-widest">Standby</span>
                        </div>
                        <div className="w-px h-8 bg-zinc-100" />
                        <div className="flex items-center gap-3">
                            <Activity className="w-5 h-5 text-primary-600" />
                            <span className="text-[10px] font-black text-primary-600 uppercase tracking-[0.2em]">Active Sink</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions / Integration Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Event Pulse', value: '1.2k/s', sub: 'Last 5m average', icon: Activity },
                    { label: 'Persistence', value: '30 Days', sub: 'Elastic tier active', icon: FileText },
                    { label: 'Ingest Delta', value: '4ms', sub: 'Global average', icon: RefreshCw }
                ].map((item, i) => (
                    <div key={i} className="bg-surface-white p-6 rounded-2xl border border-border-subtle md-elevation-1 hover:md-elevation-3 md-transition flex items-center gap-5 group">
                        <div className="w-14 h-14 bg-zinc-50 rounded-xl flex items-center justify-center border border-border-subtle shrink-0 group-hover:bg-primary-50 md-transition">
                            <item.icon className="w-6 h-6 text-primary-600 md-transition" />
                        </div>
                        <div className="min-w-0">
                            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{item.label}</p>
                            <p className="text-2xl font-black text-zinc-900 tracking-tighter">{item.value}</p>
                            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5 truncate opacity-60">{item.sub}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Content Section */}
            <div className="bg-surface-white rounded-2xl border border-border-subtle md-elevation-1 overflow-hidden">
                <div className="px-8 py-6 border-b border-border-subtle flex items-center justify-between bg-surface-white">
                    <h3 className="text-sm font-black text-zinc-900 flex items-center gap-3 uppercase tracking-wider">
                        <FileText className="w-4 h-4 text-primary-600" />
                        Telemetry Feed
                    </h3>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] hover:text-primary-600 md-transition">
                            <Download className="w-4 h-4" /> Download Trace
                        </button>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-2 px-6 py-2.5 bg-primary-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary-700 md-elevation-1 md-transition shadow-lg shadow-primary-500/20"
                        >
                            <RefreshCw className="w-4 h-4" /> Go Live
                        </motion.button>
                    </div>
                </div>

                <div className="p-8 md:p-10 space-y-12">
                    <LogFilters
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        severityFilter={severityFilter}
                        setSeverityFilter={setSeverityFilter}
                    />

                    <div className="mt-8">
                        <LogTable
                            logs={filteredLogs}
                            onRowClick={handleRowClick}
                        />
                    </div>
                </div>
            </div>

            <LogDetailModal
                log={selectedLog}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </motion.div>
    );
};
