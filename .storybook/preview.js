import "../design-tokens/css/color.css";
import "../src/css/variables.css";
import "../src/css/reset.css";
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

import { useDarkMode } from "storybook-dark-mode";

// your theme provider
import { ThemeContext } from "../src/components/theme";

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
    root.style.setProperty(
      "--color-text-primary",
      newValue === "light"
        ? getComputedStyle(root).getPropertyValue("--color-light-text")
        : getComputedStyle(root).getPropertyValue("--color-dark-text")
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
      "--color-background",
      newValue === "light"
        ? getComputedStyle(root).getPropertyValue("--color-light-background")
        : getComputedStyle(root).getPropertyValue("--color-dark-background")
    );
    root.style.setProperty(
      "--color-background-secondary",
      newValue === "light"
        ? getComputedStyle(root).getPropertyValue(
            "--color-light-background-dark"
          )
        : getComputedStyle(root).getPropertyValue(
            "--color-dark-background-dark"
          )
    );
    root.style.setProperty(
      "--color-background-gradient",
      newValue === "light"
        ? getComputedStyle(root).getPropertyValue(
            "--color-light-background-gradient"
          )
        : getComputedStyle(root).getPropertyValue(
            "--color-dark-background-gradient"
          )
    );
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
