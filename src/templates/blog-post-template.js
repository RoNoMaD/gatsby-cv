import React from "react";
import { graphql } from "gatsby";
import { css } from "linaria";

import Layout from "../components/layout";
import Content, { HTMLContent } from "../components/content";

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

const titleClass = css`
  color: var(--color-brand-green);
`;

const dateClass = css`
  font-size: var(--font-size-sm);
  font-style: italic;
`;

const contentClass = css`
  & > * + * {
    padding-top: var(--spacing);
  }
`;

export const BlogPostTemplate = ({
  title,
  rawDate,
  date,
  content,
  contentComponent,
}) => {
  const PostContent = contentComponent || Content;
  return (
    <article
      className={article}
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <h1 className={titleClass} itemProp="headline">
        {title}
      </h1>
      <time datetime={rawDate} className={dateClass} itemProp="datePublished">
        {date}
      </time>
      <meta content="Romain Lebascle" itemProp="author" />
      <meta content="Romain Lebascle" itemProp="publisher" />
      <PostContent
        className={contentClass}
        content={content}
        itemProp="articleBody"
      />
    </article>
  );
};

export default function BlogPost({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const {
    frontmatter: { title, rawDate, date },
    html,
  } = markdownRemark;
  return (
    <Layout>
      <BlogPostTemplate
        title={title}
        rawDate={rawDate}
        date={date}
        content={html}
        contentComponent={HTMLContent}
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        rawDate: date
        path
        title
      }
    }
  }
`;
