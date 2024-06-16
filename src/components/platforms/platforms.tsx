"use client"
import React, { useState, MouseEvent } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { Box, Card, Typography, useTheme } from '@mui/material';

interface DataPoint {
    name: string;
    TDConsultoria: number;
    RIKOPlataforma: number;
    BlueServicos: number;
}

const data: DataPoint[] = [
    { name: 'Jan', TDConsultoria: 100, RIKOPlataforma: 80, BlueServicos: 120 },
    { name: 'Feb', TDConsultoria: 180, RIKOPlataforma: 120, BlueServicos: 150 },
    { name: 'Mar', TDConsultoria: 260, RIKOPlataforma: 160, BlueServicos: 180 },
    { name: 'Apr', TDConsultoria: 220, RIKOPlataforma: 140, BlueServicos: 170 },
    { name: 'May', TDConsultoria: 300, RIKOPlataforma: 180, BlueServicos: 200 },
    { name: 'Jun', TDConsultoria: 380, RIKOPlataforma: 220, BlueServicos: 230 },
    { name: 'Jul', TDConsultoria: 340, RIKOPlataforma: 200, BlueServicos: 250 },
    { name: 'Aug', TDConsultoria: 400, RIKOPlataforma: 240, BlueServicos: 280 },
    { name: 'Sep', TDConsultoria: 280, RIKOPlataforma: 220, BlueServicos: 270 },
    { name: 'Oct', TDConsultoria: 360, RIKOPlataforma: 260, BlueServicos: 290 },
    { name: 'Nov', TDConsultoria: 440, RIKOPlataforma: 300, BlueServicos: 310 },
    { name: 'Dec', TDConsultoria: 500, RIKOPlataforma: 340, BlueServicos: 330 },
];

export function Platforms() {
    const theme = useTheme();
    const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

    const handleMouseOver = (event: any, data: any): void => {
        setActiveIndex(event ? event.index : undefined);
    };

    const handleMouseLeave = (): void => {
        setActiveIndex(undefined);
    };

    const renderDot = (props: any): React.ReactElement => {
        const { cx, cy, index, payload } = props;

        if (index === activeIndex) {
            return <circle cx={cx as number} cy={cy as number} r={8} fill={payload.stroke as string} />;
        }

        return <></>;
    };

    const axisStyle = {
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.fontSize,
        fill: 'grey',
    };

    const yAxisStyle = {
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.fontSize,
        fill: 'grey',
    };

    const renderLegend = () => {

        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <div style={{ marginRight: '1rem', display: 'flex', flexDirection: "column" }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '12px', height: '12px', backgroundColor: theme.palette.purple?.main, borderRadius: '50%', marginRight: '5px' }}></div>
                        <Typography variant="body2" style={{ color: theme.palette.text.primary }}>Td Consultoria</Typography>
                    </div>

                </div>
                <div style={{ marginRight: '1rem', display: 'flex', flexDirection: "column" }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '12px', height: '12px', backgroundColor: theme.palette.pink?.main, borderRadius: '50%', marginRight: '5px' }}></div>
                        <Typography variant="body2" style={{ color: theme.palette.text.primary }}>Riko Plataforma</Typography>
                    </div>

                </div>
                <div style={{ marginRight: '1rem', display: 'flex', flexDirection: "column" }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '12px', height: '12px', backgroundColor: theme.palette.green?.main, borderRadius: '50%', marginRight: '5px' }}></div>
                        <Typography variant="body2" style={{ color: theme.palette.text.primary }}>Blue Serviços</Typography>
                    </div>

                </div>
            </div>
        );
    };

    return (
        <Card sx={{
            padding: '2rem',
            borderRadius: '1.5rem',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden', // Prevent overflow and cutoffs
        }}>
            <Typography variant="h6" fontWeight="bold" color="text.primary" gutterBottom>
                Plataformas
            </Typography>
            <Box sx={{ flex: 1, marginLeft: '-30px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 20, left: 0, right: 0, bottom: 2 }}>
                        <CartesianGrid vertical={false} stroke={theme.palette.divider} />
                        <XAxis dataKey="name" tick={axisStyle} tickLine={false} />
                        <YAxis tick={yAxisStyle} tickCount={5} tickLine={false} domain={[0, 400]} ticks={[0, 100, 200, 300, 400]} />
                        <Tooltip
                            contentStyle={{ fontFamily: theme.typography.fontFamily, fontSize: theme.typography.fontSize }}
                        />
                        <Legend
                            content={renderLegend}
                            wrapperStyle={{
                                fontFamily: theme.typography.fontFamily,
                                fontSize: theme.typography.fontSize,
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="TDConsultoria"
                            stroke={theme.palette.purple?.main}
                            strokeWidth={4}
                            dot={renderDot}
                            onMouseOver={handleMouseOver}
                            onMouseLeave={handleMouseLeave}
                        />
                        <Line
                            type="monotone"
                            dataKey="RIKOPlataforma"
                            stroke={theme.palette.pink?.main}
                            strokeWidth={4}
                            dot={renderDot}
                            onMouseOver={handleMouseOver}
                            onMouseLeave={handleMouseLeave}
                        />
                        <Line
                            type="monotone"
                            dataKey="BlueServicos"
                            stroke={theme.palette.green?.main}
                            strokeWidth={4}
                            dot={renderDot}
                            onMouseOver={handleMouseOver}
                            onMouseLeave={handleMouseLeave}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Box>
        </Card>
    );
}

