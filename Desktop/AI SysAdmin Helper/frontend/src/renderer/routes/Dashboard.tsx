import { motion } from 'framer-motion';
import {
    ArrowDown01Icon as ChevronDown,
} from 'hugeicons-react';
import { SummaryCard } from '../components/SummaryCard';
import { TrendChart } from '../components/TrendChart';
import { RecentAnomaliesList } from '../components/RecentAnomalies';
import { RecentIncidentsList } from '../components/RecentIncidents';

export const Dashboard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 md:p-10 space-y-10 min-h-screen bg-surface-base overflow-x-hidden"
        >
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-2">
                <div>
                    <h2 className="text-4xl font-black text-zinc-900 tracking-tight">System Pulse</h2>
                    <p className="text-zinc-500 text-xs mt-2 font-bold uppercase tracking-[0.2em] opacity-60">Global Autonomous Dashboard</p>
                </div>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 px-6 py-3.5 bg-surface-white border border-border-default rounded-xl text-xs font-black text-zinc-600 uppercase tracking-widest hover:bg-zinc-50 hover:border-border-default md-elevation-1 hover:md-elevation-2 md-transition"
                >
                    Context Node
                    <ChevronDown className="w-4 h-4 text-zinc-400" />
                </motion.button>
            </div>

            {/* Top Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                <SummaryCard
                    label="Throughput Today"
                    value="1.2M"
                    trend="+12%"
                    trendType="positive"
                />
                <SummaryCard
                    label="Active Signals"
                    value="18"
                    trend="+2"
                    trendType="negative"
                />
                <SummaryCard
                    label="Active Incidents"
                    value="4"
                    trend="-1"
                    trendType="positive"
                />
                <SummaryCard
                    label="Resolution Delta"
                    value="12"
                    trend="+5"
                    trendType="positive"
                />
            </div>

            {/* Middle Section: Trend Chart */}
            <div className="bg-surface-white rounded-2xl border border-border-subtle p-6 md:p-8 md-elevation-1 hover:md-elevation-2 md-transition">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 px-2">
                    <div>
                        <h3 className="text-2xl font-black text-zinc-900 tracking-tight">System Dynamics</h3>
                        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-2">Real-time throughput telemetry</p>
                    </div>
                    <div className="flex items-center gap-2 p-1.5 bg-zinc-50 rounded-xl border border-border-subtle overflow-x-auto">
                        {['24h', '7 days', '30 days'].map((period) => (
                            <button
                                key={period}
                                className="px-5 py-2.5 rounded-lg text-xs font-black text-zinc-400 uppercase tracking-widest hover:text-zinc-900 md-transition active:scale-95 whitespace-nowrap"
                            >
                                {period}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="h-[400px] min-h-[300px] w-full">
                    <TrendChart />
                </div>
            </div>

            {/* Bottom Section: Recent Lists */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 pb-12">
                <RecentAnomaliesList />
                <RecentIncidentsList />
            </div>
        </motion.div>
    );
};
