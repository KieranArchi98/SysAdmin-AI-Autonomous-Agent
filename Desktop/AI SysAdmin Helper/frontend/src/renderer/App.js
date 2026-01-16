import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, Component } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { stratosTheme } from './theme/mui-theme';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './routes/Dashboard';
import { Logs } from './routes/Logs';
import { Anomalies } from './routes/Anomalies';
import { Incidents } from './routes/Incidents';
import { KB } from './routes/KB';
import { Settings } from './routes/Settings';
import { SystemHealth } from './routes/SystemHealth';
import { motion, AnimatePresence } from 'framer-motion';
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(_) { return { hasError: true }; }
    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (_jsxs("div", { className: "p-20 text-center bg-surface-base min-h-screen", children: [_jsx("h1", { className: "text-4xl font-black text-critical-600 mb-6 uppercase tracking-tighter", children: "System Malfunction" }), _jsx("p", { className: "text-zinc-500 font-bold uppercase tracking-widest text-sm", children: "Diagnostic buffer overflow or rendering failure" }), _jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: () => window.location.reload(), className: "mt-12 px-8 py-4 bg-primary-600 text-white rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-primary-500/20", children: "Re-initialize Core" })] }));
        }
        return this.props.children;
    }
}
function AppContent() {
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(true);
    return (_jsxs("div", { className: "h-screen w-screen flex bg-surface-base overflow-hidden relative", children: [_jsxs("div", { className: "relative flex h-full", children: [_jsx(Sidebar, { isOpen: sidebarOpen }), _jsx(motion.button, { whileHover: { width: 42 }, whileTap: { scale: 0.95 }, onClick: () => setSidebarOpen(!sidebarOpen), className: "absolute top-[164px] left-full z-50 w-8 h-12 bg-surface-white border border-border-subtle border-l-0 rounded-r-2xl shadow-sm flex items-center justify-center hover:bg-zinc-50 md-transition group overflow-hidden", title: sidebarOpen ? "Hide Sidebar" : "Show Sidebar", children: _jsx(motion.div, { animate: {
                                height: sidebarOpen ? 16 : 24,
                                backgroundColor: sidebarOpen ? 'var(--color-border-default)' : 'var(--color-primary-600)'
                            }, className: "w-1 rounded-full group-hover:bg-primary-400 md-transition" }) })] }), _jsxs("div", { className: "flex-1 flex flex-col min-w-0 bg-surface-base", children: [_jsx(Header, {}), _jsx("main", { className: "flex-1 overflow-y-auto custom-scrollbar", children: _jsx(AnimatePresence, { mode: "wait", children: _jsx(motion.div, { initial: { opacity: 0, y: 12, scale: 0.995 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: -8, scale: 0.995 }, transition: {
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }, className: "h-full", children: _jsxs(Routes, { location: location, children: [_jsx(Route, { path: "/", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "/logs", element: _jsx(Logs, {}) }), _jsx(Route, { path: "/anomalies", element: _jsx(Anomalies, {}) }), _jsx(Route, { path: "/incidents", element: _jsx(Incidents, {}) }), _jsx(Route, { path: "/kb", element: _jsx(KB, {}) }), _jsx(Route, { path: "/settings", element: _jsx(Settings, {}) }), _jsx(Route, { path: "/health", element: _jsx(SystemHealth, {}) })] }, location.pathname) }, location.pathname) }) })] })] }));
}
function App() {
    return (_jsxs(ThemeProvider, { theme: stratosTheme, children: [_jsx(CssBaseline, {}), _jsx(ErrorBoundary, { children: _jsx(AppContent, {}) })] }));
}
export default App;
