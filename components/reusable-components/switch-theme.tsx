"use client";
import { useThemeContext } from "@/lib/theme/ThemeRegistry";
import { Button } from "@mui/material";

const ThemeSwitcher = () => {
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <div>
      <p>Current Theme: {isDark ? "Dark" : "Light"}</p>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </div>
  );
};

export default ThemeSwitcher;
