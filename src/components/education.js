import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Timeline from "./timeline";
import UniHatIcon from "../images/uni-hat.svg";

const Education = () => (
  <StaticQuery
    query={graphql`
      query {
        allEducationJson {
          edges {
            node {
              endDate
              title
              subtitle
            }
          }
        }
      }
    `}
    render={data => (
      <Timeline
        icon={<UniHatIcon style={{ height: "25px", width: "auto" }} />}
        timelineTitle={"Formations"}
        items={data.allEducationJson.edges.map(edge => edge.node)}
      />
    )}
  />
);

export default Education;
