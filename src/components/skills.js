import PropTypes from "prop-types";
import React from "react";
import Skill from "./skill";
import SuitcaseIcon from "../images/suitcase.svg";

const Skills = ({ skills }) => (
  <section style={{ marginTop: "16px", marginBottom: "16px" }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
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
        <SuitcaseIcon style={{ height: "25px", width: "auto" }} />
      </div>
      <h3 style={{ alignSelf: "center" }}>Compétences</h3>
    </div>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        padding: "10px"
      }}
    >
      {skills.map((skill, index) => (
        <Skill key={skill.title + index.toString()} skill={skill} />
      ))}
    </div>
  </section>
);

Skills.propTypes = {
  skills: PropTypes.array
};

Skills.defaultProps = {
  skills: []
};

export default Skills;
