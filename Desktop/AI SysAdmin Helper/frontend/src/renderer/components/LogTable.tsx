import { useMemo } from 'react';
import {
    MaterialReactTable,
    type MRT_ColumnDef,
    useMaterialReactTable,
} from 'material-react-table';
import { Chip, Box, Typography } from '@mui/material';
import {
    Clock01Icon as Clock,
    Database01Icon as Database,
} from 'hugeicons-react';

export interface LogEntry {
    id: string;
    timestamp: string;
    level: string;
    message: string;
    source: string;
    host: string;
    severity: 'Critical' | 'High' | 'Medium' | 'Low';
    category?: string;
}

interface LogTableProps {
    logs: LogEntry[];
    onRowClick: (log: LogEntry) => void;
}

export const LogTable: React.FC<LogTableProps> = ({ logs, onRowClick }) => {
    const columns = useMemo<MRT_ColumnDef<LogEntry>[]>(
        () => [
            {
                accessorKey: 'timestamp',
                header: 'Timestamp',
                size: 180,
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
                        <Box>
                            <Typography variant="body2" fontWeight={700} fontSize="13px">
                                {cell.getValue<string>().split(' ')[1]}
                            </Typography>
                            <Typography variant="caption" color="text.secondary" fontSize="10px">
                                {cell.getValue<string>().split(' ')[0]}
                            </Typography>
                        </Box>
                    </Box>
                ),
            },
            {
                accessorKey: 'host',
                header: 'Host Identifier',
                size: 200,
                Cell: ({ cell }) => (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Database style={{ width: 16, height: 16, color: '#2563eb' }} />
                        <Typography variant="body2" fontWeight={700} fontSize="13px">
                            {cell.getValue<string>()}
                        </Typography>
                    </Box>
                ),
            },
            {
                accessorKey: 'message',
                header: 'Log Content',
                size: 400,
                Cell: ({ cell }) => (
                    <Typography
                        variant="body2"
                        fontSize="12px"
                        fontWeight={500}
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            maxWidth: 400,
                        }}
                    >
                        {cell.getValue<string>()}
                    </Typography>
                ),
            },
            {
                accessorKey: 'severity',
                header: 'Audit Severity',
                size: 140,
                Cell: ({ cell }) => {
                    const severity = cell.getValue<string>();
                    const colorMap: Record<string, any> = {
                        Critical: { bgcolor: '#fff1f2', color: '#e11d48', borderColor: '#f43f5e20' },
                        High: { bgcolor: '#fffbeb', color: '#d97706', borderColor: '#f59e0b20' },
                        Medium: { bgcolor: '#eff6ff', color: '#2563eb', borderColor: '#3b82f620' },
                        Low: { bgcolor: '#ecfdf5', color: '#059669', borderColor: '#10b98120' },
                    };
                    const style = colorMap[severity] || colorMap.Medium;

                    return (
                        <Chip
                            label={severity}
                            size="small"
                            sx={{
                                ...style,
                                fontWeight: 700,
                                fontSize: '10px',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                border: 1,
                                height: 24,
                            }}
                        />
                    );
                },
            },
        ],
        []
    );

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

    return <MaterialReactTable table={table} />;
};
