import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowUp01Icon as ChevronUp,
    ArrowDown01Icon as ChevronDown,
    Database01Icon as Database,
    Clock01Icon as Clock
} from 'hugeicons-react';
import { cn } from '../utils/cn';

export interface AnomalyEntry {
    id: string;
    timestamp: string;
    host: string;
    eventID?: string;
    type: string;
    severity: 'Critical' | 'High' | 'Medium' | 'Low';
    status: 'Open' | 'Acknowledged' | 'Resolved' | 'Active' | 'Suppressed';
    confidence: number | string;
    entity?: string;
}

interface AnomalyTableProps {
    anomalies: AnomalyEntry[];
    onRowClick: (anomaly: AnomalyEntry) => void;
}

export const AnomalyTable: React.FC<AnomalyTableProps> = ({ anomalies, onRowClick }) => {
    const [sortConfig, setSortConfig] = useState<{ key: keyof AnomalyEntry, direction: 'asc' | 'desc' } | null>(null);

    const sortedData = useMemo(() => {
        if (!sortConfig) return anomalies;
        return [...anomalies].sort((a, b) => {
            const aVal = a[sortConfig.key] ?? '';
            const bVal = b[sortConfig.key] ?? '';
            if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
            if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }, [anomalies, sortConfig]);

    const requestSort = (key: keyof AnomalyEntry) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const StatusBadge = ({ status }: { status: string }) => {
        const styles: Record<string, string> = {
            Open: 'text-critical-600 bg-critical-50 border-critical-500/10',
            Active: 'text-critical-600 bg-critical-50 border-critical-500/10',
            Acknowledged: 'text-warning-600 bg-warning-50 border-warning-500/10',
            Resolved: 'text-success-600 bg-success-50 border-success-500/10',
            Suppressed: 'text-zinc-500 bg-zinc-50 border-zinc-100',
        };
        return (
            <span className={cn(
                "px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border",
                styles[status] || styles.Resolved
            )}>
                {status}
            </span>
        );
    };

    const SeverityIndicator = ({ severity }: { severity: string }) => {
        const styles: Record<string, string> = {
            Critical: 'bg-critical-500 text-critical-600',
            High: 'bg-warning-500 text-warning-600',
            Medium: 'bg-primary-500 text-primary-600',
            Low: 'bg-success-500 text-success-600',
        };
        const activeStyle = styles[severity] || 'bg-zinc-400 text-zinc-500';
        const dotColor = activeStyle.split(' ')[0];
        const textColor = activeStyle.split(' ')[1];

        return (
            <div className="flex items-center gap-2.5">
                <div className={cn("w-2 h-2 rounded-full shadow-sm", dotColor)} />
                <span className={cn("text-[10px] font-bold uppercase tracking-widest", textColor)}>
                    {severity}
                </span>
            </div>
        );
    };

    return (
        <div className="bg-surface-white overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-surface-white">
                            {[
                                { label: 'Timestamp', key: 'timestamp' },
                                { label: 'Host Identifier', key: 'host' },
                                { label: 'Trace Reference', key: 'eventID' },
                                { label: 'Heuristic Severity', key: 'severity' },
                                { label: 'Current State', key: 'status' }
                            ].map((col) => (
                                <th
                                    key={col.key}
                                    onClick={() => requestSort(col.key as keyof AnomalyEntry)}
                                    className="px-8 py-5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest cursor-pointer group hover:text-zinc-900 transition-colors border-b border-border-subtle"
                                >
                                    <div className="flex items-center gap-2.5">
                                        {col.label}
                                        <div className="flex flex-col opacity-0 group-hover:opacity-100 md-transition">
                                            <ChevronUp className={cn("w-3 h-3 -mb-1", sortConfig?.key === col.key && sortConfig.direction === 'asc' ? "text-primary-600" : "text-zinc-300")} />
                                            <ChevronDown className={cn("w-3 h-3", sortConfig?.key === col.key && sortConfig.direction === 'desc' ? "text-primary-600" : "text-zinc-300")} />
                                        </div>
                                    </div>
                                </th>
                            ))}
                            <th className="px-8 py-5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-right border-b border-border-subtle">Operations</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border-subtle">
                        {sortedData.map((anomaly, idx) => (
                            <motion.tr
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                key={anomaly.id}
                                onClick={() => onRowClick(anomaly)}
                                whileHover={{ backgroundColor: "rgba(244, 244, 245, 0.4)", x: 4 }}
                                className="md-transition cursor-pointer group relative"
                            >
                                <td className="px-8 py-5">
                                    <div className="flex items-center gap-3.5">
                                        <motion.div
                                            whileHover={{ rotate: 15 }}
                                            className="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-100 group-hover:bg-surface-white md-transition shrink-0"
                                        >
                                            <Clock className="w-4 h-4 text-zinc-400" />
                                        </motion.div>
                                        <div>
                                            <p className="text-[13px] font-bold text-zinc-900 tracking-tight leading-none mb-1">{anomaly.timestamp.split(' ')[1]}</p>
                                            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">{anomaly.timestamp.split(' ')[0]}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-5">
                                    <div className="flex items-center gap-2.5">
                                        <Database className="w-4 h-4 text-primary-600" />
                                        <p className="text-[13px] font-bold text-zinc-900 tracking-tight">{anomaly.host}</p>
                                    </div>
                                </td>
                                <td className="px-8 py-5 font-mono text-[11px] text-zinc-400 font-bold uppercase tracking-wider">
                                    {anomaly.eventID || "Observation Trace"}
                                </td>
                                <td className="px-8 py-5">
                                    <SeverityIndicator severity={anomaly.severity} />
                                </td>
                                <td className="px-8 py-5">
                                    <StatusBadge status={anomaly.status} />
                                </td>
                                <td className="px-8 py-5 text-right">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-4 py-2 bg-surface-white border border-zinc-200 rounded-lg text-zinc-400 opacity-0 group-hover:opacity-100 md-transition hover:border-primary-300 hover:text-primary-600 hover:md-elevation-2 shadow-sm text-[10px] font-bold uppercase tracking-widest"
                                    >
                                        ANALYZE
                                    </motion.button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
