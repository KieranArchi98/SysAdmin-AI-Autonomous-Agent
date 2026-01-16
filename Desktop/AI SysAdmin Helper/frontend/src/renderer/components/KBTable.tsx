import { useMemo } from 'react';
import {
    MaterialReactTable,
    type MRT_ColumnDef,
    useMaterialReactTable,
} from 'material-react-table';
import { Box, Typography, Button } from '@mui/material';
import {
    ListViewIcon as FileText,
    Clock01Icon as Clock,
} from 'hugeicons-react';

export interface KBEntry {
    id: string;
    description: string;
    remediation: string;
    category: string;
    lastUpdated: string;
    severity: 'Critical' | 'High' | 'Medium' | 'Low';
}

interface KBTableProps {
    entries: KBEntry[];
    onRowClick: (entry: KBEntry) => void;
}

export const KBTable: React.FC<KBTableProps> = ({ entries, onRowClick }) => {
    const columns = useMemo<MRT_ColumnDef<KBEntry>[]>(
        () => [
            {
                accessorKey: 'id',
                header: 'Resource ID',
                size: 160,
                Cell: ({ cell }) => (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box
                            sx={{
                                width: 32,
                                height: 32,
                                borderRadius: 1.5,
                                bgcolor: 'grey.50',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: 1,
                                borderColor: 'grey.100',
                            }}
                        >
                            <FileText style={{ width: 16, height: 16, color: '#2563eb' }} />
                        </Box>
                        <Typography variant="caption" fontFamily="monospace" fontWeight={700} fontSize="11px" sx={{ letterSpacing: '0.1em' }} color="text.secondary">
                            {cell.getValue<string>()}
                        </Typography>
                    </Box>
                ),
            },
            {
                accessorKey: 'description',
                header: 'Operational Context',
                size: 300,
                Cell: ({ cell, row }) => (
                    <Box>
                        <Typography variant="body2" fontWeight={700} fontSize="13px" gutterBottom color="text.primary">
                            {cell.getValue<string>()}
                        </Typography>
                        <Typography variant="caption" fontWeight={700} fontSize="10px" sx={{ letterSpacing: '0.1em', textTransform: 'uppercase' }} color="text.secondary">
                            {row.original.category}
                        </Typography>
                    </Box>
                ),
            },
            {
                accessorKey: 'category', // Actually handled in description column but kept for filtering/sorting
                header: 'Reference Type',
                size: 150,
                // Hidden by default since it's combined with description, but useful for filtering
                enableHiding: true,
                Cell: ({ cell }) => (
                    <Typography variant="body2">{cell.getValue<string>()}</Typography>
                ),
            },
            {
                accessorKey: 'severity',
                header: 'Impact Rank',
                size: 140,
                Cell: ({ cell }) => {
                    const severity = cell.getValue<string>();
                    const colorMap: Record<string, any> = {
                        Critical: { bgcolor: '#f43f5e', boxShadow: '0 1px 2px 0 rgba(244, 63, 94, 0.4)' },
                        High: { bgcolor: '#f59e0b', boxShadow: 'none' },
                        Medium: { bgcolor: '#2563eb', boxShadow: 'none' },
                        Low: { bgcolor: '#10b981', boxShadow: 'none' },
                    };
                    const styles = colorMap[severity] || colorMap.Medium;

                    return (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box sx={{ width: 6, height: 6, borderRadius: '50%', ...styles }} />
                            <Typography
                                variant="caption"
                                fontWeight={700}
                                fontSize="11px"
                                sx={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}
                                color={
                                    severity === 'Critical' ? 'error.main' :
                                        severity === 'High' ? 'warning.main' :
                                            severity === 'Medium' ? 'primary.main' : 'success.main'
                                }
                            >
                                {severity}
                            </Typography>
                        </Box>
                    );
                },
            },
            {
                accessorKey: 'lastUpdated',
                header: 'Revision Pulse',
                size: 160,
                Cell: ({ cell }) => (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box
                            sx={{
                                width: 32,
                                height: 32,
                                borderRadius: 1.5,
                                bgcolor: 'grey.50',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: 1,
                                borderColor: 'grey.100',
                            }}
                        >
                            <Clock style={{ width: 16, height: 16, color: '#a1a1aa' }} />
                        </Box>
                        <Typography variant="caption" fontFamily="monospace" fontWeight={700} fontSize="11px" sx={{ letterSpacing: '0.1em' }} color="text.secondary">
                            {cell.getValue<string>()}
                        </Typography>
                    </Box>
                ),
            },
        ],
        []
    );

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
        renderRowActions: ({ row }) => (
            <Button
                size="small"
                variant="outlined"
                sx={{
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
                }}
                onClick={(e) => {
                    e.stopPropagation();
                    onRowClick(row.original);
                }}
            >
                VIEW
            </Button>
        ),
        enableRowActions: true,
        positionActionsColumn: 'last',
    });

    return <MaterialReactTable table={table} />;
};
