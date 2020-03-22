import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { css } from "linaria";

const inputText = css`
  width: 300px;
  padding: 10px 15px;
  color: white;
  background: rgba(33, 33, 33, 1);
  border: 0;
  border-radius: 5px;
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.3),
    0 1px rgba(255, 255, 255, 0.06);
`;

const InputText = ({
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
    <>
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
    </>
  );
};

InputText.propTypes = {
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
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputText;
