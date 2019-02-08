import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Timeline from "./timeline";
import SuitcaseIcon from "../images/suitcase.svg";

const WorkExperience = () => (
  <StaticQuery
    query={graphql`
      query {
        allWorkExperienceJson {
          edges {
            node {
              startDate
              endDate
              title
              subtitle
              description
            }
          }
        }
      }
    `}
    render={data => (
      <Timeline
        icon={<SuitcaseIcon style={{ height: "25px", width: "auto" }} />}
        timelineTitle={"Expériences professionnelles"}
        items={data.allWorkExperienceJson.edges.map(edge => edge.node)}
      />
    )}
  />
);

export default WorkExperience;
