import { useMemo } from 'react';
import {
    MaterialReactTable,
    type MRT_ColumnDef,
    useMaterialReactTable,
} from 'material-react-table';
import { Chip, Box, Typography, Button, Avatar } from '@mui/material';
import {
    AlertCircleIcon as AlertCircle,
    Clock01Icon as Clock,
} from 'hugeicons-react';

export interface IncidentEntry {
    id: string;
    title: string;
    severity: 'Critical' | 'High' | 'Medium' | 'Low';
    status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
    timestamp: string;
    assignedTo: string;
    description: string;
    linkedAnomalies: string[];
}

interface IncidentTableProps {
    incidents: IncidentEntry[];
    onRowClick: (incident: IncidentEntry) => void;
}

export const IncidentTable: React.FC<IncidentTableProps> = ({ incidents, onRowClick }) => {
    const columns = useMemo<MRT_ColumnDef<IncidentEntry>[]>(
        () => [
            {
                accessorKey: 'id',
                header: 'Incident ID',
                size: 150,
                Cell: ({ cell, row }) => (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box
                            sx={{
                                width: 32,
                                height: 32,
                                borderRadius: 1.5,
                                bgcolor: row.original.severity === 'Critical' ? '#FEF2F2' : '#FFFBEB',
                                border: 1,
                                borderColor: row.original.severity === 'Critical' ? '#FEE2E2' : '#FEF3C7',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: row.original.severity === 'Critical' ? '#EF4444' : '#F59E0B',
                            }}
                        >
                            <AlertCircle style={{ width: 16, height: 16 }} />
                        </Box>
                        <Typography variant="caption" fontFamily="monospace" fontWeight={700} fontSize="11px" sx={{ letterSpacing: '0.1em' }} color="text.secondary">
                            {cell.getValue<string>()}
                        </Typography>
                    </Box>
                ),
            },
            {
                accessorKey: 'title',
                header: 'Title & Origin',
                size: 280,
                Cell: ({ cell, row }) => (
                    <Box>
                        <Typography variant="body2" fontWeight={700} fontSize="13px" gutterBottom color="text.primary">
                            {cell.getValue<string>()}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box sx={{ width: 14, height: 14, borderRadius: 0.5, bgcolor: 'primary.50', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 1, borderColor: 'primary.100' }}>
                                <AlertCircle style={{ width: 8, height: 8, color: '#3b82f6' }} />
                            </Box>
                            <Typography variant="caption" fontWeight={700} fontSize="10px" sx={{ letterSpacing: '0.1em', textTransform: 'uppercase' }} color="text.secondary">
                                Linked Signals: {row.original.linkedAnomalies.length}
                            </Typography>
                        </Box>
                    </Box>
                ),
            },
            {
                accessorKey: 'severity',
                header: 'Severity',
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
                accessorKey: 'status',
                header: 'Operational Status',
                size: 160,
                Cell: ({ cell }) => {
                    const status = cell.getValue<string>();
                    const colorMap: Record<string, any> = {
                        Open: { bgcolor: '#FEF2F2', color: '#DC2626', borderColor: '#FECACA' },
                        'In Progress': { bgcolor: '#EFF6FF', color: '#2563EB', borderColor: '#BFDBFE' },
                        Resolved: { bgcolor: '#ECFDF5', color: '#059669', borderColor: '#A7F3D0' },
                        Closed: { bgcolor: '#FAFAFA', color: '#71717A', borderColor: '#E4E4E7' },
                    };
                    const styles = colorMap[status] || colorMap.Closed;

                    return (
                        <Chip
                            label={status}
                            size="small"
                            sx={{
                                ...styles,
                                fontWeight: 700,
                                fontSize: '10px',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                border: 1,
                                height: 24,
                                borderRadius: 1,
                            }}
                        />
                    );
                },
            },
            {
                accessorKey: 'assignedTo',
                header: 'Operator',
                size: 180,
                Cell: ({ cell }) => (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${cell.getValue<string>()}`}
                            sx={{ width: 24, height: 24, borderRadius: 1 }}
                            variant="rounded"
                        />
                        <Typography variant="body2" fontWeight={700} fontSize="11px" color="text.secondary">
                            {cell.getValue<string>()}
                        </Typography>
                    </Box>
                ),
            },
            {
                accessorKey: 'timestamp',
                header: 'Last Pulse',
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
                        <Box>
                            <Typography variant="body2" fontWeight={700} fontSize="11px">
                                {cell.getValue<string>().split(' ')[1]}
                            </Typography>
                            <Typography variant="caption" color="text.secondary" fontSize="10px" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em' }} fontWeight={700}>
                                {cell.getValue<string>().split(' ')[0]}
                            </Typography>
                        </Box>
                    </Box>
                ),
            },
        ],
        []
    );

    const table = useMaterialReactTable({
        columns,
        data: incidents,
        enableColumnResizing: true,
        enableSorting: true,
        enablePagination: true,
        enableRowSelection: false,
        enableDensityToggle: true,
        enableFullScreenToggle: true,
        initialState: {
            density: 'comfortable',
            pagination: { pageSize: 10, pageIndex: 0 },
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
                RESPOND
            </Button>
        ),
        enableRowActions: true,
        positionActionsColumn: 'last',
    });

    return <MaterialReactTable table={table} />;
};
