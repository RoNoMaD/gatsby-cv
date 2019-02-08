import PropTypes from "prop-types";
import React from "react";

const TimelineItem = ({ item, last }) => {
  let Icon;
  if (item.icon) {
    Icon = require(`../images/languages/${item.icon}`);
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
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
      <div
        style={{
          marginRight: "8px",
          display: "flex",
          flexDirection: "column",
          alignSelf: "stretch",
          alignItems: "center",
          width: "50px"
        }}
      >
        <div
          style={{
            borderLeft: "2px solid black",
            height: "8px"
          }}
        />
        {!item.icon && (
          <div
            style={{
              height: "10px",
              width: "10px",
              backgroundColor: "hsla(83, 60%, 45%, 1)",
              borderRadius: "50%",
              display: "inline-block"
            }}
          />
        )}
        {item.icon && <Icon style={{ width: "35px", height: "auto" }} />}
        {!last && (
          <div
            style={{
              borderLeft: "2px solid black",
              height: "calc(100% - 18px)"
            }}
          />
        )}
      </div>
      <div style={{ marginRight: "8px" }}>
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
