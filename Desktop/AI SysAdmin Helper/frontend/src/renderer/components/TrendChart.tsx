import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const data = [
    { time: '00:00', logs: 0.8, anomalies: 2 },
    { time: '04:00', logs: 0.6, anomalies: 1 },
    { time: '08:00', logs: 1.2, anomalies: 5 },
    { time: '12:00', logs: 2.1, anomalies: 3 },
    { time: '16:00', logs: 1.8, anomalies: 8 },
    { time: '20:00', logs: 1.4, anomalies: 4 },
    { time: '23:59', logs: 1.1, anomalies: 2 },
];

export const TrendChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" opacity={0.5} />
                <XAxis
                    dataKey="time"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#a1a1aa', fontSize: 10, fontWeight: 900, textAnchor: 'middle' }}
                    dy={12}
                />
                <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#a1a1aa', fontSize: 10, fontWeight: 900 }}
                    dx={-8}
                />
                <Tooltip
                    cursor={{ fill: '#f4f4f5' }}
                    contentStyle={{
                        borderRadius: '16px',
                        border: '1px solid #f4f4f5',
                        boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)',
                        padding: '16px',
                        backgroundColor: '#ffffff'
                    }}
                    itemStyle={{ fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em' }}
                />
                <Bar name="Logs (M)" dataKey="logs" fill="var(--color-primary-600)" radius={[6, 6, 0, 0]} barSize={24} />
                <Bar name="Anomalies" dataKey="anomalies" fill="var(--color-critical-600)" radius={[6, 6, 0, 0]} barSize={24} />
            </BarChart>
        </ResponsiveContainer>
    );
};
