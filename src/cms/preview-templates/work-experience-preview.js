import React from "react";
import { css } from "linaria";
import PropTypes from "prop-types";
import Timeline from "../../components/timeline";
import SuitcaseIcon from "../../images/suitcase.svg";

const timelines = css`
  display: grid;
  max-width: var(--bp-med);
  margin: var(--spacing) auto;
  padding: 0px 1.0875rem 1.45rem;

  @media (min-width: 47em) {
    padding: 0px var(--spacing-xxl) 1.45rem;
  }
`;

const WorkExperiencePreview = ({ entry, widgetFor, widgetsFor }) => {
  const workExperience = widgetsFor("workExperience").map(function (
    language,
    index
  ) {
    return {
      startDate: language.getIn(["data", "startDate"]),
      endDate: language.getIn(["data", "endDate"]),
      title: language.getIn(["data", "title"]),
      subtitle: language.getIn(["data", "subtitle"]),
      description: language.getIn(["data", "description"]),
    };
  });

  return (
    <div className={timelines}>
      <Timeline
        icon={<SuitcaseIcon style={{ height: "25px", width: "auto" }} />}
        title="Expériences professionnelles"
        items={workExperience}
      />
    </div>
  );
};

WorkExperiencePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default WorkExperiencePreview;
