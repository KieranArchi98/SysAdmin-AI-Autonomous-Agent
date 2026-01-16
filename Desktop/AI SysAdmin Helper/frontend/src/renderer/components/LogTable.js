import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable, } from 'material-react-table';
import { Chip, Box, Typography } from '@mui/material';
import { Clock01Icon as Clock, Database01Icon as Database, } from 'hugeicons-react';
export const LogTable = ({ logs, onRowClick }) => {
    const columns = useMemo(() => [
        {
            accessorKey: 'timestamp',
            header: 'Timestamp',
            size: 180,
            Cell: ({ cell }) => (_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1.5 }, children: [_jsx(Box, { sx: {
                            width: 32,
                            height: 32,
                            borderRadius: 1.5,
                            bgcolor: 'grey.50',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: 1,
                            borderColor: 'grey.100',
                        }, children: _jsx(Clock, { style: { width: 16, height: 16, color: '#a1a1aa' } }) }), _jsxs(Box, { children: [_jsx(Typography, { variant: "body2", fontWeight: 700, fontSize: "13px", children: cell.getValue().split(' ')[1] }), _jsx(Typography, { variant: "caption", color: "text.secondary", fontSize: "10px", children: cell.getValue().split(' ')[0] })] })] })),
        },
        {
            accessorKey: 'host',
            header: 'Host Identifier',
            size: 200,
            Cell: ({ cell }) => (_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1 }, children: [_jsx(Database, { style: { width: 16, height: 16, color: '#2563eb' } }), _jsx(Typography, { variant: "body2", fontWeight: 700, fontSize: "13px", children: cell.getValue() })] })),
        },
        {
            accessorKey: 'message',
            header: 'Log Content',
            size: 400,
            Cell: ({ cell }) => (_jsx(Typography, { variant: "body2", fontSize: "12px", fontWeight: 500, sx: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    maxWidth: 400,
                }, children: cell.getValue() })),
        },
        {
            accessorKey: 'severity',
            header: 'Audit Severity',
            size: 140,
            Cell: ({ cell }) => {
                const severity = cell.getValue();
                const colorMap = {
                    Critical: { bgcolor: '#fff1f2', color: '#e11d48', borderColor: '#f43f5e20' },
                    High: { bgcolor: '#fffbeb', color: '#d97706', borderColor: '#f59e0b20' },
                    Medium: { bgcolor: '#eff6ff', color: '#2563eb', borderColor: '#3b82f620' },
                    Low: { bgcolor: '#ecfdf5', color: '#059669', borderColor: '#10b98120' },
                };
                const style = colorMap[severity] || colorMap.Medium;
                return (_jsx(Chip, { label: severity, size: "small", sx: {
                        ...style,
                        fontWeight: 700,
                        fontSize: '10px',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        border: 1,
                        height: 24,
                    } }));
            },
        },
    ], []);
    const table = useMaterialReactTable({
        columns,
        data: logs,
        enableColumnResizing: true,
        enableColumnOrdering: true,
        enableSorting: true,
        enableColumnFilters: true,
        enablePagination: true,
        enableRowSelection: false,
        enableDensityToggle: true,
        enableFullScreenToggle: true,
        enableGlobalFilter: true,
        initialState: {
            density: 'comfortable',
            pagination: { pageSize: 20, pageIndex: 0 },
        },
        muiTableProps: {
            sx: {
                '& .MuiTableCell-root': {
                    borderBottom: '1px solid #e4e4e7',
                },
            },
        },
        muiTableHeadCellProps: {
            sx: {
                bgcolor: 'grey.50',
                fontWeight: 700,
                fontSize: '10px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'grey.400',
                borderBottom: '1px solid #e4e4e7',
            },
        },
        muiTableBodyRowProps: ({ row }) => ({
            onClick: () => onRowClick(row.original),
            sx: {
                cursor: 'pointer',
                transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                    bgcolor: 'rgba(244, 244, 245, 0.4)',
                    transform: 'translateX(4px)',
                },
            },
        }),
        muiTablePaperProps: {
            elevation: 0,
            sx: {
                border: '1px solid #e4e4e7',
                borderRadius: 4,
                overflow: 'hidden',
            },
        },
    });
    return _jsx(MaterialReactTable, { table: table });
};
