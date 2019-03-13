import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Timeline from "./timeline";
import UniHatIcon from "../images/uni-hat.svg";

const Education = () => {
  const { allEducationJson } = useStaticQuery(graphql`
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
  `);
  return (
    <Timeline
      icon={<UniHatIcon style={{ height: "25px", width: "auto" }} />}
      title={"Formations"}
      items={allEducationJson.edges.map(edge => edge.node)}
    />
  );
};

export default Education;
