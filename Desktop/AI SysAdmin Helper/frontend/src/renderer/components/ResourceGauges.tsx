import React from 'react';
import {
    CpuIcon as Cpu,
    UsbMemory01Icon as Memory,
    Database01Icon as HardDrive,
    TemperatureIcon as Thermometer
} from 'hugeicons-react';
import { cn } from '../utils/cn';

export const ResourceGauges: React.FC = () => {
    const resources = [
        { label: 'CPU Usage', value: 44, icon: Cpu, color: 'text-primary-500', units: 'Core Load', status: 'Stable' },
        { label: 'RAM Memory', value: 72, icon: Memory, color: 'text-primary-600', units: 'Physical', status: 'Optimal' },
        { label: 'Storage I/O', value: 18, icon: HardDrive, color: 'text-success-500', units: 'NVMe-Array', status: 'Healthy' },
        { label: 'Thermal Info', value: 52, icon: Thermometer, color: 'text-warning-500', units: 'Avg Package', status: 'Cool' },
    ];

    const processes = [
        { name: 'neural_ingest_v4', user: 'system', cpu: 68.2, ram: '4.2GB', recommendation: 'Keep' },
        { name: 'node_exporter', user: 'root', cpu: 4.1, ram: '156MB', recommendation: 'Keep' },
        { name: 'unauthorized_daemon', user: 'unknown', cpu: 12.4, ram: '890MB', recommendation: 'Kill' },
        { name: 'backup_service', user: 'cron', cpu: 1.2, ram: '45MB', recommendation: 'Idle' },
    ];

    return (
        <div className="flex flex-col gap-10 w-full overflow-hidden">
            {/* Gauges - Optimized for sidebar visibility */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {resources.map((res, i) => (
                    <div key={i} className="bg-surface-white p-6 rounded-2xl border border-border-subtle md-elevation-1 space-y-6 relative overflow-hidden group hover:md-elevation-2 md-transition min-w-0">
                        <div className="flex items-center justify-between gap-4">
                            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center bg-zinc-50 border border-zinc-50 transition-all duration-300 flex-shrink-0", res.color)}>
                                <res.icon className="w-6 h-6" />
                            </div>
                            <div className="flex flex-col items-end min-w-0">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest truncate w-full text-right">{res.status}</span>
                                <span className="text-2xl font-black text-zinc-800 tracking-tight truncate">{res.value}%</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h4 className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest truncate">{res.label}</h4>
                            <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden border border-zinc-50">
                                <div
                                    className={cn("h-full rounded-full transition-all duration-1000 relative shadow-sm", res.color.replace('text-', 'bg-'))}
                                    style={{ width: `${res.value}%` }}
                                >
                                    <div className="absolute inset-0 bg-white/10 animate-pulse" />
                                </div>
                            </div>
                            <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest truncate">{res.units}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Top Processes - Enforce horizontal scroll when narrow */}
            <div className="w-full bg-surface-white p-6 md:p-8 rounded-2xl border border-border-subtle md-elevation-1 overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 px-2">
                    <h3 className="text-sm font-bold text-zinc-800 uppercase tracking-wide flex items-center gap-3">
                        <div className="w-1.5 h-4 bg-warning-500 rounded-full" />
                        Active Processes
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                        AI outlier detection active
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-zinc-50/50">
                                <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-border-subtle">System Process</th>
                                <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-border-subtle">Owner</th>
                                <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-border-subtle">CPU Usage</th>
                                <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest text-right border-b border-border-subtle">AI Recommendation</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-subtle">
                            {processes.map((proc, i) => (
                                <tr key={i} className="hover:bg-zinc-50/50 md-transition group cursor-default">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-100 shadow-sm group-hover:bg-surface-white md-transition">
                                                <Cpu className="w-4 h-4 text-zinc-400" />
                                            </div>
                                            <span className="text-[14px] font-bold text-zinc-800 tracking-tight">{proc.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">{proc.user}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3 min-w-[120px]">
                                            <div className="flex-1 h-1.5 bg-zinc-100 rounded-full overflow-hidden border border-zinc-50">
                                                <div className="h-full bg-primary-500 rounded-full shadow-sm" style={{ width: `${proc.cpu}%` }} />
                                            </div>
                                            <span className="text-[11px] font-bold text-zinc-700 font-mono">{proc.cpu}%</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <span className={cn(
                                            "px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border",
                                            proc.recommendation === 'Kill' ? "bg-critical-50 text-critical-600 border-critical-500/10" :
                                                proc.recommendation === 'Keep' ? "bg-success-50 text-success-600 border-success-500/10" :
                                                    "bg-zinc-100 text-zinc-500 border border-zinc-200"
                                        )}>
                                            {proc.recommendation}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
