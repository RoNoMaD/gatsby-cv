import PropTypes from "prop-types";
import React from "react";
import Skill from "./skill";

const Skills = ({ skills }) => (
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
);

Skills.propTypes = {
  skills: PropTypes.array
};

Skills.defaultProps = {
  skills: []
};

export default Skills;
