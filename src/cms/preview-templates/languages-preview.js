import React from "react";
import PropTypes from "prop-types";
import TimelineContainer from "../../components/timeline-container";
import Timeline from "../../components/timeline";
import SpeechBubbleIcon from "../../images/speech-bubble.svg";

const LanguagesPreview = ({ entry, widgetFor, widgetsFor }) => {
  const languages = widgetsFor("languages").map(function (language, index) {
    return {
      title: language.getIn(["data", "title"]),
      subtitle: language.getIn(["data", "subtitle"]),
      description: language.getIn(["data", "description"]),
      icon: language.getIn(["data", "icon"]),
    };
  });

  return (
    <TimelineContainer>
      <Timeline
        icon={<SpeechBubbleIcon style={{ height: "25px", width: "auto" }} />}
        title="Langues"
        items={languages}
      />
    </TimelineContainer>
  );
};

LanguagesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default LanguagesPreview;
