import "../design-tokens/css/colors.css";
import "../src/css/variables.css";
import "../src/css/theme.css";
import "../src/css/reset.css";
import "../src/css/utils.css";
import React, { useState, useEffect } from "react";
import addons from "@storybook/addons";
import { configure, addDecorator, addParameters } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Props,
  Stories,
} from "@storybook/addon-docs/blocks";
import { action } from "@storybook/addon-actions";

import { useDarkMode } from "storybook-dark-mode";

// your theme provider
import { ThemeContext } from "../src/components/theme";

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// This global variable is prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/";
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname);
};

// get channel to listen to event emitter
const channel = addons.getChannel();

// create a component that uses the dark mode hook
function ThemeWrapper(props) {
  const [colorMode, rawSetColorMode] = useState("light");

  useEffect(() => {
    // listen to DARK_MODE event
    channel.on("DARK_MODE", (isDark) => {
      setColorMode(isDark ? "dark" : "light");
    });
    return () =>
      channel.off("DARK_MODE", (isDark) => {
        setColorMode(isDark ? "dark" : "light");
      });
  }, [colorMode, rawSetColorMode]);

  const setColorMode = (newValue) => {
    const root = window.document.documentElement;
    // 1. Update React color-mode state
    rawSetColorMode(newValue);
    // 3. Update each color
    root.dataset.theme = newValue;
  };
  // render the custom theme provider
  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

addDecorator((renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>);

addParameters({
  docs: {
    page: () => (
      <ThemeWrapper>
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <Props />
        <Stories />
      </ThemeWrapper>
    ),
  },
});
