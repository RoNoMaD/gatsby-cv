import React from "react";
import Link from "./link/link";
import { css } from "linaria";

const article = css`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: var(--spacing);
  background: var(--color-brand-grey-light);
`;

const title = css`
  color: var(--color-brand-green);
`;

const date = css`
  font-size: var(--font-size-sm);
  font-style: italic;
`;

const link = css`
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: "";
  }

  &:focus::before {
    outline: 1px solid var(--color-neutral-white);
    outline-offset: -0.8rem;
  }
`;

const PostLink = ({ post, location }) => {
  return (
    <article
      className={article}
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <header>
        <h2 className={title} itemProp="headline">
          {post.frontmatter.title}
        </h2>
        <time
          datetime={post.frontmatter.rawDate}
          className={date}
          itemProp="datePublished"
        >
          {post.frontmatter.date}
        </time>
        <meta content="Romain Lebascle" itemProp="author" />
        <meta content="Romain Lebascle" itemProp="publisher" />
        <link
          itemProp="mainEntityOfPage"
          href={location.origin + post.frontmatter.path}
        />
      </header>
      <p itemProp="description">{post.frontmatter.description}</p>
      <Link
        className={link}
        to={post.frontmatter.path}
        aria-label={post.frontmatter.title}
      >
        Voir plus...
      </Link>
    </article>
  );
};

export default PostLink;
