import React, { useState } from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { css } from 'linaria';

import useDocumentScrollThrottled from './useDocumentScrollThrottled';

import NewspaperIcon from '../images/newspaper.svg';
import EnvelopeIcon from '../images/envelope.svg';

const header = css`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: var(--spacing) var(--spacing-large);
  color: var(--color-neutral-white);

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-brand-grey-dark);
    transition-delay: 0s;
    transition-timing-function: ease-in-out;
    transition-duration: 150ms;
    transition-property: opacity;
    content: '';
  }
`;

const headerTransparent = css`
  &::before {
    opacity: 0;
  }
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
`;

const nav = css`
  position: relative;
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

  &:hover {
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
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    setIsHeaderTransparent(currentScrollTop === 0);
  });

  return (
    <header
      className={clsx(header, {
        [headerTransparent]: isHeaderTransparent,
      })}
    >
      <Link to="/" className={romain}>
        Romain Lebascle
      </Link>
      <nav className={nav}>
        <Link to="/blog" className={link} activeClassName={activeLink}>
          <NewspaperIcon className={linkIcon} />
          <span className={linkText}>Blog</span>
        </Link>
        <Link to="/contact" className={link} activeClassName={activeLink}>
          <EnvelopeIcon className={linkIcon} />
          <span className={linkText}>Contact</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
