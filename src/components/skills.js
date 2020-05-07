import PropTypes from "prop-types";
import React from "react";
import { css } from "linaria";
import Skill from "./skill";
import SkillsIcon from "../images/skills.svg";

const skillsSection = css`
  position: relative;
  max-width: var(--bp-med);
  margin: 0 auto 0 auto;
  padding: var(--spacing-medium);
`;

const skillsTitleContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-margin-top: calc(var(--header-height) + var(--spacing-medium));
`;

const skillsTitleIconContainer = css`
  display: flex;
  grid-column-start: 2;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-right: 8px;
  background-color: var(--color-brand-primary);
  border-radius: 50%;
`;

const skillsIcon = css`
  width: auto;
  height: 25px;
`;

const skillsTitle = css`
  align-self: center;
`;

const skillsCardsContainer = css`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  margin-top: var(--spacing);
  padding: var(--spacing-small);
`;

const Skills = ({ skills }) => (
  <section id="competences" className={skillsSection}>
    <div className={skillsTitleContainer}>
      <div className={skillsTitleIconContainer}>
        <SkillsIcon className={skillsIcon} />
      </div>
      <h2 className={skillsTitle}>Compétences</h2>
    </div>
    <div className={skillsCardsContainer}>
      {skills.map((skill, index) => (
        <Skill key={skill.title + index.toString()} skill={skill} />
      ))}
    </div>
  </section>
);

Skills.propTypes = {
  skills: PropTypes.array,
};

Skills.defaultProps = {
  skills: [],
};

export default Skills;
