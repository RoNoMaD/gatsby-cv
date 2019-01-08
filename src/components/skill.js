import PropTypes from "prop-types";
import React from "react";

import "./skill.css";

const Skill = ({ skill }) => (
  <div
    style={{
      backgroundColor: "rgba(66,66,66,1)",
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto auto minmax(24px,auto)",
      alignItems: "space-between",
      justifyContent: "center",
      paddingTop: "0.5rem"
    }}
  >
    <div
      style={{
        height: "60px",
        width: "60px",
        justifySelf: "center",
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        background: skill.background,
        borderRadius: "50%"
      }}
    >
      {skill.icon}
    </div>
    <h3
      style={{
        margin: "0.5rem",
        textAlign: "center",
        color: skill.titleColor
      }}
    >
      {skill.title}
    </h3>
    <div
      style={{
        margin: "2px",
        backgroundColor: "hsla(0, 100%, 100%, 1)",
        alignSelf: "stretch",
        height: "24px"
      }}
    >
      <div
        style={{
          borderRadius: "0 4px 4px 0",
          backgroundColor: skill.progressBarColor,
          height: "24px",
          width: `${skill.progressBarWidth}%`,
          animation: `slide${skill.progressBarWidth} 1.5s ease-in-out`
        }}
      />
    </div>
  </div>
);

Skill.propTypes = {
  skill: PropTypes.object
};

export default Skill;
