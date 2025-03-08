import { createTheme } from "@mui/material";

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
        root: {
          textTransform: "none", // More elegant button styling
        },
      },
    },
    MuiMenu: {
      defaultProps: {
        disableScrollLock: true,
      },
    },
  },
  palette: {
    mode: "light",
    background: {
      default: "#FFF6F4", // Soft Off-White (warm & inviting)
      paper: "#FFFFFF", // Pure white for contrast
    },
    primary: {
      main: "#582B39", // Deep Wine Brown (luxurious, warm)
      light: "#BB8378", // Muted Rosewood (soft and warm)
      dark: "#7A2A21", // Deep Brick Red (strong contrast)
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#BB8378", // Muted Rosewood (warm & inviting)
      light: "#E3B6A8", // Softer version of rosewood
      dark: "#7A2A21", // Deep Brick Red (adds depth)
    },
    text: {
      primary: "#582B39", // Deep Wine Brown (elegant & readable)
      secondary: "#7A2A21", // Brick Red (warm accents)
    },
    warning: {
      main: "#BB8378", // Soft red-brown (warm warning tone)
    },
    info: {
      main: "#E3B6A8", // Lighter muted rosewood (gentle notifications)
    },
    success: {
      main: "#BB8378", // Muted Rosewood (calm, natural success tone)
    },
    error: {
      main: "#7A2A21", // Deep Brick Red (strong but earthy)
    },
  },
});
