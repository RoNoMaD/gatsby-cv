import React from "react";
import PropTypes from "prop-types";
import { css } from "linaria";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import Footer from "./footer/footer";

const main = css`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  background-color: var(--color-brand-grey);
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
              "Romain Lebascle Développeur Web Full Stack Curiculum Vitae",
          },
          {
            name: "keywords",
            content:
              "romain, lebascle, développeur, web, front-end, front, react, javascript, css, graphql, gatsby",
          },
        ]}
      >
        <html lang="fr" />
      </Helmet>
      <Header />
      <main className={main}>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
