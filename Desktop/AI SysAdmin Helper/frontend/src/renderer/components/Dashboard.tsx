
import {
    Database01Icon as Server,
    CodeIcon as Terminal,
    AlertCircleIcon as ShieldAlert,
    UserGroupIcon as Users,
    ArrowUpRight01Icon as ArrowUpRight,
    ArrowDown01Icon as ChevronDown,
    Maximize01Icon as Maximize2,
    SparklesIcon as Sparkles
} from 'hugeicons-react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, Cell
} from 'recharts';
import { cn } from '../utils/cn';

const StatCard = ({ icon: Icon, title, value, subValues, color, iconColor }: any) => (
    <div className="bg-white rounded-[2rem] p-6 shadow-soft border border-gray-50 hover:shadow-card transition-all cursor-pointer group w-full">
        <div className="flex items-center gap-4 mb-4">
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 flex-shrink-0", color)}>
                <Icon className={cn("w-6 h-6", iconColor || "text-white")} />
            </div>
            <div className="min-w-0">
                <p className="text-[11px] sm:text-[13px] text-zinc-400 font-semibold uppercase tracking-wider truncate">{title}</p>
                <p className="text-xl sm:text-2xl font-bold text-zinc-800">{value}</p>
            </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-4 border-t border-gray-50 text-[12px] sm:text-[13px]">
            {subValues.map((sub: any, i: number) => (
                <p key={i} className="text-zinc-400 font-medium">
                    {sub.label}: <span className="font-bold text-primary-blue">{sub.value}</span>
                </p>
            ))}
        </div>
    </div>
);

const revenueData = [
    { name: 'Jan', value: 6000, secondary: 4000 },
    { name: 'Feb', value: 4500, secondary: 3500 },
    { name: 'Mar', value: 5500, secondary: 4500 },
    { name: 'Apr', value: 8000, secondary: 5000 },
    { name: 'May', value: 7500, secondary: 6000 },
    { name: 'Jun', value: 9000, secondary: 7000 },
    { name: 'Jul', value: 6500, secondary: 5500 },
    { name: 'Aug', value: 8500, secondary: 6500 },
    { name: 'Sep', value: 9500, secondary: 7500 },
    { name: 'Oct', value: 8800, secondary: 6800 },
    { name: 'Nov', value: 9800, secondary: 7800 },
    { name: 'Dec', value: 9200, secondary: 7200 },
];

const barData = [
    { name: 'Feb', value: 70 },
    { name: 'Mar', value: 85 },
    { name: 'Apr', value: 100 },
    { name: 'May', value: 65 },
    { name: 'Jun', value: 90 },
    { name: 'Jul', value: 75 },
];

