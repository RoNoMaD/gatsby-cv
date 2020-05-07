/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from "react";
import { ThemeProvider } from "./src/components/theme";

const MagicScriptTag = () => {
  const codeToRunOnClient = `
(function() {
  function getInitialColorMode() {
    const persistedColorPreference =
      window.localStorage.getItem('color-mode');
    const hasPersistedPreference =
      typeof persistedColorPreference === 'string';
    // If the user has explicitly chosen light or dark,
    // let's use it. Otherwise, this value will be null.
    if (hasPersistedPreference) {
      return persistedColorPreference;
    }
    // If they haven't been explicit, let's check the media
    // query
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }
    // If they are using a browser/OS that doesn't support
    // color themes, let's default to 'light'.
    return 'light';
  }
  const colorMode = getInitialColorMode();
  const root = document.documentElement;
  root.style.setProperty(
    '--color-text-primary',
    colorMode === 'light'
      ? getComputedStyle(root).getPropertyValue("--color-light-text-primary")
      : getComputedStyle(root).getPropertyValue("--color-dark-text-primary")
  );
  root.style.setProperty(
    "--color-text-secondary",
    colorMode === "light"
      ? getComputedStyle(root).getPropertyValue(
          "--color-light-text-secondary"
        )
      : getComputedStyle(root).getPropertyValue("--color-dark-text-secondary")
  );
  root.style.setProperty(
    '--color-background-primary',
    colorMode === 'light'
      ? getComputedStyle(root).getPropertyValue("--color-light-background-primary")
      : getComputedStyle(root).getPropertyValue("--color-dark-background-primary")
  );
  root.style.setProperty(
    '--color-background-secondary',
    colorMode === 'light'
      ? getComputedStyle(root).getPropertyValue("--color-light-background-secondary")
      : getComputedStyle(root).getPropertyValue("--color-dark-background-secondary")
  );
  root.style.setProperty(
    '--gradient-primary',
    colorMode === 'light'
      ? getComputedStyle(root).getPropertyValue("--gradient-light-primary")
      : getComputedStyle(root).getPropertyValue("--gradient-dark-primary")
  );
  root.style.setProperty('--initial-color-mode', colorMode);
})()
  `;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
