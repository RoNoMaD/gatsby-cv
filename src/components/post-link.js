import React from "react";
import { Link } from "gatsby";

const PostLink = ({ post }) => {
  console.log(post);

  return (
    <div>
      <Link to={post.frontmatter.path}>
        {post.frontmatter.title} ({post.frontmatter.date})
      </Link>
    </div>
  );
};

export default PostLink;
