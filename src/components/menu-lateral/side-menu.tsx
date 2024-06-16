"use client"
import { Box, Button, Stack, Typography, useTheme, Drawer, useMediaQuery, ThemeProvider } from "@mui/material";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import PieChartIcon from '@mui/icons-material/PieChart';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SideCard from "./side-card";
import { useState } from "react";
import { useDrawer } from "./drawerContext";
import { useThemeContext } from "@/themes/themeContext";

export function SideMenu() {
    const { theme } = useThemeContext();
    const [activeButton, setActiveButton] = useState('dashboard');

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    const { isOpen, toggleDrawer } = useDrawer();

    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

    const content = (
        <Box
            p={5}
            sx={{
                height: "100vh",
                width: "340px",
                display: "flex",
                flexDirection: "column",
                background: theme.palette.background.paper,

            }}
        >
            <Stack direction="row" alignItems="center" spacing={2}>
                <Image src={logo} alt="Logo" />
                <Typography variant="h4" fontWeight="bold" color="text.primary">Blue</Typography>
            </Stack>

            <Stack
                alignItems="center"
                spacing={3}
                my={5}
                sx={{
                    flexGrow: 1,
                }}
            >
                <Button
                    variant={activeButton === 'dashboard' ? 'contained' : 'text'}
                    color={activeButton === 'dashboard' ? 'primary' : 'secondary'}
                    onClick={() => handleButtonClick('dashboard')}
                    sx={{
                        textTransform: "none",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        width: "100%",
                        height: "4rem",
                        borderRadius: "1rem",
                        gap: "1rem",
                    }}
                >
                    <PieChartIcon />
                    Dashboard
                </Button>

                <Button
                    variant={activeButton === 'leaderboard' ? 'contained' : 'text'}
                    color={activeButton === 'leaderboard' ? 'primary' : 'secondary'}
                    onClick={() => handleButtonClick('leaderboard')}
                    sx={{
                        textTransform: "none",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        width: "100%",
                        height: "4rem",
                        borderRadius: "1rem",
                        gap: "1rem",
                    }}
                >
                    <SignalCellularAltIcon />
                    Leaderboard
                </Button>
            </Stack>

            <Box
                sx={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                }}
            >
                <SideCard />
            </Box>
        </Box>
    )

    return (
        <ThemeProvider theme={theme}>
            {isLargeScreen ? (
                <Box sx={{ height: "100vh" }}>
                    {content}
                </Box>
            ) : (
                <Drawer open={isOpen} onClose={toggleDrawer} variant="temporary" sx={{ height: "100vh" }}>
                    {content}
                </Drawer>
            )}
        </ThemeProvider>
    );
}
