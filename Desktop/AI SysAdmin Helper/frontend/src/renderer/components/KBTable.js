import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable, } from 'material-react-table';
import { Box, Typography, Button } from '@mui/material';
import { ListViewIcon as FileText, Clock01Icon as Clock, } from 'hugeicons-react';
export const KBTable = ({ entries, onRowClick }) => {
    const columns = useMemo(() => [
        {
            accessorKey: 'id',
            header: 'Resource ID',
            size: 160,
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
                        }, children: _jsx(FileText, { style: { width: 16, height: 16, color: '#2563eb' } }) }), _jsx(Typography, { variant: "caption", fontFamily: "monospace", fontWeight: 700, fontSize: "11px", sx: { letterSpacing: '0.1em' }, color: "text.secondary", children: cell.getValue() })] })),
        },
        {
            accessorKey: 'description',
            header: 'Operational Context',
            size: 300,
            Cell: ({ cell, row }) => (_jsxs(Box, { children: [_jsx(Typography, { variant: "body2", fontWeight: 700, fontSize: "13px", gutterBottom: true, color: "text.primary", children: cell.getValue() }), _jsx(Typography, { variant: "caption", fontWeight: 700, fontSize: "10px", sx: { letterSpacing: '0.1em', textTransform: 'uppercase' }, color: "text.secondary", children: row.original.category })] })),
        },
        {
            accessorKey: 'category', // Actually handled in description column but kept for filtering/sorting
            header: 'Reference Type',
            size: 150,
            // Hidden by default since it's combined with description, but useful for filtering
            enableHiding: true,
            Cell: ({ cell }) => (_jsx(Typography, { variant: "body2", children: cell.getValue() })),
        },
        {
            accessorKey: 'severity',
            header: 'Impact Rank',
            size: 140,
            Cell: ({ cell }) => {
                const severity = cell.getValue();
                const colorMap = {
                    Critical: { bgcolor: '#f43f5e', boxShadow: '0 1px 2px 0 rgba(244, 63, 94, 0.4)' },
                    High: { bgcolor: '#f59e0b', boxShadow: 'none' },
                    Medium: { bgcolor: '#2563eb', boxShadow: 'none' },
                    Low: { bgcolor: '#10b981', boxShadow: 'none' },
                };
                const styles = colorMap[severity] || colorMap.Medium;
                return (_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1 }, children: [_jsx(Box, { sx: { width: 6, height: 6, borderRadius: '50%', ...styles } }), _jsx(Typography, { variant: "caption", fontWeight: 700, fontSize: "11px", sx: { letterSpacing: '0.1em', textTransform: 'uppercase' }, color: severity === 'Critical' ? 'error.main' :
                                severity === 'High' ? 'warning.main' :
                                    severity === 'Medium' ? 'primary.main' : 'success.main', children: severity })] }));
            },
        },
        {
            accessorKey: 'lastUpdated',
            header: 'Revision Pulse',
            size: 160,
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
                        }, children: _jsx(Clock, { style: { width: 16, height: 16, color: '#a1a1aa' } }) }), _jsx(Typography, { variant: "caption", fontFamily: "monospace", fontWeight: 700, fontSize: "11px", sx: { letterSpacing: '0.1em' }, color: "text.secondary", children: cell.getValue() })] })),
        },
    ], []);
    const table = useMaterialReactTable({
        columns,
        data: entries,
        enableColumnResizing: true,
        enableSorting: true,
        enablePagination: true,
        enableRowSelection: false,
        enableDensityToggle: true,
        enableFullScreenToggle: true,
        initialState: {
            density: 'comfortable',
            pagination: { pageSize: 10, pageIndex: 0 },
            columnVisibility: { category: false }, // Hide category column as it's merged
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
        renderRowActions: ({ row }) => (_jsx(Button, { size: "small", variant: "outlined", sx: {
                opacity: 0,
                transition: 'opacity 0.2s',
                '.MuiTableRow-root:hover &': { opacity: 1 },
                borderColor: 'grey.200',
                color: 'text.secondary',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                minWidth: 0,
                padding: '4px 12px',
                '&:hover': {
                    borderColor: 'primary.main',
                    color: 'primary.main',
                }
            }, onClick: (e) => {
                e.stopPropagation();
                onRowClick(row.original);
            }, children: "VIEW" })),
        enableRowActions: true,
        positionActionsColumn: 'last',
    });
    return _jsx(MaterialReactTable, { table: table });
};
