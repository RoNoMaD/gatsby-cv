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
  display: grid;
  grid-template-rows: auto auto minmax(24px, auto);
  grid-template-columns: 1fr;
  justify-content: center;
  box-sizing: border-box;
  height: 100%;
  padding-top: 0.5rem;
  background-color: var(--color-brand-grey-light);
`;

const CardIcon = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  justify-self: center;
  width: 60px;
  height: 60px;
  background: ${(props) => props.background};
  border-radius: 50%;
`;

const CardTitle = styled.h3`
  margin: 0.5rem;
  text-align: center;
`;

const ProgressBarContainer = styled.div`
  align-self: end;
  height: 24px;
  margin: 2px;
  background-color: var(--color-neutral-white);
`;

const ProgressBar = styled.div`
  width: ${(props) => props.progressBarWidth}%;
  max-width: ${(props) => props.progressBarWidth}%;
  height: 24px;
  background-color: ${(props) => props.progressBarColor};
  border-radius: 0 4px 4px 0;
`;

const Skill = ({ skill }) => (
  <ReactVisibilitySensor scrollCheck={true}>
    {({ isVisible }) => (
      <div>
        <Card className={isVisible ? scaleInCenter : scaleOutCenter}>
          <CardIcon background={skill.background}>{skill.icon}</CardIcon>
          <CardTitle>{skill.title}</CardTitle>
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
  skill: PropTypes.object,
};

export default Skill;
