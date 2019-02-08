import PropTypes from "prop-types";
import React from "react";
import TimelineItem from "./timeline-item";

const Timeline = ({ icon, timelineTitle, items }) => (
  <>
    <div
      style={{
        gridColumnStart: "2",
        height: "50px",
        width: "50px",
        backgroundColor: "hsla(83, 60%, 45%, 1)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "8px"
      }}
    >
      {icon}
    </div>
    <h3 style={{ alignSelf: "center" }}>{timelineTitle}</h3>
    <div
      style={{
        gridColumnStart: "2",
        gridColumnEnd: "span 2",
        marginLeft: "24px",
        borderLeft: "2px solid black",
        height: "1.45rem"
      }}
    />
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
  timelineTitle: PropTypes.string,
  items: PropTypes.array
};

Timeline.defaultProps = {
  timelineTitle: "",
  items: []
};

export default Timeline;
