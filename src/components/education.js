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
            titles {
              endDate
              subtitle
              title
            }
          }
        }
      }
    }
  `);
  return (
    <Timeline
      icon={<UniHatIcon style={{ height: "25px", width: "auto" }} />}
      title={"Formations"}
      items={allEducationJson.edges[0].node.titles}
    />
  );
};

export default Education;
