"use client"
import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Card, Typography, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import brasilTopoJson from './br-states.json';

const salesData: { [key: string]: { sales: number } } = {
    BA: { sales: 500 },
    RJ: { sales: 200 },
    SP: { sales: 300 },
    AM: { sales: 150 },

};

const geoUrl = brasilTopoJson;

export function SalesMap() {
    const theme = useTheme();

    return (
        <Card sx={{ padding: '1rem', height: '100%', borderRadius: '1rem', overflow: 'hidden' }}>
            <Typography variant="h6" gutterBottom>
                Vendas por Estado
            </Typography>
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale: 600, center: [-50, -15] }}
                height={500}
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map(geo => {
                            const { id } = geo.properties;
                            const sales = salesData[id]?.sales || 0;

                            return (
                                <Tooltip key={geo.rsmKey} title={`${id}: ${sales}`} placement="top">
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={sales > 0 ? theme.palette.primary.main : '#e0e0e0'}
                                        stroke="#FFFFFF"
                                        strokeWidth={0.5}
                                        style={{
                                            default: {
                                                outline: 'none',
                                            },
                                            hover: {
                                                outline: 'none',
                                            },
                                            pressed: {
                                                outline: 'none',
                                            },
                                        }}
                                    />
                                </Tooltip>
                            );
                        })
                    }
                </Geographies>
            </ComposableMap>
        </Card>
    );
}
