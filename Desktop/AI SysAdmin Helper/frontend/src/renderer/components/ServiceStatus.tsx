import React from 'react';
import {
    Shield01Icon as ShieldCheck,
    RefreshIcon as RefreshCw,
    ZapIcon as Zap,
    Alert01Icon as AlertCircle
} from 'hugeicons-react';
import { cn } from '../utils/cn';

interface Service {
    name: string;
    status: 'Online' | 'Degraded' | 'Offline';
    uptime: string;
    load: number;
    version: string;
}

export const ServiceStatus: React.FC = () => {
    const services: Service[] = [
        { name: 'Core API Gateway', status: 'Online', uptime: '142d 12h', load: 12, version: 'v2.4.1' },
        { name: 'Neural Heuristic Engine', status: 'Online', uptime: '12d 4h', load: 88, version: 'v4.0.0-beta' },
        { name: 'Log Ingestion Buffer', status: 'Online', uptime: '8h 12m', load: 42, version: 'v1.1.9' },
        { name: 'Database Cluster (Primary)', status: 'Online', uptime: '48d 19h', load: 64, version: 'v15.2' },
        { name: 'Auth Microservice', status: 'Degraded', uptime: '2d 1h', load: 92, version: 'v2.0.1' },
        { name: 'Historical Archive Node', status: 'Offline', uptime: '0s', load: 0, version: 'v0.9.4' },
    ];

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between px-2">
                <div>
                    <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-[0.1em]">Active Services</h3>
                    <p className="text-zinc-500 font-bold text-[11px] mt-1.5 uppercase tracking-widest opacity-60 italic">Real-time status of the neural architecture</p>
                </div>
                <button className="p-2.5 bg-zinc-900 text-white rounded-xl hover:bg-black md-transition shadow-lg shadow-zinc-900/10">
                    <RefreshCw className="w-5 h-5" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((svc, i) => (
                    <div key={i} className="bg-surface-white p-6 rounded-2xl border border-border-subtle group md-elevation-1 hover:md-elevation-3 md-transition relative overflow-hidden flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                            <div className={cn(
                                "w-10 h-10 rounded-xl flex items-center justify-center shadow-sm",
                                svc.status === 'Online' ? "bg-success-50 text-success-600 border border-success-500/10" :
                                    svc.status === 'Degraded' ? "bg-warning-50 text-warning-600 border border-warning-500/10" :
                                        "bg-critical-50 text-critical-600 border border-critical-500/10"
                            )}>
                                {svc.status === 'Online' ? <ShieldCheck className="w-5 h-5" /> : svc.status === 'Degraded' ? <AlertCircle className="w-5 h-5" /> : <Zap className="w-5 h-5" />}
                            </div>
                            <span className={cn(
                                "text-[9px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded-lg border",
                                svc.status === 'Online' ? "text-success-600 bg-success-50 border-success-500/10" :
                                    svc.status === 'Degraded' ? "text-warning-600 bg-warning-50 border-warning-500/10" : "text-critical-600 bg-critical-50 border-critical-500/10"
                            )}>
                                {svc.status}
                            </span>
                        </div>

                        <div className="space-y-1">
                            <h4 className="font-black text-zinc-900 text-lg tracking-tight leading-tight">{svc.name}</h4>
                            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{svc.version}</p>
                        </div>

                        <div className="mt-8 mb-auto">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">Resource Pulse</span>
                                <span className={cn("text-[10px] font-bold font-mono tracking-widest uppercase", svc.load > 85 ? "text-critical-600" : "text-success-600")}>{svc.load}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-zinc-50 rounded-full overflow-hidden border border-zinc-100">
                                <div
                                    className={cn("h-full rounded-full transition-all duration-1000 shadow-sm", svc.load > 85 ? "bg-critical-500" : "bg-primary-500")}
                                    style={{ width: `${svc.load}%` }}
                                />
                            </div>
                        </div>

                        <div className="mt-10 flex items-center justify-between pt-6 border-t border-border-subtle">
                            <div className="flex flex-col">
                                <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">System Uptime</span>
                                <span className="text-[13px] font-bold text-zinc-800 tracking-tight">{svc.uptime}</span>
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-black md-transition shadow-sm">
                                <RefreshCw className="w-3.5 h-3.5" /> Restart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
