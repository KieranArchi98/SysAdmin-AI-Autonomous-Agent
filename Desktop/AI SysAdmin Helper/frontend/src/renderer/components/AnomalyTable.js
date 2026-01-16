import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp01Icon as ChevronUp, ArrowDown01Icon as ChevronDown, Database01Icon as Database, Clock01Icon as Clock } from 'hugeicons-react';
import { cn } from '../utils/cn';
export const AnomalyTable = ({ anomalies, onRowClick }) => {
    const [sortConfig, setSortConfig] = useState(null);
    const sortedData = useMemo(() => {
        if (!sortConfig)
            return anomalies;
        return [...anomalies].sort((a, b) => {
            const aVal = a[sortConfig.key] ?? '';
            const bVal = b[sortConfig.key] ?? '';
            if (aVal < bVal)
                return sortConfig.direction === 'asc' ? -1 : 1;
            if (aVal > bVal)
                return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }, [anomalies, sortConfig]);
    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };
    const StatusBadge = ({ status }) => {
        const styles = {
            Open: 'text-critical-600 bg-critical-50 border-critical-500/10',
            Active: 'text-critical-600 bg-critical-50 border-critical-500/10',
            Acknowledged: 'text-warning-600 bg-warning-50 border-warning-500/10',
            Resolved: 'text-success-600 bg-success-50 border-success-500/10',
            Suppressed: 'text-zinc-500 bg-zinc-50 border-zinc-100',
        };
        return (_jsx("span", { className: cn("px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border", styles[status] || styles.Resolved), children: status }));
    };
    const SeverityIndicator = ({ severity }) => {
        const styles = {
            Critical: 'bg-critical-500 text-critical-600',
            High: 'bg-warning-500 text-warning-600',
            Medium: 'bg-primary-500 text-primary-600',
            Low: 'bg-success-500 text-success-600',
        };
        const activeStyle = styles[severity] || 'bg-zinc-400 text-zinc-500';
        const dotColor = activeStyle.split(' ')[0];
        const textColor = activeStyle.split(' ')[1];
        return (_jsxs("div", { className: "flex items-center gap-2.5", children: [_jsx("div", { className: cn("w-2 h-2 rounded-full shadow-sm", dotColor) }), _jsx("span", { className: cn("text-[10px] font-bold uppercase tracking-widest", textColor), children: severity })] }));
    };
    return (_jsx("div", { className: "bg-surface-white overflow-hidden", children: _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full text-left border-collapse", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-surface-white", children: [[
                                    { label: 'Timestamp', key: 'timestamp' },
                                    { label: 'Host Identifier', key: 'host' },
                                    { label: 'Trace Reference', key: 'eventID' },
                                    { label: 'Heuristic Severity', key: 'severity' },
                                    { label: 'Current State', key: 'status' }
                                ].map((col) => (_jsx("th", { onClick: () => requestSort(col.key), className: "px-8 py-5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest cursor-pointer group hover:text-zinc-900 transition-colors border-b border-border-subtle", children: _jsxs("div", { className: "flex items-center gap-2.5", children: [col.label, _jsxs("div", { className: "flex flex-col opacity-0 group-hover:opacity-100 md-transition", children: [_jsx(ChevronUp, { className: cn("w-3 h-3 -mb-1", sortConfig?.key === col.key && sortConfig.direction === 'asc' ? "text-primary-600" : "text-zinc-300") }), _jsx(ChevronDown, { className: cn("w-3 h-3", sortConfig?.key === col.key && sortConfig.direction === 'desc' ? "text-primary-600" : "text-zinc-300") })] })] }) }, col.key))), _jsx("th", { className: "px-8 py-5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-right border-b border-border-subtle", children: "Operations" })] }) }), _jsx("tbody", { className: "divide-y divide-border-subtle", children: sortedData.map((anomaly, idx) => (_jsxs(motion.tr, { initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, transition: { delay: idx * 0.05 }, onClick: () => onRowClick(anomaly), whileHover: { backgroundColor: "rgba(244, 244, 245, 0.4)", x: 4 }, className: "md-transition cursor-pointer group relative", children: [_jsx("td", { className: "px-8 py-5", children: _jsxs("div", { className: "flex items-center gap-3.5", children: [_jsx(motion.div, { whileHover: { rotate: 15 }, className: "w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-100 group-hover:bg-surface-white md-transition shrink-0", children: _jsx(Clock, { className: "w-4 h-4 text-zinc-400" }) }), _jsxs("div", { children: [_jsx("p", { className: "text-[13px] font-bold text-zinc-900 tracking-tight leading-none mb-1", children: anomaly.timestamp.split(' ')[1] }), _jsx("p", { className: "text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none", children: anomaly.timestamp.split(' ')[0] })] })] }) }), _jsx("td", { className: "px-8 py-5", children: _jsxs("div", { className: "flex items-center gap-2.5", children: [_jsx(Database, { className: "w-4 h-4 text-primary-600" }), _jsx("p", { className: "text-[13px] font-bold text-zinc-900 tracking-tight", children: anomaly.host })] }) }), _jsx("td", { className: "px-8 py-5 font-mono text-[11px] text-zinc-400 font-bold uppercase tracking-wider", children: anomaly.eventID || "Observation Trace" }), _jsx("td", { className: "px-8 py-5", children: _jsx(SeverityIndicator, { severity: anomaly.severity }) }), _jsx("td", { className: "px-8 py-5", children: _jsx(StatusBadge, { status: anomaly.status }) }), _jsx("td", { className: "px-8 py-5 text-right", children: _jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "px-4 py-2 bg-surface-white border border-zinc-200 rounded-lg text-zinc-400 opacity-0 group-hover:opacity-100 md-transition hover:border-primary-300 hover:text-primary-600 hover:md-elevation-2 shadow-sm text-[10px] font-bold uppercase tracking-widest", children: "ANALYZE" }) })] }, anomaly.id))) })] }) }) }));
};
