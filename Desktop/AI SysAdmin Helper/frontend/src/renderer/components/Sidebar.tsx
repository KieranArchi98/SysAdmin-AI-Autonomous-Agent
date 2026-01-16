import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    DashboardSquare01Icon as DashboardIcon,
    ListViewIcon as LogsIcon,
    Activity01Icon as AnomaliesIcon,
    AlertCircleIcon as IncidentsIcon,
    Database01Icon as DatabaseIcon,
    Analytics01Icon as HealthSignalIcon,
    Settings02Icon as SettingsIcon,
    Logout01Icon
} from 'hugeicons-react';

import { cn } from '../utils/cn';

interface NavItemProps {
    icon: React.ElementType;
    label: string;
    to: string;
}

const NavItem = ({ icon: Icon, label, to }: NavItemProps) => (
    <motion.div
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.98 }}
        className="mx-4 mb-2"
    >
        <NavLink
            to={to}
            className={({ isActive }) => cn(
                "flex items-center gap-4 px-5 py-3.5 rounded-2xl md-transition group w-full relative overflow-hidden",
                isActive
                    ? "bg-primary-600 text-white font-black md-elevation-3 shadow-xl shadow-primary-500/20"
                    : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 font-black uppercase tracking-[0.1em] text-xs"
            )}
        >
            <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative z-10"
            >
                <Icon className="w-5 h-5 flex-shrink-0" />
            </motion.div>
            <span className="relative z-10 whitespace-nowrap">
                {label}
            </span>
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-400/0 to-primary-400/20 opacity-0 group-hover:opacity-100 md-transition"
                initial={false}
            />
        </NavLink>
    </motion.div>
);

interface SidebarProps {
    isOpen: boolean;
}

export const Sidebar = ({ isOpen }: SidebarProps) => {
    return (
        <aside className={cn(
            "bg-surface-white flex flex-col transition-all duration-500 relative z-20 h-full border-r border-border-subtle shadow-2xl shadow-zinc-200/50",
            isOpen ? "w-[320px]" : "w-0 overflow-hidden"
        )}>
            {/* Header: Logo & Branding */}
            <div className="p-10 pb-6 flex items-center gap-5">
                <img
                    src="/debbie.PNG"
                    alt="Stratos Network AI"
                    className="h-5 w-auto object-contain md-transition hover:scale-105"
                />
            </div>

            {/* Navigation Navigation */}
            <div className="flex-1 overflow-y-auto mt-20 custom-scrollbar no-scrollbar pb-4">
                <div className="space-y-1">
                    <NavItem icon={DashboardIcon} label="Neural Hub" to="/" />
                    <NavItem icon={LogsIcon} label="Packet Streams" to="/logs" />
                    <NavItem icon={AnomaliesIcon} label="Signal Analysis" to="/anomalies" />
                    <NavItem icon={IncidentsIcon} label="Triage Unit" to="/incidents" />
                    <NavItem icon={DatabaseIcon} label="Knowledge" to="/kb" />
                    <NavItem icon={HealthSignalIcon} label="Core Vitals" to="/health" />
                    <NavItem icon={SettingsIcon} label="Parameters" to="/settings" />
                </div>
            </div>

            {/* Profile Section - Moved to bottom */}
            <div className="px-10 py-6 flex items-center gap-5 border-t border-border-subtle bg-surface-base/10">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-border-subtle md-elevation-1 flex-shrink-0 p-1 bg-zinc-50 shadow-inner group">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
                        alt="Admin"
                        className="w-full h-full object-cover rounded-lg bg-white md-transition group-hover:scale-110"
                    />
                </div>
                <div className="min-w-0">
                    <p className="font-black text-zinc-900 text-sm truncate tracking-tight uppercase">McVeigh.K</p>
                    <div className="flex items-center gap-2 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-success-500 animate-pulse shadow-sm shadow-success-500/50" />
                        <span className="text-[9px] font-black text-success-600 uppercase tracking-widest leading-none opacity-80">Active Node</span>
                    </div>
                </div>
            </div>

            {/* Footer / Logout */}
            <div className="p-6 bg-surface-base/30 border-t border-border-subtle">
                <motion.button
                    whileHover={{ backgroundColor: 'var(--color-surface-white)', color: 'var(--color-critical-600)', borderColor: 'var(--color-critical-500)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-4 px-5 py-5 text-zinc-400 rounded-2xl md-transition font-black uppercase tracking-[0.2em] text-xs border border-transparent hover:md-elevation-3 active:md-elevation-1 shadow-sm"
                >
                    <Logout01Icon className="w-5 h-5 opacity-40 group-hover:opacity-100" />
                    <span>Kill Switch</span>
                </motion.button>
            </div>
        </aside>
    );
};
