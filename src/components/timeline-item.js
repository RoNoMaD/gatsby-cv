import PropTypes from "prop-types";
import React from "react";
import { css } from "linaria";

const timelineItemDates = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const timelineItemIconContainer = css`
  margin-right: 8px;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: center;
  width: 50px;
`;

const timelineItemTopLine = css`
  border-left: 2px solid black;
  height: 8px;
`;

const timelineItemDefaultIcon = css`
  display: inline-block;
  height: 10px;
  width: 10px;
  background-color: hsla(83, 60%, 45%, 1);
  border-radius: 50%;
`;

const timelineItemIcon = css`
  width: 35px;
  height: auto;
`;

const timelineItemBottomLine = css`
  border-left: 2px solid black;
  height: calc(100% - 18px);
`;

const timelineItemText = css`
  margin-right: 8px;
`;

const TimelineItem = ({ item, last }) => {
  let Icon;
  if (item.icon) {
    Icon = require(`../images/languages/${item.icon}`);
  }
  return (
    <>
      <div className={timelineItemDates}>
        <div>
          <time dateTime="2017-06">{item.startDate}</time>
        </div>
        {item.endDate && (
          <div>
            <time dateTime="2017-06">{item.endDate}</time>
          </div>
        )}
        {item.startDate && !item.endDate && <div>{"aujourd'hui"}</div>}
      </div>
      <div className={timelineItemIconContainer}>
        <div className={timelineItemTopLine} />
        {!item.icon && <div className={timelineItemDefaultIcon} />}
        {item.icon && <Icon className={timelineItemIcon} />}
        {!last && <div className={timelineItemBottomLine} />}
      </div>
      <div className={timelineItemText}>
        <h4>{item.title}</h4>
        <h5>{item.subtitle}</h5>
        <p>{item.description}</p>
      </div>
    </>
  );
};

TimelineItem.propTypes = {
  item: PropTypes.object,
  last: PropTypes.bool
};

export default TimelineItem;
