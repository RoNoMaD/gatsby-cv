import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { css } from "linaria";
import { Link as GatsbyLink } from "gatsby";

const link = css`
  color: var(--color-text-primary);
  text-decoration: underline;

  &:hover {
    color: var(--color-brand-primary);
  }

  &:active {
    color: var(--color-brand-primary);
  }
`;

const activeLink = css`
  color: var(--color-brand-primary);
`;

const Link = ({ children, to, className, disabled = false }) => {
  return (
    <GatsbyLink
      to={to}
      className={clsx(link, {
        [className]: className,
      })}
      activeClassName={activeLink}
      disabled={disabled}
    >
      {children}
    </GatsbyLink>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Link;
