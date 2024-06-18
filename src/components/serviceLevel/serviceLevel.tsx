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
import { useTranslation } from 'react-i18next';


interface DataPoint {
    expectativa: number;
    realidade: number;
}

const data: DataPoint[] = [
    { expectativa: 90, realidade: 60 },
    { expectativa: 30, realidade: 20 },
    { expectativa: 50, realidade: 10 },
    { expectativa: 110, realidade: 70 },
    { expectativa: 100, realidade: 50 },
    { expectativa: 120, realidade: 45 },
];



export function ServiceLevel() {
    const theme = useTheme();
    const { t } = useTranslation();



    const totalKeys = (key: keyof DataPoint) => {
        return data.reduce((total, item) => total + item[key], 0);
    };

    const renderLegend = () => {
        const expectativa = Number(totalKeys('expectativa'));
        const realidade = Number(totalKeys('realidade'));

        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <div style={{ marginRight: '1rem', display: 'flex', flexDirection: "column", borderRight: "1px solid gray", paddingRight: "1rem" }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '12px', height: '12px', backgroundColor: theme.palette.blue?.main, borderRadius: '50%', marginRight: '5px' }}></div>
                        <Typography variant="body2" style={{ color: theme.palette.text.primary }}>{t('expectation')}</Typography>
                    </div>
                    <Typography variant="body2" style={{ color: theme.palette.text.primary }}>{expectativa}</Typography>
                </div>
                <div style={{ marginRight: '1rem', display: 'flex', flexDirection: "column" }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '12px', height: '12px', backgroundColor: theme.palette.green?.main, borderRadius: '50%', marginRight: '5px' }}></div>
                        <Typography variant="body2" style={{ color: theme.palette.text.primary }}>{t('reality')}</Typography>
                    </div>
                    <Typography variant="body2" style={{ color: theme.palette.text.primary }}>{realidade}</Typography>
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
                {t('serviceLevel')}
            </Typography>
            <Box sx={{ flex: 1 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 20, left: 20, right: 20, bottom: 10 }} barSize={20}>

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
                        <Bar dataKey="realidade" name="Realidade" stackId="x" fill={theme.palette.green?.main} />
                        <Bar dataKey="expectativa" name="Expectativa" stackId="x" fill={theme.palette.blue?.main} />


                    </BarChart>
                </ResponsiveContainer>
            </Box>
        </Card>
    );
}

