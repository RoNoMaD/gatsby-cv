import PropTypes from "prop-types";
import React from "react";
import { css } from "linaria";
import { styled } from "linaria/react";
import ReactVisibilitySensor from "react-visibility-sensor";

const slideIn = css`
  animation: slide 1.5s ease-in-out;

  @keyframes slide {
    from {
      width: 0%;
    }

    to {
      width: 100%;
    }
  }
`;

const scaleInCenter = css`
  visibility: visible;
  animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes scale-in-center {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const scaleOutCenter = css`
  animation: scale-out-center 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    forwards;

  @keyframes scale-out-center {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 1;
    }
  }
`;

const Card = styled.div`
  background-color: rgba(66, 66, 66, 1);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto minmax(24px, auto);
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem;
`;

const CardIcon = styled.div`
  height: 60px;
  width: 60px;
  justify-self: center;
  display: grid;
  align-items: center;
  justify-content: center;
  background: ${props => props.background};
  border-radius: 50%;
`;

const CardTitle = styled.h3`
  margin: 0.5rem;
  text-align: center;
  color: ${props => props.titleColor};
`;

const ProgressBarContainer = styled.div`
  margin: 2px;
  background-color: hsla(0, 100%, 100%, 1);
  align-self: end;
  height: 24px;
`;

const ProgressBar = styled.div`
  border-radius: 0 4px 4px 0;
  background-color: ${props => props.progressBarColor};
  height: 24px;
  width: ${props => props.progressBarWidth}%;
  max-width: ${props => props.progressBarWidth}%;
`;

const Skill = ({ skill }) => (
  <ReactVisibilitySensor scrollCheck={true}>
    {({ isVisible }) => (
      <div>
        <Card className={isVisible ? scaleInCenter : scaleOutCenter}>
          <CardIcon background={skill.background}>{skill.icon}</CardIcon>
          <CardTitle color={skill.titleColor}>{skill.title}</CardTitle>
          <ProgressBarContainer>
            <ProgressBar
              className={isVisible && slideIn}
              progressBarColor={skill.progressBarColor}
              progressBarWidth={skill.progressBarWidth}
            />
          </ProgressBarContainer>
        </Card>
      </div>
    )}
  </ReactVisibilitySensor>
);

Skill.propTypes = {
  skill: PropTypes.object
};

export default Skill;
