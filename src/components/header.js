import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "gatsby";
import { css } from "linaria";

import useDocumentScrollThrottled from "./useDocumentScrollThrottled";

import NewspaperIcon from "../images/newspaper.svg";
import EnvelopeIcon from "../images/envelope.svg";

const header = css`
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: var(--spacing) var(--spacing-large);
  color: var(--color-neutral-white);
  transform: translateY(0px);
  transition-delay: 0s;
  transition-timing-function: ease-in-out;
  transition-duration: 300ms;
  transition-property: transform;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-brand-grey-dark);
    transition-delay: 0s;
    transition-timing-function: ease-in-out;
    transition-duration: 200ms;
    transition-property: opacity;
    content: "";
  }
`;

const headerTransparent = css`
  &::before {
    opacity: 0;
  }
`;

const headerHidden = css`
  transform: translateY(-100%);
`;

const romain = css`
  position: relative;
  margin-right: auto;
  color: var(--color-brand-green);
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: 1px solid var(--color-brand-green);
    outline-offset: 0.25rem;
  }
`;

const nav = css`
  position: relative;
`;

const navList = css`
  display: flex;

  & > * + * {
    margin-left: var(--spacing-large);
  }
`;

const link = css`
  display: flex;
  align-items: center;
  color: var(--color-neutral-white);
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  & > * + * {
    margin-left: var(--spacing-small);
  }

  &:hover,
  &:focus {
    color: var(--color-brand-green);
    text-decoration: underline;
    transform: scale(1.1);

    & > * + * {
      text-decoration: underline;
    }
  }

  &:active {
    color: var(--color-brand-green);
  }

  &:focus {
    outline: 1px solid var(--color-neutral-white);
    outline-offset: 0.25rem;
  }
`;

const activeLink = css`
  color: var(--color-brand-green);
`;

const linkIcon = css`
  height: 30px;
`;

const linkText = css`
  @media (min-width: 47em) {
    position: static;
    width: auto;
    height: auto;
    overflow: visible;
    clip: auto;
  }

  /* &:not(:focus):not(:active) { */
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap; /* added line */
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  /* } */
`;

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);

  useDocumentScrollThrottled(({ previousScrollTop, currentScrollTop }) => {
    setIsHeaderTransparent(currentScrollTop === 0);
    setIsHidden(previousScrollTop < currentScrollTop);
  });

  return (
    <header
      className={clsx(header, {
        [headerTransparent]: isHeaderTransparent,
        [headerHidden]: isHidden,
      })}
    >
      <Link to="/" className={romain}>
        Romain Lebascle
      </Link>
      <nav className={nav}>
        <ul className={navList}>
          {/* <li>
            <Link to="/blog" className={link} activeClassName={activeLink}>
              <NewspaperIcon className={linkIcon} />
              <span className={linkText}>Blog</span>
            </Link>
          </li> */}
          <li>
            <Link to="/contact" className={link} activeClassName={activeLink}>
              <EnvelopeIcon className={linkIcon} />
              <span className={linkText}>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
