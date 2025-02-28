"use client";
import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const darkTheme = createTheme({
  //   cssVariables: true, //To use CSS theme variables
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "1rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: inter.style.fontFamily,
        },
      },
    },
    MuiMenu: {
      defaultProps: {
        disableScrollLock: true,
      },
    },
  },
  typography: {
    // fontSize: 16,
    fontFamily: inter.style.fontFamily,
  },
  palette: {
    mode: "dark",
    background: {
      default: `#1B1B1B`,
      paper: "#333333",
    },
    primary: {
      // main: "#a3a3a3",
      main: "#000",
      dark: "#0D0D0D",
      light: "#525252",
      contrastText: "#FFF",
    },
    text: {
      primary: "#FFF",
      secondary: "#333333",
    },
    secondary: {
      main: "#A0D2D1",
      dark: "#262626",
    },
    //yellow
    warning: {
      main: "#C5F42F",
    },
    //light green
    info: {
      main: "#DEA742",
    },
    //light  blue
    success: {
      main: "#358088",
    },
    //red
    error: {
      main: "#DF0B1C",
    },
  },
});
