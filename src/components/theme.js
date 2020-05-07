import React from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children, initialColorMode }) => {
  const [colorMode, rawSetColorMode] = React.useState(initialColorMode);
  React.useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    rawSetColorMode(initialColorValue);
  }, []);
  const setColorMode = (newValue) => {
    const root = window.document.documentElement;
    // 1. Update React color-mode state
    rawSetColorMode(newValue);
    // 2. Update localStorage
    localStorage.setItem("color-mode", newValue);
    // 3. Update each color
    root.style.setProperty(
      "--color-text-primary",
      newValue === "light"
        ? getComputedStyle(root).getPropertyValue("--color-light-text-primary")
        : getComputedStyle(root).getPropertyValue("--color-dark-text-primary")
    );
    root.style.setProperty(
      "--color-text-secondary",
      newValue === "light"
        ? getComputedStyle(root).getPropertyValue(
            "--color-light-text-secondary"
          )
        : getComputedStyle(root).getPropertyValue("--color-dark-text-secondary")
    );
    root.style.setProperty(
      "--color-background-primary",
      newValue === "light"
        ? getComputedStyle(root).getPropertyValue(
            "--color-light-background-primary"
          )
        : getComputedStyle(root).getPropertyValue(
            "--color-dark-background-primary"
          )
    );
    root.style.setProperty(
      "--color-background-secondary",
      newValue === "light"
        ? getComputedStyle(root).getPropertyValue(
            "--color-light-background-secondary"
          )
        : getComputedStyle(root).getPropertyValue(
            "--color-dark-background-secondary"
          )
    );
    root.style.setProperty(
      "--gradient-primary",
      newValue === "light"
        ? getComputedStyle(root).getPropertyValue("--gradient-light-primary")
        : getComputedStyle(root).getPropertyValue("--gradient-dark-primary")
    );
  };
  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
