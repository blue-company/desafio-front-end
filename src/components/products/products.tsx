"use client";
import React from 'react';
import { Box, Card, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, LinearProgress, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface Product {
    position: number;
    name: string;
    leverage: number;
    percentage: number;
}

const products: Product[] = [
    { position: 1, name: 'BLUE START ENF SC', leverage: 100, percentage: 75 },
    { position: 2, name: 'BLUE START ENF SO', leverage: 80, percentage: 60 },
    { position: 3, name: 'BLUE START APT SO', leverage: 25, percentage: 50 },
    { position: 4, name: 'BLUE START APT SC', leverage: 25, percentage: 40 },
];

// Ordena os produtos pela porcentagem em ordem decrescente e pega os top 4
const sortedProducts = products.sort((a, b) => b.percentage - a.percentage).slice(0, 4);

export function TopProducts() {
    const theme = useTheme();

    // Cores diferentes para cada produto
    const colors = [theme.palette.blue?.main, theme.palette.green?.main, theme.palette.purple?.main, theme.palette.yellow?.main];
    const lightColors = [theme.palette.blue?.light, theme.palette.green?.light, theme.palette.purple?.light, theme.palette.yellow?.light];
    const { t } = useTranslation();
    return (
        <Card sx={{
            padding: '2rem',
            borderRadius: '1.5rem',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: "auto",
        }}>
            <Typography variant="h6" fontWeight="bold" color="text.primary" gutterBottom>
                Top Produtos
            </Typography>
            <Box sx={{ flex: 1 }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ height: '30px' }}>
                                <TableCell sx={{ color: 'lightgrey', fontSize: '0.8rem', padding: '8px 8px' }}>#</TableCell>
                                <TableCell sx={{ color: 'lightgrey', fontSize: '0.8rem', padding: '8px 8px' }}>{t('productName')}</TableCell>
                                <TableCell sx={{ color: 'lightgrey', fontSize: '0.8rem', padding: '8px 8px' }}>{t('productLeverage')}</TableCell>
                                <TableCell sx={{ color: 'lightgrey', fontSize: '0.8rem', padding: '8px 8px' }}>%</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sortedProducts.map((product, index) => (
                                <TableRow key={product.position} sx={{ height: '45px' }}>
                                    <TableCell sx={{ padding: '12px 12px' }}>{index + 1}</TableCell>
                                    <TableCell sx={{ padding: '12px 12px' }}>{product.name}</TableCell>
                                    <TableCell sx={{ padding: '12px 12px' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box sx={{ width: '100%', mr: 1 }}>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={product.percentage}
                                                    sx={{
                                                        backgroundColor: lightColors[index],
                                                        '& .MuiLinearProgress-bar': {
                                                            backgroundColor: colors[index]
                                                        }
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{ padding: '12px 12px' }}>
                                        <Box sx={{
                                            color: colors[index],
                                            fontWeight: 'bold',
                                            border: `1px solid ${colors[index]}`,
                                            borderRadius: "8px",
                                            width: "45px",
                                            display: "flex",
                                            justifyContent: "center",
                                        }}>{product.percentage}%</Box>

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Card>
    );
}
