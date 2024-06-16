"use client";
import { Box, Button, IconButton, ThemeProvider, createTheme, useTheme } from '@mui/material';
import { useDrawer } from '../menu-lateral/drawerContext'

import MenuIcon from '@mui/icons-material/Menu';

import { SearchBar } from './search';
import { LanguageSelector } from './menu';
import { NotificationButton } from './notifications';
import { AccountMenu } from './account';
import { useThemeContext } from '@/themes/themeContext';


export default function Header() {


    const { theme, toggleColorMode } = useThemeContext();
    const { toggleDrawer } = useDrawer();
    return (


        <ThemeProvider theme={theme}>

            <Box sx={{
                height: { lg: "100px" },
                display: "flex",
                gap: "1rem",
                padding: {
                    xs: "1rem",
                    lg: "1rem",
                },
                justifyContent: "space-between",
                backgroundColor: theme.palette.background.paper
            }}>
                <IconButton onClick={toggleDrawer} sx={{ display: { xs: "flex", lg: "none" } }}>
                    <MenuIcon fontSize="large" />
                </IconButton>
                <Box sx={{
                    display: "flex",
                    marginLeft: {
                        xs: "0",
                        xl: "300px",
                    },
                    aligniItems: "center",
                    width: "100%",
                    flex: "2",

                }}>
                    <SearchBar />

                </Box>
                <Box sx={{ minWidth: { lg: "500px" }, flex: "1", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <LanguageSelector />
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <NotificationButton hasNotification={true} />
                        <AccountMenu />
                    </Box>
                </Box>



            </Box >
        </ThemeProvider>

    );
}
