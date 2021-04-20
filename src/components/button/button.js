import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { css } from "linaria";

const button = css`
  min-width: 44px;
  min-height: 44px;
  padding: 10px 30px;
  color: var(--color-text-primary);
  font-size: 12pt;
  font-family: inherit;
  background: transparent;
  border: 2px solid var(--color-text-primary);
  border-radius: 40px;
  outline: 0;
  cursor: pointer;
  transition: all 0.5s ease;

  &[disabled] {
    color: grey;
    border: 2px solid grey;
    cursor: not-allowed;
  }

  &:focus {
    outline: 0; /* Removes the default blue ring */
    box-shadow: 0 0 5px var(--color-text-primary); /* our own focus style */
  }

  &:hover:not([disabled]) {
    color: var(--color-background-primary);
    background: var(--color-text-primary);
  }

  /* remove focus style on click */
  &:focus:not(:focus-visible) {
    outline: 0;
  }
`;

const Button = ({
  children,
  type = "submit",
  handleClick,
  className,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={clsx(button, {
        [className]: className,
      })}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  handleClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
