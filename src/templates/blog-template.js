import React from "react";
import { graphql } from "gatsby";
import { css } from "linaria";

import Layout from "../components/layout";

const article = css`
  max-width: var(--bp-med);
  margin-right: auto;
  margin-left: auto;
  padding: var(--spacing-large);

  & a {
    color: var(--color-neutral-white);
    text-decoration: underline;

    &:hover {
      color: var(--color-brand-green);
    }

    &:active {
      color: var(--color-brand-green);
    }
  }
`;

const title = css`
  color: var(--color-brand-green);
`;

const date = css`
  font-size: var(--font-size-sm);
  font-style: italic;
`;

const content = css`
  & > * + * {
    padding-top: var(--spacing);
  }
`;

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <article className={article}>
        <h1 className={title}>{frontmatter.title}</h1>
        <div className={date}>{frontmatter.date}</div>
        <div className={content} dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
