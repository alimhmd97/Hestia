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
      default: "#fdf6ee", // Your color 1 - Light background
      paper: "#FFF",
    },
    primary: {
      main: "#7A2A21", // Your color 2 - Deep red
      light: "#F18B6D", // Your color 8 - Coral/salmon
      dark: "#C74F43", // Your color 4 - Brick red
      contrastText: "#fdf6ee",
    },
    secondary: {
      main: "#ED8D1E", // Your color 3 - Orange
      light: "#F1D1A6", // Your color 7 - Light beige
      dark: "#7A2A21", // Your color 2 - Dark red
    },
    text: {
      primary: "#7A2A21", // Your color 2 - Deep red
      secondary: "#C74F43", // Your color 4 - Brick red
    },
    warning: {
      main: "#ED8D1E", // Your color 3 - Orange
    },
    info: {
      main: "#B4AEA1", // Your color 5 - Gray
    },
    success: {
      main: "#F1D1A6", // Your color 7 - Light beige
    },
    error: {
      main: "#C74F43", // Your color 4 - Brick red
    },
  },
});
