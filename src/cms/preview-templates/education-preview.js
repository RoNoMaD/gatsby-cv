import React from "react";
import { css } from "linaria";
import PropTypes from "prop-types";
import Timeline from "../../components/timeline";
import UniHatIcon from "../../images/uni-hat.svg";

const timelines = css`
  display: grid;
  max-width: var(--bp-med);
  margin: var(--spacing) auto;
  padding: 0px 1.0875rem 1.45rem;

  @media (min-width: 47em) {
    padding: 0px var(--spacing-xxl) 1.45rem;
  }
`;

const EducationPreview = ({ entry, widgetFor, widgetsFor }) => {
  const titles = widgetsFor("titles").map(function (language, index) {
    return {
      endDate: language.getIn(["data", "endDate"]),
      title: language.getIn(["data", "title"]),
      subtitle: language.getIn(["data", "subtitle"]),
    };
  });

  return (
    <div className={timelines}>
      <Timeline
        icon={<UniHatIcon style={{ height: "25px", width: "auto" }} />}
        title="Formations"
        items={titles}
      />
    </div>
  );
};

EducationPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default EducationPreview;
