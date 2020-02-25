import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql, Link } from "gatsby";
import { css } from "linaria";

import NewspaperIcon from "../images/newspaper.svg";
import EnvelopeIcon from "../images/envelope.svg";

const romain = css`
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

const header = css`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: var(--spacing) var(--spacing-large);
  color: var(--color-neutral-white);
  background-color: var(--color-brand-grey-dark);
`;

const newspaperIcon = css`
  height: 30px;
`;

const nav = css`
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

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <Helmet
        title={site.siteMetadata.title}
        meta={[
          {
            name: "description",
            content:
              "Romain Lebascle Développeur Web Full Stack Curiculum Vitae"
          },
          {
            name: "keywords",
            content:
              "romain, lebascle, développeur, web, front-end, front, react, javascript, css, graphql, gatsby"
          }
        ]}
      >
        <html lang="fr" />
      </Helmet>
      <header className={header}>
        <Link to="/" className={romain}>
          Romain Lebascle
        </Link>
        <nav className={nav}>
          <Link to="/blog" className={link} activeClassName={activeLink}>
            <NewspaperIcon className={newspaperIcon} />
            <span>Blog</span>
          </Link>
          <Link to="/contact" className={link} activeClassName={activeLink}>
            <EnvelopeIcon className={newspaperIcon} />
            <span>Contact</span>
          </Link>
        </nav>
      </header>
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
