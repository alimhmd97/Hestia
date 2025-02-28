import { createTheme } from "@mui/material";
// import { Playfair_Display } from "next/font/google"; // Import the new font

// const playfair = Playfair_Display({
//   weight: ["400", "500", "600", "700"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
// });

export const lightTheme = createTheme({
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
        // root: {
        //   fontFamily: playfair.style.fontFamily,
        // },
      },
    },
    MuiMenu: {
      defaultProps: {
        disableScrollLock: true,
      },
    },
  },
  // typography: {
  //   fontFamily: playfair.style.fontFamily,
  // },
  palette: {
    mode: "light",
    background: {
      default: "#f8f5f1", // Soft cream background
      paper: "#ffffff",
    },
    primary: {
      main: "#8a7968", // Warm taupe
      light: "#a99b8c", // Light taupe
      dark: "#6c5f4e", // Deep taupe
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#d3b99f", // Warm beige/honey
      light: "#e5d3c1", // Light honey
      dark: "#b09478", // Deep honey
    },
    text: {
      primary: "#4a4039", // Deep warm brown
      secondary: "#7d7267", // Medium warm brown
    },
    warning: {
      main: "#d4a373", // Soft amber
    },
    info: {
      main: "#b6b1a3", // Subtle gray
    },
    success: {
      main: "#adc178", // Muted sage green
    },
    error: {
      main: "#b67162", // Muted terracotta
    },
  },
});
