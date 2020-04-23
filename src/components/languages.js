import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Timeline from "./timeline";
import SpeechBubbleIcon from "../images/speech-bubble.svg";

const Languages = () => {
  const { allLanguagesJson } = useStaticQuery(graphql`
    query {
      allLanguagesJson {
        edges {
          node {
            languages {
              title
              subtitle
              description
              icon
            }
          }
        }
      }
    }
  `);
  return (
    <Timeline
      icon={<SpeechBubbleIcon style={{ height: "25px", width: "auto" }} />}
      title={"Langues"}
      items={allLanguagesJson.edges[0].node.languages}
    />
  );
};

export default Languages;