export const Dashboard = () => {
    return (
        <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-700 slide-in-from-bottom-4 max-w-full overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <StatCard
                    icon={Server}
                    title="Active Servers"
                    value="24"
                    color="bg-blue-600"
                    subValues={[{ label: 'Active', value: 20 }, { label: 'Idle', value: 4 }]}
                />
                <StatCard
                    icon={Terminal}
                    title="Remote Sessions"
                    value="220"
                    color="bg-blue-500"
                    subValues={[{ label: 'Active', value: 180 }, { label: 'Queue', value: 40 }]}
                />
                <StatCard
                    icon={ShieldAlert}
                    title="Security Incidents"
                    value="67"
                    color="bg-emerald-500"
                    subValues={[{ label: 'Resolved', value: 60 }, { label: 'New', value: 7 }]}
                />
                <StatCard
                    icon={Users}
                    title="Total Users"
                    value="1,217"
                    color="bg-indigo-600"
                    subValues={[{ label: 'Online', value: 112 }, { label: 'New', value: 5 }]}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                <div className="lg:col-span-8 bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 shadow-soft border border-gray-50 relative overflow-hidden">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                        <div>
                            <p className="text-[12px] sm:text-sm text-zinc-400 font-bold flex items-center gap-2 uppercase tracking-wide">
                                <Sparkles className="w-4 h-4 text-blue-600" /> Admin resource load
                            </p>
                            <div className="flex items-center gap-4 mt-2">
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">$1,345.87</h3>
                                <span className="text-emerald-500 text-[12px] sm:text-[13px] font-bold px-3 py-1 bg-emerald-50 rounded-xl">+36%</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <button className="p-3 bg-zinc-50 rounded-2xl hover:bg-zinc-100 transition-all hidden sm:block">
                                <Maximize2 className="w-5 h-5 text-zinc-400" />
                            </button>
                            <button className="flex items-center justify-between sm:justify-center gap-2 px-6 py-3 bg-zinc-50 rounded-[1.25rem] text-[14px] sm:text-[15px] font-bold text-zinc-600 hover:bg-zinc-100 transition-all flex-1 sm:flex-none">
                                This Year <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="h-[250px] sm:h-[320px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueData}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 500 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 500 }} hide={window.innerWidth < 640} />
                                <Tooltip
                                    cursor={{ stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5 5' }}
                                    contentStyle={{ borderRadius: '20px', border: 'none', padding: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                                />
                                <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="lg:col-span-4 bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 shadow-soft border border-gray-50 flex flex-col overflow-hidden">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-lg sm:text-xl font-extrabold text-zinc-900 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                                <Terminal className="w-5 h-5 text-blue-600" />
                            </div>
                            Server Load
                        </h3>
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-zinc-50 rounded-xl text-[11px] font-bold text-zinc-500">
                            6 Months <ChevronDown className="w-3 h-3" />
                        </button>
                    </div>

                    <div className="flex-1 w-full min-h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={barData}>
                                <Bar dataKey="value" radius={[8, 8, 8, 8]} barSize={32}>
                                    {barData.map((_, index) => (
                                        <Cell key={`cell-${index}`} fill={index === 2 ? '#3b82f6' : '#eff6ff'} />
                                    ))}
                                </Bar>
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 500 }} dy={5} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pb-8">
                <div className="lg:col-span-7 bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 shadow-soft border border-gray-50 overflow-hidden">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                        <h3 className="text-lg sm:text-xl font-extrabold text-zinc-900 flex items-center gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-blue-100 flex-shrink-0">
                                <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            Security Audits
                        </h3>
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-zinc-50 rounded-xl text-[13px] font-bold text-zinc-600 w-full sm:w-auto justify-center">
                            Filters <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="space-y-6 sm:space-y-8">
                        {[
                            { email: 'audit-log_1@sys.net', user: 'Aria Bailey', severity: 'High' },
                            { email: 'adamk@yahoo.com', user: 'Thomas Garcia', severity: 'Medium' },
                            { email: 'grolschie@mac.com', user: 'Ariana Baker', severity: 'Critical' },
                            { email: 'sinclair@att.net', user: 'Ethan Hernandez', severity: 'Low' }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between group cursor-pointer p-2 -m-2 rounded-2xl sm:rounded-3xl hover:bg-zinc-50 transition-all overflow-hidden">
                                <div className="flex items-center gap-3 sm:gap-5 min-w-0">
                                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-zinc-100 rounded-lg sm:rounded-[1.25rem] overflow-hidden border-2 sm:border-4 border-white shadow-soft flex-shrink-0">
                                        <img src={`https://i.pravatar.cc/150?u=${item.user}`} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[11px] sm:text-[13px] text-zinc-400 font-medium truncate">{item.email}</p>
                                        <p className="text-[15px] sm:text-[17px] font-bold text-zinc-900 truncate">{item.user}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 sm:gap-10 flex-shrink-0">
                                    <div className="text-right hidden sm:block">
                                        <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-extrabold mb-1">Severity</p>
                                        <p className={cn(
                                            "font-bold text-[14px]",
                                            item.severity === 'Critical' ? "text-red-500" :
                                                item.severity === 'High' ? "text-orange-500" : "text-zinc-800"
                                        )}>{item.severity}</p>
                                    </div>
                                    <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-200 transition-all duration-300">
                                        <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-5 bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 shadow-soft border border-gray-50 overflow-hidden">
                    <div className="flex items-center justify-between mb-8 sm:mb-10">
                        <h3 className="text-lg sm:text-xl font-extrabold text-zinc-900">Finalized Nodes</h3>
                        <button className="text-blue-600 text-[14px] sm:text-[15px] font-extrabold flex items-center gap-2 hover:translate-x-1 transition-transform">
                            See All <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                    </div>

                    <div className="space-y-4 sm:space-y-5">
                        {[
                            { name: 'Node Processor A', stats: '98% Uptime' },
                            { name: 'Sync Worker 02', stats: '5 Active', active: true },
                            { name: 'Dev Instance 04', stats: '16 Req/s' },
                            { name: 'UX Monitor v3', stats: '8ms Lat' }
                        ].map((node, i) => (
                            <div key={i} className={cn(
                                "flex items-center justify-between p-4 sm:p-5 rounded-2xl sm:rounded-[1.75rem] transition-all duration-300 border border-transparent",
                                node.active ? "bg-blue-600 text-white shadow-xl shadow-blue-100" : "hover:bg-zinc-50 hover:border-zinc-100"
                            )}>
                                <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                                    <div className={cn(
                                        "w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0",
                                        node.active ? "bg-white/20 shadow-none" : "bg-blue-600 shadow-blue-100"
                                    )}>
                                        <Server className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className={cn("font-bold text-[14px] sm:text-[16px] leading-tight truncate", node.active ? "text-white" : "text-zinc-900")}>{node.name}</p>
                                    </div>
                                </div>
                                <div className={cn(
                                    "px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-[1.125rem] text-[12px] sm:text-[14px] font-extrabold whitespace-nowrap flex-shrink-0 ml-2",
                                    node.active ? "bg-white/20 text-white" : "bg-zinc-100 text-zinc-500"
                                )}>
                                    {node.stats}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
