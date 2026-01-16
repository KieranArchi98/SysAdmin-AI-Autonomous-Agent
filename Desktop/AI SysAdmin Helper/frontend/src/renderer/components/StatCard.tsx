import React from 'react';
import { cn } from '../utils/cn';

export interface StatCardProps {
    icon: React.ElementType;
    title: string;
    value: string;
    subValues: Array<{ label: string; value: string | number }>;
    color: string;
    iconColor?: string;
}

export const StatCard = ({ icon: Icon, title, value, subValues, color, iconColor }: StatCardProps) => (
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
            {subValues.map((sub, i) => (
                <p key={i} className="text-zinc-400 font-medium">
                    {sub.label}: <span className="font-bold text-primary-blue">{sub.value}</span>
                </p>
            ))}
        </div>
    </div>
);
