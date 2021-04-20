/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react";

import { ThemeProvider } from "./src/components/theme";

import "./design-tokens/css/colors.css";
import "./src/css/theme.css";
import "./src/css/variables.css";
import "./src/css/reset.css";
import "./src/css/utils.css";
import "prismjs/themes/prism-okaidia.css";

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation !== null) {
    const skipLink = document.querySelector("#reach-skip-nav");

    if (skipLink) {
      skipLink.tabIndex = -1;
      skipLink.focus();
    }
  }
};

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
