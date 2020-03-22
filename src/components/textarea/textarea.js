import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { css } from "linaria";

const textarea = css`
  width: 300px;
  padding: 10px 15px;
  color: white;
  background: rgba(33, 33, 33, 1);
  border: 0;
  border-radius: 5px;
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.3),
    0 1px rgba(255, 255, 255, 0.06);
`;

const Textarea = ({
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
      <textarea
        value={value}
        id={id}
        name={name}
        className={clsx(textarea, { [className]: className })}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

Textarea.propTypes = {
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

export default Textarea;
