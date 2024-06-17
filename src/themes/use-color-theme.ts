"use client"
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { getDesignTokens } from "./Theme";


export const useColorTheme = () => {
    const [mode, setMode] = React.useState<PaletteMode>(() => {
        const savedMode = localStorage.getItem('themeMode');
        return savedMode ? (savedMode as 'light' | 'dark') : 'light';
    });

    const toggleColorMode = () =>
        setMode((prevMode) => {
            const newMode = prevMode === 'light' ? 'dark' : 'light';
            localStorage.setItem('themeMode', newMode);
            return newMode;
        });

    const modifiedTheme = React.useMemo(
        () => createTheme(getDesignTokens(mode)),
        [mode]
    );

    useEffect(() => {
        const savedMode = localStorage.getItem('themeMode');
        if (savedMode && savedMode !== mode) {
            setMode(savedMode as 'light' | 'dark');
        }
    }, [mode]);

    return {
        theme: modifiedTheme,
        mode,
        toggleColorMode,
    };
};

