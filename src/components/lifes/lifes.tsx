"use client"
import React from 'react';
import {
    Area,
    AreaChart,
    Legend,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';
import { Box, Card, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface DataPoint {
    lastMonth: number;
    thisMonth: number;
}

const data: DataPoint[] = [
    { lastMonth: 40, thisMonth: 50 },
    { lastMonth: 50, thisMonth: 90 },
    { lastMonth: 35, thisMonth: 50 },
    { lastMonth: 50, thisMonth: 70 },
    { lastMonth: 40, thisMonth: 60 },
    { lastMonth: 60, thisMonth: 100 },
    { lastMonth: 30, thisMonth: 70 },
    { lastMonth: 70, thisMonth: 80 },
    { lastMonth: 50, thisMonth: 70 },
    { lastMonth: 80, thisMonth: 90 },
];

export function Lifes() {
    const theme = useTheme();

    const { t } = useTranslation();

    const totalKeys = (key: keyof DataPoint) => {
        return data.reduce((total, item) => total + item[key], 0);
    };

    const renderLegend = () => {
        const ultimoMesTotal = totalKeys('lastMonth');
        const esteMesTotal = totalKeys('thisMonth');

        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <div style={{ marginRight: '1rem', display: 'flex', flexDirection: "column", borderRight: "1px solid gray", paddingRight: "1rem" }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '12px', height: '12px', backgroundColor: theme.palette.blue?.main, borderRadius: '50%', marginRight: '5px' }}></div>
                        <Typography variant="body2" style={{ color: theme.palette.text.primary }}>{t("lastMonth")}</Typography>
                    </div>
                    <Typography variant="body2" style={{ color: theme.palette.text.primary }}>{ultimoMesTotal}</Typography>
                </div>
                <div style={{ marginRight: '1rem', display: 'flex', flexDirection: "column" }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '12px', height: '12px', backgroundColor: theme.palette.green?.main, borderRadius: '50%', marginRight: '5px' }}></div>
                        <Typography variant="body2" style={{ color: theme.palette.text.primary }}>{t("thisMonth")}</Typography>
                    </div>
                    <Typography variant="body2" style={{ color: theme.palette.text.primary }}>{esteMesTotal}</Typography>
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
            overflow: 'hidden',
        }}>
            <Typography variant="h6" fontWeight="bold" color="text.primary" gutterBottom>
                {t('lifes')}
            </Typography>
            <Box sx={{ flex: 1 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 20, left: 0, right: 0, bottom: 5 }}>
                        <defs>
                            <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={theme.palette.blue?.main} stopOpacity={0.8} />
                                <stop offset="95%" stopColor={theme.palette.blue?.main} stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={theme.palette.green?.main} stopOpacity={0.8} />
                                <stop offset="95%" stopColor={theme.palette.green?.main} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="lastMonth" strokeWidth={2} stroke={theme.palette.blue?.main} fillOpacity={1} fill="url(#colorLastMonth)" name="Último Mês" />
                        <Area type="monotone" dataKey="thisMonth" strokeWidth={2} stroke={theme.palette.green?.main} fillOpacity={1} fill="url(#colorThisMonth)" name="Este Mês" />
                        <Tooltip
                            contentStyle={{ fontFamily: theme.typography.fontFamily, fontSize: theme.typography.fontSize }}
                        />
                        <Legend
                            content={renderLegend}
                            wrapperStyle={{
                                fontFamily: theme.typography.fontFamily,
                                fontSize: theme.typography.fontSize,
                                textAlign: 'center',
                                marginTop: '1rem',
                            }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </Box>
        </Card>
    );
}
