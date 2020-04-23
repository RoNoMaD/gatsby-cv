import React from "react";
import PropTypes from "prop-types";
import { BlogPostTemplate } from "../../templates/blog-post-template";

const BlogPostPreview = ({ entry, widgetFor }) => {
  return (
    <BlogPostTemplate
      title={entry.getIn(["data", "title"])}
      date={entry.getIn(["data", "date"])}
      content={widgetFor("body")}
    />
  );
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default BlogPostPreview;
