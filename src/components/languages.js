import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Timeline from "./timeline";
import SpeechBubbleIcon from "../images/speech-bubble.svg";

const Languages = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        allLanguagesJson {
          edges {
            node {
              title
              subtitle
              description
              icon
            }
          }
        }
      }
    `}
    render={data => (
      <Timeline
        icon={<SpeechBubbleIcon style={{ height: "25px", width: "auto" }} />}
        timelineTitle={"Langues"}
        items={data.allLanguagesJson.edges.map(edge => edge.node)}
      />
    )}
  />
);

export default Languages;
