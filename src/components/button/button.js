import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { css } from "linaria";

const button = css`
  font-family: inherit; /* For all browsers */
  font-size: 100%; /* For all browsers */
  line-height: 1.15; /* For all browsers */
  margin: 0; /* Firefox and Safari have margin */
  overflow: visible; /* Edge hides overflow */
  text-transform: none; /* Firefox inherits text-transform */
  -webkit-appearance: button; /* Safari otherwise prevents some styles */

  &::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  &:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  min-width: 44pt;
  min-height: 44pt;
  padding: 10px 30px;
  border: 2px solid #fff;
  border-radius: 40px;
  color: #fff;
  font-size: 12pt;
  background: transparent;
  outline: 0;
  transition: all 0.5s ease;

  &[disabled] {
    color: grey;
    border: 2px solid grey;
    cursor: not-allowed;
  }

  &:hover:not([disabled]) {
    color: hsla(0, 0%, 19%, 1);
    background: #fff;
  }

  &:focus {
    outline: 0; /* Removes the default blue ring */
    /* Now, let's create our own focus style */
    box-shadow: 0 0 5px #fff;
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
  disabled = false
}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={clsx(button, {
        [className]: className
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
  disabled: PropTypes.bool
};

export default Button;
