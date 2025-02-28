"use client";
import createCache from "@emotion/cache";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import { useServerInsertedHTML } from "next/navigation";
// import { parseCookies, setCookie } from "nookies";
import { THEME_MODES } from "@/consts/general";
import { setCookie } from "nookies";
import React, { createContext, useContext, useState } from "react";
import { darkTheme } from "./dark-theme";
import { lightTheme } from "./light-theme";
const ThemeContext = createContext(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
};

export default function ThemeRegistry(props) {
  const [isUpdateModeLoading, setIsUpdateModeLoading] = useState(false);
  const [mode, setMode] = useState(THEME_MODES.LIGHT);
  const { options, children } = props;
  const [{ cache, flush }] = React.useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: options.prepend ? `@layer emotion {${styles}}` : styles,
        }}
      />
    );
  });

  const theme = React.useMemo(
    () =>
      createTheme({
        ...(mode === THEME_MODES.DARK ? darkTheme : lightTheme),
        // Make sure no `vars` field or any internal MUI field is used
        customVars: {
          // Define your custom properties here, not conflicting with MUI's internal structure
        },
      }),
    [mode]
  );

  const toggleTheme = async () => {
    if (isUpdateModeLoading) return;

    setCookie(
      null,
      "mode",
      mode === THEME_MODES.DARK ? THEME_MODES.LIGHT : THEME_MODES.DARK,
      {
        maxAge: 30 * 24 * 60 * 60, // Expires in 30 days
        path: "/",
      }
    );
    setMode((prevDarkMode) => {
      if (prevDarkMode === THEME_MODES.DARK) {
        return THEME_MODES.LIGHT;
      }
      return THEME_MODES.DARK;
    });

    try {
      setIsUpdateModeLoading(true);

      setCookie(null, "mode", res.data.data.profile.mode, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    } catch (e) {
      console.log(e);
    }
    setIsUpdateModeLoading(false);
  };

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <ThemeContext.Provider value={{ toggleTheme, mode }}>
          <CssBaseline />
          {children}
        </ThemeContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
