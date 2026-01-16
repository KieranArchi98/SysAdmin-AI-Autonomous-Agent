import { createTheme } from '@mui/material/styles';
// Create MUI theme that matches our existing design tokens
export const stratosTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
            main: '#2563eb',
            light: '#3b82f6',
            dark: '#1d4ed8',
            contrastText: '#ffffff',
        },
        success: {
            50: '#ecfdf5',
            500: '#10b981',
            600: '#059669',
            main: '#10b981',
            dark: '#059669',
            contrastText: '#ffffff',
        },
        warning: {
            50: '#fffbeb',
            500: '#f59e0b',
            600: '#d97706',
            main: '#f59e0b',
            dark: '#d97706',
            contrastText: '#ffffff',
        },
        error: {
            50: '#fff1f2',
            500: '#f43f5e',
            600: '#e11d48',
            main: '#f43f5e',
            dark: '#e11d48',
            contrastText: '#ffffff',
        },
        info: {
            50: '#f0f9ff',
            500: '#0ea5e9',
            600: '#0284c7',
            main: '#0ea5e9',
            dark: '#0284c7',
            contrastText: '#ffffff',
        },
        grey: {
            50: '#fafafa',
            100: '#f4f4f5',
            200: '#e4e4e7',
            300: '#d4d4d8',
            400: '#a1a1aa',
            500: '#71717a',
            600: '#52525b',
            700: '#3f3f46',
            800: '#27272a',
            900: '#18181b',
        },
        background: {
            default: '#f8fafd',
            paper: '#ffffff',
        },
        text: {
            primary: '#18181b',
            secondary: '#71717a',
            disabled: '#a1a1aa',
        },
        divider: '#e4e4e7',
    },
    typography: {
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
        fontSize: 15,
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
        h1: {
            fontSize: '2.5rem',
            fontWeight: 900,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 900,
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 800,
            lineHeight: 1.4,
            letterSpacing: '-0.01em',
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 800,
            lineHeight: 1.4,
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 700,
            lineHeight: 1.5,
        },
        h6: {
            fontSize: '1.125rem',
            fontWeight: 700,
            lineHeight: 1.5,
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 600,
            lineHeight: 1.75,
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 600,
            lineHeight: 1.57,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: 1.6,
            letterSpacing: '-0.011em',
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: 1.6,
        },
        button: {
            fontSize: '0.875rem',
            fontWeight: 700,
            lineHeight: 1.75,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 600,
            lineHeight: 1.66,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
        },
        overline: {
            fontSize: '0.625rem',
            fontWeight: 700,
            lineHeight: 2.66,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
        },
    },
    shape: {
        borderRadius: 16,
    },
    shadows: [
        'none',
        '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    ],
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    padding: '12px 24px',
                    transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
                },
                contained: {
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                        transform: 'translateY(-1px)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e4e4e7',
                    transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                },
                elevation1: {
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                },
                elevation2: {
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                },
                elevation3: {
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 12,
                        transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#a1a1aa',
                            },
                        },
                        '&.Mui-focused': {
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#2563eb',
                                borderWidth: 2,
                            },
                        },
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    borderRight: '1px solid #e4e4e7',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    borderBottom: '1px solid #e4e4e7',
                    backdropFilter: 'blur(12px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: '1px solid #e4e4e7',
                },
                head: {
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#a1a1aa',
                },
            },
        },
    },
});
