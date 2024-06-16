"use client";
import { createTheme, PaletteColor, PaletteColorOptions, ThemeOptions } from "@mui/material";
import { PaletteMode } from "@mui/material";
import { amber } from "@mui/material/colors";

// Define a type for your custom palette options
export interface CustomPaletteOptions {
    palette?: {
        primary?: {
            main: string;
            dark: string;
            light: string;
            contrastText: string;
        };
        secondary?: {
            main: string;
            dark: string;
            light: string;
            contrastText: string;
        };
        background?: {
            default: string;
            paper: string;
        };
        text?: {
            primary: string;
            secondary: string;
        };
        pink?: {
            main: string;
            light: string;
            dark: string;
            contrastText: string;
        };
        yellow?: {
            main: string;
            light: string;
            dark: string;
            contrastText: string;
        };
        green?: {
            main: string;
            light: string;
            dark: string;
            contrastText: string;
        };
        purple?: {
            main: string;
            light: string;
            dark: string;
            contrastText: string;
        };
        blue?: {
            main: string;
            light: string;
            dark: string;
            contrastText: string;
        };
    };
    typography?: {
        fontFamily: string;
    };
}

declare module "@mui/material/styles" {
    interface Palette {
        pink?: PaletteColor;
        yellow?: PaletteColor;
        green?: PaletteColor;
        purple?: PaletteColor;
        blue?: PaletteColor;
    }
    interface PaletteOptions {
        pink?: PaletteColorOptions;
        yellow?: PaletteColorOptions;
        green?: PaletteColorOptions;
        purple?: PaletteColorOptions;
        blue?: PaletteColorOptions;
    }
}

const theme = {
    palette: {
        primary: amber,
    },
};

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                    main: "#2500FF",
                    dark: "#1900b2",
                    light: "#5033ff",
                    contrastText: "#ffffff",
                },
                secondary: {
                    main: "#737791",
                    dark: "#b28f00",
                    light: "#fffa00",
                    contrastText: "#737791",
                },
                background: {
                    default: "#F9F9F9",
                    paper: "#ffffff",
                },
                text: {
                    primary: "#05004E",
                    secondary: "#ffffff",
                    dark: "#05004E",
                },
                pink: {
                    main: "#FA5A7D",
                    light: "#FFE2E5",
                    dark: "#c51162",
                    contrastText: "#ffffff",
                },
                yellow: {
                    main: "#FF947A",
                    light: "#FFF4DE",
                    dark: "#FFF4DE",
                    contrastText: "#FFCF00",
                },
                green: {
                    main: "#3CD856",
                    light: "#DCFCE7",
                    dark: "#4AB58E",
                    contrastText: "#000000",
                },
                purple: {
                    main: "#BF83FF",
                    light: "#F3E8FF",
                    dark: "#9c27b0",
                    contrastText: "#ffffff",
                },
                blue: {
                    main: "#0095FF",
                    light: "#B3E0FF",
                    dark: "#01579b",
                    contrastText: "#ffffff",
                },
            }
            : {
                // palette values for dark mode
                primary: {
                    main: "#2500FF",
                    dark: "#1900b2",
                    light: "#5033ff",
                    contrastText: "#ffffff",
                },
                secondary: {
                    main: "#737791",
                    dark: "#b28f00",
                    light: "#fffa00",
                    contrastText: "#737791",
                },
                background: {
                    default: "#0F0F0F",
                    paper: "#0F0F0F",
                },
                text: {
                    primary: "#ffffff",
                    secondary: "#ffffff",
                    dark: "#05004E",
                },
                pink: {
                    main: "#FA5A7D",
                    light: "#FFE2E5",
                    dark: "#c51162",
                    contrastText: "#ffffff",
                },
                yellow: {
                    main: "#FF947A",
                    light: "#FFF4DE",
                    dark: "#FFF4DE",
                    contrastText: "#FFCF00",
                },
                green: {
                    main: "#3CD856",
                    light: "#DCFCE7",
                    dark: "#4AB58E",
                    contrastText: "#000000",
                },
                purple: {
                    main: "#BF83FF",
                    light: "#F3E8FF",
                    dark: "#9c27b0",
                    contrastText: "#ffffff",
                },
                blue: {
                    main: "#0095FF",
                    light: "#B3E0FF",
                    dark: "#01579b",
                    contrastText: "#ffffff",
                },
            }),
    },
    typography: {
        fontFamily: "Public Sans, sans-serif",
    },
} as ThemeOptions & CustomPaletteOptions);

export default theme;