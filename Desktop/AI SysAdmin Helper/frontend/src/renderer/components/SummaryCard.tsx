import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface SummaryCardProps {
    label: string;
    value: string | number;
    trend?: string;
    trendType?: 'positive' | 'negative' | 'neutral';
}

export const SummaryCard: React.FC<SummaryCardProps> = ({
    label,
    value,
    trend,
    trendType,
}) => {
    return (
        <motion.div
            whileHover={{ y: -4, backgroundColor: 'var(--color-surface-white)' }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 min-w-[200px] bg-surface-white/50 backdrop-blur-sm p-7 rounded-2xl md-transition md-elevation-1 hover:md-elevation-3 flex flex-col justify-between h-[160px] border border-border-subtle/50 cursor-pointer group"
        >
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-[0.15em] leading-none mb-4 group-hover:text-zinc-500 md-transition">{label}</p>
            <div className="flex items-end justify-between overflow-hidden">
                <motion.h3
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="text-5xl font-black text-zinc-900 tracking-tighter truncate leading-none"
                >
                    {value}
                </motion.h3>
                {trend && (
                    <motion.span
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className={cn(
                            "text-xs font-bold px-3 py-1.5 rounded-lg mb-0.5 uppercase tracking-widest border",
                            trendType === 'positive'
                                ? "bg-success-50 text-success-600 border-success-500/10"
                                : "bg-critical-50 text-critical-600 border-critical-500/10"
                        )}>
                        {trend}
                    </motion.span>
                )}
            </div>
        </motion.div>
    );
};
