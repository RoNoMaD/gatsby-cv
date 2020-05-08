import React, { useContext } from "react";
import { css } from "linaria";

import { ThemeContext } from "./theme";
import SunIcon from "../images/sun.svg";
import MoonIcon from "../images/moon.svg";

const checkboxContainer = css`
  position: relative;
`;

const checkbox = css`
  @supports (-webkit-appearance: none) or (-moz-appearance: none) {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 24px;
    height: 24px;
    appearance: none;
  }
`;

const DarkToggle = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <div className={checkboxContainer}>
      <input
        type="checkbox"
        className={checkbox}
        checked={colorMode === "dark"}
        onChange={(ev) => {
          setColorMode(ev.target.checked ? "dark" : "light");
        }}
      />
      {colorMode === "dark" ? (
        <SunIcon aria-hidden="true" role="presentation" />
      ) : (
        <MoonIcon aria-hidden="true" role="presentation" />
      )}
    </div>
  );
};

export default DarkToggle;
