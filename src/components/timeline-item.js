import PropTypes from "prop-types";
import React from "react";
import { css } from "linaria";

const timelineItemDates = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: var(--spacing);
`;

const timelineItemIconContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  width: 50px;
  margin-top: var(--spacing);
  margin-right: 8px;
`;

const timelineItemTopLine = css`
  height: calc(var(--spacing) + var(--spacing-small));
  margin-top: calc(-1 * var(--spacing));
  border-left: 2px solid black;
`;

const timelineItemDefaultIcon = css`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: var(--color-brand-green);
  border-radius: 50%;
`;

const timelineItemIcon = css`
  width: 35px;
  height: auto;
`;

const timelineItemBottomLine = css`
  height: calc(100% - 18px);
  border-left: var(--border-thickness) solid var(--color-neutral-black);
`;

const timelineItemTitle = css`
  color: var(--color-brand-green);
`;

const timelineItemText = css`
  margin-top: var(--spacing);
  margin-right: var(--spacing-small);

  & > *:last-child {
    margin-top: var(--spacing-small);
  }
`;

const TimelineItem = ({ item, last }) => {
  let Icon;
  if (item.icon) {
    Icon = require(`../images/languages/${item.icon}`);
  }
  return (
    <>
      <div className={timelineItemDates}>
        {item.startDate && !item.endDate && <div>{"aujourd'hui"}</div>}
        {item.endDate && (
          <div>
            <time dateTime="2017-06">{item.endDate}</time>
          </div>
        )}
        <div>
          <time dateTime="2017-06">{item.startDate}</time>
        </div>
      </div>
      <div className={timelineItemIconContainer}>
        <div className={timelineItemTopLine} />
        {!item.icon && <div className={timelineItemDefaultIcon} />}
        {item.icon && <Icon className={timelineItemIcon} />}
        {!last && <div className={timelineItemBottomLine} />}
      </div>
      <div className={timelineItemText}>
        <h4 className={timelineItemTitle}>{item.title}</h4>
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
