import React, { useState } from 'react';
import {
    UserIcon as User,
    Shield01Icon as Shield,
    LockIcon as Lock,
    Camera01Icon as Camera,
    ArrowRight01Icon as ArrowRight,
    Mail01Icon as AtSign,
    CheckmarkCircle02Icon as CheckCircle2,
    Logout01Icon as LogOut,
    Key01Icon as Key,
    FingerPrintIcon as Fingerprint
} from 'hugeicons-react';
import { motion } from 'framer-motion';

export const UserSettings: React.FC = () => {
    const [name, setName] = useState('Kieran McVeigh');
    const role = 'Senior Security Architect';

    return (
        <div className="space-y-10">
            <div className="px-1">
                <h3 className="text-xl font-black text-zinc-900 tracking-tight leading-none mb-2.5">Identity Protocol</h3>
                <p className="text-zinc-500 font-bold text-[11px] uppercase tracking-widest opacity-60 italic">Manage your professional profile and security clearance</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Profile Card */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="p-10 bg-surface-white rounded-2xl border border-border-subtle md-elevation-1 flex flex-col items-center text-center relative overflow-hidden group hover:md-elevation-3 md-transition">
                        <div className="relative mb-8">
                            <div className="w-32 h-32 rounded-2xl bg-zinc-50 flex items-center justify-center text-primary-600 border border-border-subtle overflow-hidden relative shadow-inner">
                                <User className="w-16 h-16 opacity-10" />
                                <div className="absolute inset-0 flex items-center justify-center bg-primary-600/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 md-transition">
                                    <Camera className="w-8 h-8 text-primary-600" />
                                </div>
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-zinc-900 text-white rounded-xl shadow-lg border-4 border-surface-white flex items-center justify-center">
                                <Fingerprint className="w-4.5 h-4.5" />
                            </div>
                        </div>
                        <h4 className="text-2xl font-black text-zinc-900 tracking-tight uppercase">{name}</h4>
                        <div className="flex items-center gap-3 mt-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500 shadow-sm shadow-primary-500/50" />
                            <p className="text-[11px] font-black text-primary-600 uppercase tracking-widest">{role}</p>
                        </div>

                        <div className="w-full mt-10 flex items-center justify-center gap-4 p-5 bg-zinc-900 text-white rounded-xl border border-zinc-800 shadow-xl shadow-zinc-200/50">
                            <Shield className="w-5 h-5 text-primary-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Clearance Level V</span>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-surface-white border border-border-subtle text-critical-600 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-critical-50 md-transition flex items-center justify-center gap-3 group md-elevation-1"
                    >
                        <LogOut className="w-4 h-4 group-hover:-translate-x-1 md-transition" /> System Exit
                    </motion.button>
                </div>

                {/* Form Section */}
                <div className="lg:col-span-8 space-y-8">
                    <div className="p-10 bg-surface-white rounded-2xl border border-border-subtle md-elevation-1 space-y-12">
                        {/* Profile Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1 opacity-60 italic">Identity Header</label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-zinc-50 rounded-lg border border-border-subtle flex items-center justify-center">
                                        <User className="text-zinc-400 w-4 h-4" />
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full pl-16 pr-5 py-4 bg-zinc-50 border border-border-subtle rounded-xl text-sm font-black text-zinc-700 outline-none focus:border-primary-300 focus:bg-surface-white md-transition shadow-inner"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1 opacity-60 italic">Network Node</label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-zinc-50 rounded-lg border border-border-subtle flex items-center justify-center">
                                        <AtSign className="text-zinc-400 w-4 h-4" />
                                    </div>
                                    <input
                                        type="email"
                                        disabled
                                        className="w-full pl-16 pr-5 py-4 bg-zinc-50/50 border border-zinc-100 rounded-xl text-sm font-black text-zinc-400 cursor-not-allowed italic tracking-wide"
                                        value="k.mcveigh@edaca.systems"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Security */}
                        <div className="pt-12 border-t border-border-subtle space-y-8">
                            <div className="flex items-center gap-3 px-1">
                                <Lock className="w-4 h-4 text-primary-600" />
                                <h4 className="text-[11px] font-black text-zinc-800 uppercase tracking-widest">Neural Access Control</h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.button
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="p-8 bg-zinc-900 text-white rounded-2xl font-black text-left flex items-center justify-between group shadow-xl shadow-zinc-900/10"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 backdrop-blur-md">
                                            <Key className="w-5 h-5 text-primary-500" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] opacity-40 uppercase tracking-[0.2em] mb-1.5 font-bold italic">Credentials</p>
                                            <p className="text-base tracking-tight uppercase">Cycle Security Keys</p>
                                        </div>
                                    </div>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 md-transition opacity-40" />
                                </motion.button>
                                <div className="p-8 bg-surface-white rounded-2xl border border-border-subtle flex items-center justify-between shadow-inner group">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-success-50 rounded-xl flex items-center justify-center border border-success-500/10 shadow-sm">
                                            <Fingerprint className="w-5 h-5 text-success-600" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-success-600 uppercase tracking-[0.2em] mb-1.5 font-bold italic">2FA Status</p>
                                            <p className="text-base text-zinc-900 font-black tracking-tight uppercase">Neural ID Active</p>
                                        </div>
                                    </div>
                                    <CheckCircle2 className="w-6 h-6 text-success-600 group-hover:scale-110 md-transition" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
