import React, { useState } from 'react';
import {
    Add01Icon as Plus,
    Delete02Icon as Trash2,
    Clock01Icon as Clock,
    ComputerIcon as Monitor,
    Shield01Icon as Shield,
    Activity01Icon as Activity
} from 'hugeicons-react';
import { cn } from '../utils/cn';
import { motion } from 'framer-motion';

interface HostConfig {
    id: string;
    hostname: string;
    ip: string;
    enabled: boolean;
    logTypes: string[];
}

export const LogSourceSettings: React.FC = () => {
    const [hosts, setHosts] = useState<HostConfig[]>([
        { id: '1', hostname: 'edge-gateway-01', ip: '10.0.1.12', enabled: true, logTypes: ['Syslog', 'Auth'] },
        { id: '2', hostname: 'db-cluster-node-a', ip: '10.0.2.44', enabled: true, logTypes: ['Postgres', 'Syslog'] },
        { id: '3', hostname: 'worker-node-alt', ip: '10.0.5.11', enabled: false, logTypes: ['Docker', 'Kernel'] },
    ]);

    const [pollingInterval, setPollingInterval] = useState(30);

    const toggleHost = (id: string) => {
        setHosts(hosts.map(h => h.id === id ? { ...h, enabled: !h.enabled } : h));
    };

    return (
        <div className="space-y-10">
            <div className="flex items-center justify-between px-1">
                <div>
                    <h3 className="text-xl font-black text-zinc-900 tracking-tight leading-none mb-2.5">Monitoring Targets</h3>
                    <p className="text-zinc-500 font-bold text-[11px] uppercase tracking-widest opacity-60">Configure neural agent endpoints and ingest policies</p>
                </div>
                <motion.button
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-primary-700 md-transition shadow-lg shadow-primary-500/20"
                >
                    <Plus className="w-4 h-4" /> Add Node
                </motion.button>
            </div>

            {/* Host Cards */}
            <div className="grid grid-cols-1 gap-5">
                {hosts.map((host) => (
                    <div
                        key={host.id}
                        className={cn(
                            "p-6 rounded-2xl border md-transition flex items-center justify-between group",
                            host.enabled
                                ? "bg-surface-white border-border-subtle md-elevation-1 hover:md-elevation-3"
                                : "bg-zinc-50 border-zinc-100 opacity-60 grayscale shadow-inner"
                        )}
                    >
                        <div className="flex items-center gap-6">
                            <div className={cn(
                                "w-12 h-12 rounded-xl flex items-center justify-center border md-transition",
                                host.enabled
                                    ? "bg-zinc-50 border-border-subtle text-primary-600 shadow-sm"
                                    : "bg-surface-white border-zinc-50 text-zinc-300"
                            )}>
                                <Monitor className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="flex items-center gap-4">
                                    <h4 className="font-black text-zinc-800 text-lg tracking-tight">{host.hostname}</h4>
                                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest bg-zinc-100/50 px-2 py-0.5 rounded-md border border-zinc-200/50">{host.ip}</span>
                                </div>
                                <div className="flex gap-2 mt-3">
                                    {host.logTypes.map((type, i) => (
                                        <span key={i} className="px-2.5 py-1 bg-zinc-50 text-[9px] font-black text-zinc-400 rounded-lg uppercase tracking-widest border border-zinc-100 group-hover:bg-primary-50 group-hover:text-primary-600 group-hover:border-primary-500/10 md-transition">
                                            {type}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-8">
                            <div className="flex flex-col items-end gap-2.5">
                                <span className={cn(
                                    "px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-[0.2em] border leading-none md-transition",
                                    host.enabled
                                        ? "bg-success-50 border-success-500/10 text-success-600 shadow-sm shadow-success-500/10"
                                        : "bg-zinc-100 border-zinc-200 text-zinc-400"
                                )}>
                                    {host.enabled ? 'Pulse Synchronized' : 'Node Offline'}
                                </span>
                                <button
                                    onClick={() => toggleHost(host.id)}
                                    className={cn(
                                        "w-10 h-5.5 rounded-full relative md-transition flex items-center",
                                        host.enabled ? "bg-primary-600 shadow-lg shadow-primary-500/20" : "bg-zinc-200 shadow-inner"
                                    )}
                                >
                                    <motion.div
                                        animate={{ x: host.enabled ? 18 : 2 }}
                                        className="w-4 h-4 bg-white rounded-full shadow-md"
                                    />
                                </button>
                            </div>
                            <button className="p-3 text-zinc-300 hover:text-critical-600 hover:bg-critical-50 rounded-xl md-transition border border-transparent hover:border-critical-500/10 active:scale-90">
                                <Trash2 className="w-4.5 h-4.5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Global Settings */}
            <div className="bg-surface-white rounded-2xl border border-border-subtle p-10 md-elevation-1 relative overflow-hidden group hover:md-elevation-3 md-transition">
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center border border-border-subtle group-hover:bg-primary-50 md-transition">
                                    <Clock className="w-5 h-5 text-primary-600" />
                                </div>
                                <h4 className="text-[11px] font-black uppercase tracking-widest text-zinc-800">Sampling Delta</h4>
                            </div>
                            <p className="text-[13px] text-zinc-400 font-bold leading-relaxed opacity-80 uppercase tracking-tight">Adjust the temporal resolution of log ingestion. Lower intervals increase insight precision but elevate network pressure.</p>
                        </div>

                        <div className="space-y-8">
                            <div className="relative h-2 w-full bg-zinc-50 rounded-full border border-zinc-100 shadow-inner">
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-primary-600 rounded-full shadow-lg shadow-primary-500/20"
                                    style={{ width: `${(pollingInterval / 300) * 100}%` }}
                                />
                                <input
                                    type="range"
                                    min="5"
                                    max="300"
                                    value={pollingInterval}
                                    onChange={(e) => setPollingInterval(parseInt(e.target.value))}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                />
                                <motion.div
                                    className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-surface-white border-2 border-primary-600 rounded-full shadow-md z-0 pointer-events-none"
                                    style={{ left: `calc(${(pollingInterval / 300) * 100}% - 10px)` }}
                                />
                            </div>
                            <div className="flex justify-between items-center bg-zinc-50/50 p-6 rounded-2xl border border-border-subtle shadow-inner">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1.5 opacity-60 italic">Active Ingest Rate</span>
                                    <span className="text-3xl font-black text-zinc-800 tracking-tighter">{pollingInterval}s</span>
                                </div>
                                <Activity className="w-8 h-8 text-primary-600 opacity-20 group-hover:opacity-40 md-transition" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-50/50 rounded-2xl p-10 border border-border-subtle flex flex-col justify-center shadow-inner">
                        <div className="flex items-center gap-4 mb-8">
                            <Shield className="w-6 h-6 text-success-600" />
                            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-800">Neural Sync Status</span>
                        </div>
                        <div className="space-y-6">
                            {[
                                { msg: 'Global agent heartbeat nominal', color: 'bg-success-500' },
                                { msg: 'Neural handshake verified', color: 'bg-primary-500' },
                                { msg: 'Ingest logic redundancy active', color: 'bg-warning-500' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-5 group/item">
                                    <div className={cn("w-2 h-2 rounded-full shadow-sm", item.color)} />
                                    <span className="text-[12px] font-bold text-zinc-500 group-hover/item:text-zinc-900 md-transition uppercase tracking-tight opacity-80">{item.msg}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
