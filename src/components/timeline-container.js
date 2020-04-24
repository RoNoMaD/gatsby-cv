import React from "react";
import { css } from "linaria";

const timelines = css`
  display: grid;
  max-width: var(--bp-med);
  margin: var(--spacing) auto;
  padding: 0px 1.0875rem 1.45rem;

  @media (min-width: 47em) {
    padding: 0px var(--spacing-xxl) 1.45rem;
  }
`;

const TimelineContainer = ({ children }) => {
  return <div className={timelines}>{children}</div>;
};

export default TimelineContainer;
