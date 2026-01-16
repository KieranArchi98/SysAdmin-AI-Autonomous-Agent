
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertCircleIcon as ShieldAlert, ArrowUpRight01Icon as ArrowUpRight, Clock01Icon as Clock, Database01Icon as Server } from 'hugeicons-react';
import { cn } from '../utils/cn';

const anomalies = [
    { id: 1, type: 'Traffic Spike', host: 'edge-gateway-02', severity: 'Critical', time: '2m ago' },
    { id: 2, type: 'Auth Bypass', host: 'db-cluster-main', severity: 'High', time: '15m ago' },
    { id: 3, type: 'Latent Process', host: 'worker-node-04', severity: 'Medium', time: '1h ago' },
];

export const RecentAnomaliesList = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-surface-white p-6 md:p-8 rounded-2xl md-elevation-1 border border-border-subtle group hover:md-elevation-2 md-transition">
            <div className="flex items-center justify-between mb-8 px-2">
                <div>
                    <h3 className="text-2xl font-black text-zinc-900 tracking-tight">Recent Signals</h3>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-2 opacity-60">Heuristic detection queue</p>
                </div>
                <motion.button
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate('/anomalies')}
                    className="p-3 bg-zinc-50 rounded-xl text-zinc-400 hover:text-primary-600 hover:bg-primary-50 md-transition shadow-sm border border-border-subtle"
                >
                    <ArrowUpRight className="w-5 h-5" />
                </motion.button>
            </div>

            <div className="space-y-2">
                {anomalies.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={false}
                        whileHover={{ y: -2, x: 4 }}
                        onClick={() => navigate('/anomalies')}
                        className="flex items-center justify-between p-5 rounded-2xl hover:bg-zinc-50/50 md-transition cursor-pointer group/item border border-transparent hover:border-border-subtle hover:md-elevation-1"
                    >
                        <div className="flex items-center gap-5">
                            <div className={cn(
                                "w-12 h-12 rounded-xl flex items-center justify-center border md-transition shadow-sm",
                                item.severity === 'Critical'
                                    ? "bg-critical-50 text-critical-600 border-critical-500/10"
                                    : "bg-warning-50 text-warning-600 border-warning-500/10"
                            )}>
                                <ShieldAlert className="w-6 h-6" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-base font-black text-zinc-900 truncate uppercase tracking-tight">{item.type}</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <Server className="w-4 h-4 text-zinc-400 opacity-60" />
                                    <span className="text-xs font-black text-zinc-400 uppercase tracking-widest truncate opacity-80">{item.host}</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                            <p className={cn(
                                "text-xs font-black uppercase tracking-[0.2em] mb-2",
                                item.severity === 'Critical' ? "text-critical-600" : "text-warning-600"
                            )}>
                                {item.severity}
                            </p>
                            <div className="flex items-center justify-end gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest opacity-60">
                                <Clock className="w-3.5 h-3.5" />
                                {item.time}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
