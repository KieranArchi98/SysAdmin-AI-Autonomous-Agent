import { useState, Component, ErrorInfo, ReactNode } from 'react';
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

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
    constructor(props: { children: ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(_: Error) { return { hasError: true }; }
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="p-20 text-center bg-surface-base min-h-screen">
                    <h1 className="text-4xl font-black text-critical-600 mb-6 uppercase tracking-tighter">System Malfunction</h1>
                    <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">Diagnostic buffer overflow or rendering failure</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.reload()}
                        className="mt-12 px-8 py-4 bg-primary-600 text-white rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-primary-500/20"
                    >
                        Re-initialize Core
                    </motion.button>
                </div>
            );
        }
        return this.props.children;
    }
}

function AppContent() {
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="h-screen w-screen flex bg-surface-base overflow-hidden relative">
            {/* Sidebar Toggle Logic */}
            <div className="relative flex h-full">
                <Sidebar isOpen={sidebarOpen} />

                {/* Toggle Tab - Positioned 164px below top, flush with edge */}
                <motion.button
                    whileHover={{ width: 42 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="absolute top-[164px] left-full z-50 w-8 h-12 bg-surface-white border border-border-subtle border-l-0 rounded-r-2xl shadow-sm flex items-center justify-center hover:bg-zinc-50 md-transition group overflow-hidden"
                    title={sidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
                >
                    <motion.div
                        animate={{
                            height: sidebarOpen ? 16 : 24,
                            backgroundColor: sidebarOpen ? 'var(--color-border-default)' : 'var(--color-primary-600)'
                        }}
                        className="w-1 rounded-full group-hover:bg-primary-400 md-transition"
                    />
                </motion.button>
            </div>

            <div className="flex-1 flex flex-col min-w-0 bg-surface-base">
                <Header />

                <main className="flex-1 overflow-y-auto custom-scrollbar">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 12, scale: 0.995 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.995 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                            className="h-full"
                        >
                            <Routes location={location} key={location.pathname}>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/logs" element={<Logs />} />
                                <Route path="/anomalies" element={<Anomalies />} />
                                <Route path="/incidents" element={<Incidents />} />
                                <Route path="/kb" element={<KB />} />
                                <Route path="/settings" element={<Settings />} />
                                <Route path="/health" element={<SystemHealth />} />
                            </Routes>
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
}

function App() {
    return (
        <ThemeProvider theme={stratosTheme}>
            <CssBaseline />
            <ErrorBoundary>
                <AppContent />
            </ErrorBoundary>
        </ThemeProvider>
    );
}

export default App;
