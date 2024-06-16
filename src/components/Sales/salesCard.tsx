"use client";
import { Card, Box, Typography, useTheme } from "@mui/material";
import React from 'react';

export interface SalesCardProps {
    cardBgColor: string;
    iconBgColor: string;
    icon: React.ReactElement;
    salesAmount: string;
    salesText: string;
    salesChange: string;
}

export function SalesCard({
    cardBgColor,
    iconBgColor,
    icon,
    salesAmount,
    salesText,
    salesChange
}: SalesCardProps) {

    const theme = useTheme();
    return (
        <Card sx={{
            padding: "1rem",
            height: "200px",
            width: "100%",
            borderRadius: "1rem",
            backgroundColor: cardBgColor,
            boxShadow: "none"
        }}>
            <Box bgcolor={iconBgColor} sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {React.cloneElement(icon, { fontSize: "medium", sx: { color: theme.palette.text.secondary } })}
            </Box>
            <Typography variant="h5" fontWeight="bold" color="text.primary" sx={{ mt: "0.75rem" }}>{salesAmount}</Typography>
            <Typography color="secondary.contrastText" sx={{ mt: "8px", fontSize: "1rem" }}>{salesText}</Typography>
            <Typography color="primary.main" sx={{ fontSize: "0.75rem", mt: "0.75rem" }}>{salesChange}</Typography>
        </Card>
    );
}
