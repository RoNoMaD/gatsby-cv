import React from "react";
import { graphql } from "gatsby";
import { css } from "linaria";

import Layout from "../components/layout";
import PostLink from "../components/post-link";

const main = css`
  max-width: var(--bp-small);
  margin-right: auto;
  margin-left: auto;
  padding: var(--spacing-large);
`;

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
  location,
}) => {
  return (
    <Layout>
      <main className={main}>
        {edges
          .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
          .map(edge => (
            <PostLink key={edge.node.id} post={edge.node} location={location} />
          ))}
      </main>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            rawDate: date
            path
            title
            description
          }
        }
      }
    }
  }
`;
