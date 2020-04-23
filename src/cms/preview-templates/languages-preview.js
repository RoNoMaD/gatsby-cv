import React from "react";
import { css } from "linaria";
import PropTypes from "prop-types";
import Timeline from "../../components/timeline";
import SpeechBubbleIcon from "../../images/speech-bubble.svg";

const timelines = css`
  display: grid;
  max-width: var(--bp-med);
  margin: var(--spacing) auto;
  padding: 0px 1.0875rem 1.45rem;

  @media (min-width: 47em) {
    padding: 0px var(--spacing-xxl) 1.45rem;
  }
`;

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
    <div className={timelines}>
      <Timeline
        icon={<SpeechBubbleIcon style={{ height: "25px", width: "auto" }} />}
        title="Langues"
        items={languages}
      />
    </div>
  );
};

LanguagesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default LanguagesPreview;
