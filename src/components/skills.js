import PropTypes from "prop-types";
import React from "react";
import { css } from "linaria";
import Skill from "./skill";
import SkillsIcon from "../images/skills.svg";

const skillsSection = css`
  max-width: 960px;
  margin: 16px auto;
  padding: 0px 1.0875rem 1.45rem;
`;

const skillsTitleContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.45rem;
`;

const skillsTitleIconContainer = css`
  grid-column-start: 2;
  height: 50px;
  width: 50px;
  background-color: hsla(83, 60%, 45%, 1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

const skillsIcon = css`
  height: 25px;
  width: auto;
`;

const skillsTitle = css`
  align-self: center;
`;

const skillsCardsContainer = css`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  /*grid-template-rows: repeat(auto-fit, minmax(150px,1fr));*/
  padding: 10px;
`;

const Skills = ({ skills }) => (
  <section className={skillsSection}>
    <div className={skillsTitleContainer}>
      <div className={skillsTitleIconContainer}>
        <SkillsIcon className={skillsIcon} />
      </div>
      <h3 className={skillsTitle}>Compétences</h3>
    </div>
    <div className={skillsCardsContainer}>
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
