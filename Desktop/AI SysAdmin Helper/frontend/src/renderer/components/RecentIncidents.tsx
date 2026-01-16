import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertCircleIcon as AlertCircle, ArrowUpRight01Icon as ArrowUpRight, UserIcon as User, Clock01Icon as Clock } from 'hugeicons-react';
import { cn } from '../utils/cn';

const incidents = [
    { id: 'INC-2026-004', title: 'MySQL Replication Lag', severity: 'Critical', status: 'Active', assignee: 'D. Bauman', timestamp: '2026-01-16 08:42:11' },
    { id: 'INC-2026-003', title: 'S3 Sync Timeout', severity: 'High', status: 'Open', assignee: 'Unassigned', timestamp: '2026-01-16 08:35:44' },
    { id: 'INC-2026-002', title: 'Unauthorized API Access', severity: 'High', status: 'Resolved', assignee: 'K. Miller', timestamp: '2026-01-16 08:20:00' },
];

export const RecentIncidentsList = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-surface-white p-8 rounded-2xl md-elevation-1 border border-border-subtle group hover:md-elevation-2 md-transition">
            <div className="flex items-center justify-between mb-8 px-2">
                <div>
                    <h3 className="text-xl font-black text-zinc-900 tracking-tight">Recent Workflows</h3>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1.5 opacity-60">Critical triage queue</p>
                </div>
                <motion.button
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate('/incidents')}
                    className="p-3 bg-zinc-50 rounded-xl text-zinc-400 hover:text-primary-600 hover:bg-primary-50 md-transition shadow-sm border border-border-subtle"
                >
                    <ArrowUpRight className="w-5 h-5" />
                </motion.button>
            </div>

            <div className="space-y-4">
                {incidents.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={false}
                        whileHover={{ y: -2, x: 4 }}
                        onClick={() => navigate('/incidents')}
                        className="p-6 rounded-2xl bg-surface-base/30 hover:bg-surface-base md-transition cursor-pointer border border-border-subtle shadow-sm hover:md-elevation-1 group/item"
                    >
                        <div className="flex justify-between items-start mb-5">
                            <div className="flex flex-col gap-1.5">
                                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">{item.id}</span>
                                <div className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest opacity-60">
                                    <Clock className="w-3 h-3" />
                                    {item.timestamp}
                                </div>
                            </div>
                            <div className={cn(
                                "px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border md-transition shadow-sm",
                                item.status === 'Resolved'
                                    ? "bg-success-50 text-success-600 border-success-500/10"
                                    : "bg-primary-50 text-primary-600 border-primary-500/10"
                            )}>
                                {item.status}
                            </div>
                        </div>

                        <h4 className="text-[15px] font-black text-zinc-900 mb-6 leading-relaxed uppercase tracking-tight">{item.title}</h4>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-surface-white border border-border-subtle flex items-center justify-center shadow-sm group-hover/item:border-primary-500/20 md-transition">
                                    <User className="w-4 h-4 text-zinc-400 group-hover/item:text-primary-600 md-transition" />
                                </div>
                                <span className="text-[11px] font-black text-zinc-500 uppercase tracking-widest opacity-80">{item.assignee}</span>
                            </div>
                            <div className={cn(
                                "flex items-center gap-2 px-3 py-2 rounded-xl border md-transition shadow-sm",
                                item.severity === 'Critical' ? "bg-critical-50 text-critical-600 border-critical-500/10" : "bg-warning-50 text-warning-600 border-warning-500/10"
                            )}>
                                <AlertCircle className="w-4 h-4" />
                                <span className="text-[10px] font-black uppercase tracking-widest">{item.severity}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
