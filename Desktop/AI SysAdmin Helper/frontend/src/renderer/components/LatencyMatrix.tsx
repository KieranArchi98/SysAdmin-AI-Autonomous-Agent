import React from 'react';
import {
    Activity01Icon as Activity,
    ArrowRight01Icon as ArrowRight,
    ComputerIcon as Server,
    GlobalIcon as Globe,
    HardDriveIcon as Database
} from 'hugeicons-react';
import { cn } from '../utils/cn';

interface LatencyNode {
    source: string;
    target: string;
    rtt: number;
    trend: 'improving' | 'stable' | 'degrading';
}

export const LatencyMatrix: React.FC = () => {
    const data: LatencyNode[] = [
        { source: 'Edge-GW-01', target: 'DB-Cluster-Main', rtt: 12, trend: 'stable' },
        { source: 'Edge-GW-01', target: 'Worker-04', rtt: 28, trend: 'degrading' },
        { source: 'Edge-GW-02', target: 'DB-Cluster-Main', rtt: 14, trend: 'improving' },
        { source: 'Worker-04', target: 'DB-Cluster-Main', rtt: 8, trend: 'stable' },
        { source: 'Neural-Engine', target: 'DB-Cluster-Main', rtt: 42, trend: 'stable' },
        { source: 'API-Gateway', target: 'Neural-Engine', rtt: 115, trend: 'degrading' },
    ];

    const getStatusColor = (rtt: number) => {
        if (rtt < 20) return 'text-success-600 bg-success-50 border-success-500/10';
        if (rtt < 60) return 'text-warning-600 bg-warning-50 border-warning-500/10';
        return 'text-critical-600 bg-critical-50 border-critical-500/10';
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between px-2">
                <div>
                    <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-[0.1em]">Pulse Latency Matrix</h3>
                    <p className="text-zinc-500 font-bold text-[11px] mt-1.5 uppercase tracking-widest opacity-60 italic">Real-time inter-node communication RTT</p>
                </div>
                <div className="flex items-center gap-4 bg-zinc-50 px-4 py-2.5 rounded-xl border border-border-subtle shadow-sm">
                    <Globe className="w-4 h-4 text-primary-600" />
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Multi-Region Mesh Active</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.map((node, i) => (
                    <div key={i} className="p-5 bg-surface-white rounded-2xl border border-border-subtle flex items-center justify-between md-elevation-1 hover:md-elevation-3 hover:border-primary-200 md-transition group">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center border border-border-subtle shadow-sm group-hover:bg-primary-50 md-transition">
                                    <Server className="w-4 h-4 text-zinc-400 group-hover:text-primary-600 md-transition" />
                                </div>
                                <span className="text-[12px] font-black text-zinc-700 uppercase tracking-tight">{node.source}</span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-zinc-200 group-hover:text-primary-600 group-hover:translate-x-1 md-transition" />
                            <div className="flex items-center gap-2">
                                <span className="text-[12px] font-black text-zinc-700 uppercase tracking-tight">{node.target}</span>
                                <div className="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center border border-border-subtle shadow-sm group-hover:bg-primary-50 md-transition">
                                    <Database className="w-4 h-4 text-zinc-400 group-hover:text-primary-600 md-transition" />
                                </div>
                            </div>
                        </div>

                        <div className={cn("px-4 py-2 rounded-xl border text-[13px] font-black flex items-center gap-2 md-transition md-elevation-1", getStatusColor(node.rtt))}>
                            <Activity className="w-3.5 h-3.5" />
                            {node.rtt}ms
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-6 px-2 flex items-center justify-between border-t border-border-subtle">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-success-500 shadow-sm shadow-success-500/50" />
                        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Optimal &lt; 20ms</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-warning-500 shadow-sm shadow-warning-500/50" />
                        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Warning &gt; 60ms</span>
                    </div>
                </div>
                <button className="text-[10px] font-black text-primary-600 uppercase tracking-[0.2em] hover:text-primary-700 md-transition px-2">Export Data Pulse</button>
            </div>
        </div>
    );
};
