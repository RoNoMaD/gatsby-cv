import React from "react";
import PropTypes from "prop-types";
import TimelineContainer from "../../components/timeline-container";
import Timeline from "../../components/timeline";
import SuitcaseIcon from "../../images/suitcase.svg";

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
    <TimelineContainer>
      <Timeline
        icon={<SuitcaseIcon style={{ height: "25px", width: "auto" }} />}
        title="Expériences professionnelles"
        items={workExperience}
      />
    </TimelineContainer>
  );
};

WorkExperiencePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default WorkExperiencePreview;
