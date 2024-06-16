"use client"
import { createTheme, PaletteColor, PaletteColorOptions, ThemeOptions } from "@mui/material";

// Define a type for your custom palette options
interface CustomPaletteOptions {
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

// Extend the default palette interface to include custom colors
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

// Extend the default theme creation with your custom palette options
export const theme = createTheme({
    palette: {
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
        },
        pink: {
            main: "#FA5A7D",
            light: "#FFE2E5",

        },
        yellow: {
            main: "#FF947A",
            light: "#FFF4DE",
            dark: "#FFCF00"

        },
        green: {
            main: "#3CD856",
            light: "#DCFCE7",
            dark: "#4AB58E"

        },
        purple: {
            main: "#BF83FF",
            light: "#F3E8FF",

        },
        blue: {
            main: "#0095FF",
            light: "#B3E0FF",


        },
    },
    typography: {
        fontFamily: "Public Sans, sans-serif",
    },
} as ThemeOptions & CustomPaletteOptions);
