import React from 'react';
import Link from './link/link';
import { css } from 'linaria';

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
    content: '';
  }

  &:focus::before {
    outline: 1px solid var(--color-neutral-white);
    outline-offset: -0.8rem;
  }
`;

const PostLink = ({ post }) => {
  console.log(post);

  return (
    <article
      className={article}
      itemscope
      itemtype="http://schema.org/BlogPosting"
    >
      <header>
        <h2 className={title} itemprop="headline">
          {post.frontmatter.title}
        </h2>
        <time
          datetime={post.frontmatter.date}
          className={date}
          itemprop="datePublished"
        >
          {post.frontmatter.date}
        </time>
      </header>
      <p itemprop="description">{post.frontmatter.description}</p>
      <Link className={link} to={post.frontmatter.path}>
        Voir plus...
      </Link>
    </article>
  );
};

export default PostLink;
