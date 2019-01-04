import PropTypes from "prop-types";
import React from "react";

const Skill = ({ skill }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "23.5%",
      minWidth: "150px",
      background: skill.background,
      marginBottom: "0.5rem"
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0.5rem"
      }}
    >
      {skill.icon}
      <h3 style={{ textAlign: "center", color: skill.titleColor }}>
        {skill.title}
      </h3>
    </div>
    <div style={{ padding: "2px" }}>
      <div style={{ backgroundColor: "hsla(0, 100%, 100%, 1)" }}>
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
  </div>
);

Skill.propTypes = {
  skill: PropTypes.object
};

export default Skill;
