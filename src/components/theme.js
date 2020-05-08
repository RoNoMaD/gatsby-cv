import React from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children, initialColorMode }) => {
  const [colorMode, rawSetColorMode] = React.useState(initialColorMode);
  React.useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.dataset.theme;
    rawSetColorMode(initialColorValue);
  }, []);
  const setColorMode = (newValue) => {
    const root = window.document.documentElement;
    // 1. Update React color-mode state
    rawSetColorMode(newValue);
    // 2. Update localStorage
    localStorage.setItem("color-mode", newValue);
    // 3. Theme data attribute
    root.dataset.theme = newValue;
  };
  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
