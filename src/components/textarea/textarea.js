import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { css } from "linaria";

const container = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const textarea = css`
  width: calc(320px - 64px);
  padding: var(--spacing-small) var(--spacing);
  color: white;
  background: rgba(33, 33, 33, 1);
  border: 0;

  &:focus {
    box-shadow: 0 0 5px #fff; /* our own focus style */
  }
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
    <div className={container}>
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
    </div>
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
