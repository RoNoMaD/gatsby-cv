import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import "./layout.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
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
          <html lang="en" />
        </Helmet>
        <div>{children}</div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
