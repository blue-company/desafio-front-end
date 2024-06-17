"use client"
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { getDesignTokens } from "./Theme";

export const useColorTheme = () => {
    const [mode, setMode] = React.useState<PaletteMode>('light');

    // Set initial mode based on localStorage
    useEffect(() => {
        const savedMode = localStorage.getItem('themeMode');
        if (savedMode) {
            setMode(savedMode as 'light' | 'dark');
        }
    }, []);

    const toggleColorMode = () => {
        setMode((prevMode) => {
            const newMode = prevMode === 'light' ? 'dark' : 'light';
            localStorage.setItem('themeMode', newMode);
            return newMode;
        });
    };

    const modifiedTheme = React.useMemo(
        () => createTheme(getDesignTokens(mode)),
        [mode]
    );

    return {
        theme: modifiedTheme,
        mode,
        toggleColorMode,
    };
};
