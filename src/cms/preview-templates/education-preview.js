import React from "react";
import PropTypes from "prop-types";
import TimelineContainer from "../../components/timeline-container";
import Timeline from "../../components/timeline";
import UniHatIcon from "../../images/uni-hat.svg";

const EducationPreview = ({ entry, widgetFor, widgetsFor }) => {
  const titles = widgetsFor("titles").map(function (language, index) {
    return {
      endDate: language.getIn(["data", "endDate"]),
      title: language.getIn(["data", "title"]),
      subtitle: language.getIn(["data", "subtitle"]),
    };
  });

  return (
    <TimelineContainer>
      <Timeline
        icon={<UniHatIcon style={{ height: "25px", width: "auto" }} />}
        title="Formations"
        items={titles}
      />
    </TimelineContainer>
  );
};

EducationPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default EducationPreview;
