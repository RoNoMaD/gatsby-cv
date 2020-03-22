import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";

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
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
