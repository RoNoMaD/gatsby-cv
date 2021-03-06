import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { css } from "linaria";

const container = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const inputText = css`
  width: calc(320px - 64px);
  margin-top: var(--spacing-small);
  padding: var(--spacing-small) var(--spacing);
  color: var(--color-text-primary);
  background: var(--color-background-secondary);
  border: 1px solid var(--color-text-secondary);

  &:focus {
    outline: 0; /* Removes the default blue ring */
    box-shadow: 0 0 5px var(--color-text-primary); /* our own focus style */
  }
`;

const TextField = ({
  type,
  inputMode,
  value,
  id,
  name,
  className,
  disabled,
  required,
  label,
  placeholder,
  onChange,
}) => {
  return (
    <div className={container}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        inputMode={inputMode}
        value={value}
        id={id}
        name={name}
        className={clsx(inputText, { [className]: className })}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

TextField.propTypes = {
  type: PropTypes.oneOf([
    "text",
    "number",
    "date",
    "email",
    "tel",
    "password",
    "search",
    "url",
  ]),
  inputMode: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextField;
