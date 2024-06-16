"use client"
import React from 'react';
import {
    BarChart,
    Bar,
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
    aguardando: number;
    implantadas: number;
}

const data: DataPoint[] = [
    { name: 'Seg', aguardando: 100, implantadas: 50 },
    { name: 'Ter', aguardando: 120, implantadas: 80 },
    { name: 'Qua', aguardando: 90, implantadas: 70 },
    { name: 'Qui', aguardando: 110, implantadas: 90 },
    { name: 'Sex', aguardando: 130, implantadas: 120 },
    { name: 'Sab', aguardando: 125, implantadas: 80 },
    { name: 'Som', aguardando: 110, implantadas: 60 },
];

export function Income() {
    const theme = useTheme();

    const renderLegend = () => {

        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <div style={{ marginRight: '1rem', display: 'flex', flexDirection: "column", borderRight: "1px solid gray", paddingRight: "1rem" }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '12px', height: '12px', backgroundColor: theme.palette.blue?.main, borderRadius: '50%', marginRight: '5px' }}></div>
                        <Typography variant="body2" style={{ color: theme.palette.text.primary }}>Aguardando</Typography>
                    </div>

                </div>
                <div style={{ marginRight: '1rem', display: 'flex', flexDirection: "column" }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '12px', height: '12px', backgroundColor: theme.palette.green?.main, borderRadius: '50%', marginRight: '5px' }}></div>
                        <Typography variant="body2" style={{ color: theme.palette.text.primary }}>Implantadas</Typography>
                    </div>

                </div>
            </div>
        );
    };

    const renderCustomBarShape = (props: any) => {
        const { x, y, width, height } = props;

        return (
            <g>
                <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    rx={5}
                    ry={5}
                    fill={props.fill}
                />
            </g>
        );
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
                Rendimento Semanal
            </Typography>
            <Box sx={{ flex: 1, marginLeft: "-30px" }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 20, left: 0, right: 0, bottom: 2 }} barSize={20}>
                        <CartesianGrid vertical={false} stroke={theme.palette.divider} />
                        <XAxis dataKey="name" tick={axisStyle} tickLine={false} />
                        <YAxis tickLine={false} tick={yAxisStyle} />
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
                        <Bar dataKey="aguardando" name="Aguardando" fill={theme.palette.blue?.main} shape={renderCustomBarShape} />
                        <Bar dataKey="implantadas" name="Implantadas" fill={theme.palette.green?.main} shape={renderCustomBarShape} />
                    </BarChart>
                </ResponsiveContainer>
            </Box>
        </Card>
    );
};
