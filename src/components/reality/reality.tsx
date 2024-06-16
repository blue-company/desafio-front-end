"use client"
import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { Box, Card, Typography, useTheme } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface DataPoint {
    name: string;
    aguardando: number;
    finalizados: number;
}

const data: DataPoint[] = [
    { name: 'Jan', aguardando: 80, finalizados: 70 },
    { name: 'Fev', aguardando: 100, finalizados: 60 },
    { name: 'Mar', aguardando: 90, finalizados: 40 },
    { name: 'Abr', aguardando: 110, finalizados: 90 },
    { name: 'Mai', aguardando: 120, finalizados: 90 },
    { name: 'Jun', aguardando: 115, finalizados: 65 },
    { name: 'Jul', aguardando: 105, finalizados: 70 },
];

export function Reality() {
    const theme = useTheme();

    const totalKeys = (key: keyof DataPoint) => {
        return data.reduce((total, item) => total + Number(item[key]), 0);
    };


    const renderLegend = () => {
        const aguardando = totalKeys('aguardando');
        const finalizados = totalKeys('finalizados');

        return (
            <Box>
                <Box sx={{ display: "flex", gap: "1rem", mt: "0.5rem", width: "100%", alignItems: "center", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", gap: "1rem" }}>
                        <Box sx={{ background: theme.palette.green?.light, width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "8px" }}>
                            <WorkOutlineIcon sx={{ color: theme.palette.green?.dark }} />
                        </Box>
                        <Box>
                            <Typography variant="body2" color="text.primary" fontWeight="bold">Contratos finalizados</Typography>
                            <Typography color="secondary.main" sx={{ fontSize: "0.725rem" }}>Global</Typography>
                        </Box>
                    </Box>
                    <Typography variant="body2" color="green.dark" fontWeight="bold" sx={{ justifySelf: "flex-end" }}>{finalizados}</Typography>
                </Box >
                <Box sx={{ display: "flex", gap: "1rem", mt: "0.5rem", width: "100%", alignItems: "center", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", gap: "1rem" }}>
                        <Box sx={{ background: theme.palette.yellow?.dark, width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "8px" }}>
                            <StarBorderIcon sx={{ color: theme.palette.yellow?.contrastText }} />
                        </Box>
                        <Box>
                            <Typography variant="body2" color="text.primary" fontWeight="bold">Aguardando</Typography>
                            <Typography color="secondary.main" sx={{ fontSize: "0.725rem" }}>Commercial</Typography>
                        </Box>
                    </Box>
                    <Typography variant="body2" color="yellow.contra" fontWeight="bold" sx={{ justifySelf: "flex-end" }}>{aguardando}</Typography>
                </Box >
            </Box>
        );
    };

    const axisStyle = {
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.fontSize,
        fill: theme.palette.text.primary,
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

    return (
        <Card sx={{
            padding: '2rem',
            borderRadius: '1.5rem',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
        }}>
            <Typography variant="h6" fontWeight="bold" color="text.primary" gutterBottom>
                Realidade
            </Typography>
            <Box sx={{ flex: 1 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 20, left: 0, right: 0, bottom: 0 }} barSize={20}>
                        <XAxis dataKey="name" tick={axisStyle} tickLine={false} />
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

                        <Bar dataKey="finalizados" name="Finalizados" fill={theme.palette.green?.dark} shape={renderCustomBarShape} />
                        <Bar dataKey="aguardando" name="Aguardando" fill={theme.palette.yellow?.contrastText} shape={renderCustomBarShape} />

                    </BarChart>
                </ResponsiveContainer>
            </Box>
        </Card>
    );
}
