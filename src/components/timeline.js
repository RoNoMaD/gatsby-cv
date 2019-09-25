import PropTypes from "prop-types";
import React from "react";
import { css } from "linaria";
import TimelineItem from "./timeline-item";

const timelineTitleIcon = css`
  display: flex;
  grid-column-start: 2;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-right: 8px;
  background-color: hsla(83, 60%, 45%, 1);
  border-radius: 50%;
`;

const timelineTitle = css`
  align-self: center;
`;

const timelineItemsContainer = css`
  grid-column-start: 2;
  grid-column-end: span 2;
  height: 1.45rem;
  margin-left: 24px;
  border-left: 2px solid black;
`;

const Timeline = ({ icon, title, items }) => (
  <>
    <div className={timelineTitleIcon}>{icon}</div>
    <h3 className={timelineTitle}>{title}</h3>
    <div className={timelineItemsContainer} />
    {items.map((item, index) => (
      <TimelineItem
        key={item.title + index.toString()}
        item={item}
        last={items.length - 1 === index}
      />
    ))}
  </>
);

Timeline.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  items: PropTypes.array
};

Timeline.defaultProps = {
  title: "",
  items: []
};

export default Timeline;
