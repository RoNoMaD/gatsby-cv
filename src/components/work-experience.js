import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Timeline from "./timeline";
import SuitcaseIcon from "../images/suitcase.svg";

const WorkExperience = () => {
  const { allWorkExperienceJson } = useStaticQuery(graphql`
    query {
      allWorkExperienceJson {
        edges {
          node {
            workExperience {
              startDate
              endDate
              title
              subtitle
              description
            }
          }
        }
      }
    }
  `);
  return (
    <Timeline
      icon={<SuitcaseIcon style={{ height: "25px", width: "auto" }} />}
      title="Expériences professionnelles"
      items={allWorkExperienceJson.edges[0].node.workExperience}
    />
  );
};

export default WorkExperience;
