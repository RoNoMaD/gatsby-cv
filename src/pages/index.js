import React from "react";

import ReactIcon from "../images/React-icon.svg";
import JavaScriptIcon from "../images/Unofficial_JavaScript_logo.svg";
import CSS3Icon from "../images/css3.svg";
import GitIcon from "../images/Git_icon.svg";
import JestIcon from "../images/jest.svg";
import AgileIcon from "../images/agile.svg";
import ContinuousIntegrationIcon from "../images/continuous-integration.svg";
import DesignSystemIcon from "../images/eye.svg";

import Layout from "../components/layout";
import Home from "../components/home";
import Skills from "../components/skills";
import TimelineContainer from "../components/timeline-container";
import WorkExperience from "../components/work-experience";
import Education from "../components/education";
import Languages from "../components/languages";

const IndexPage = () => (
  <Layout>
    <Home />
    <Skills
      skills={[
        {
          icon: <ReactIcon style={{ height: "40px" }} />,
          title: "React",
          titleColor: "hsla(0, 100%, 100%, 1)",
          background: "hsla(222, 14%, 15%, 1)",
          progressBarColor: "hsla(193, 95%, 68%, 1)",
          progressBarWidth: "90",
        },
        {
          icon: <JavaScriptIcon style={{ height: "40px" }} />,
          title: "JavaScript",
          titleColor: "hsla(0, 100%, 100%, 1)",
          background: "hsla(53, 93%, 54%, 1)",
          progressBarColor: "hsla(0, 0%, 0%, 1)",
          progressBarWidth: "90",
        },
        {
          icon: <CSS3Icon style={{ height: "40px" }} />,
          title: "CSS 3",
          titleColor: "hsla(0, 100%, 100%, 1)",
          background: "hsla(198, 73%, 51%, 1)",
          progressBarColor: "hsla(205, 90%, 38%, 1)",
          progressBarWidth: "75",
        },
        {
          icon: <GitIcon style={{ height: "40px" }} />,
          title: "git",
          titleColor: "hsla(0, 100%, 100%, 1)",
          background: "hsla(53, 23%, 92%, 1)",
          progressBarColor: "hsla(10, 86%, 57%, 1)",
          progressBarWidth: "75",
        },
        {
          icon: <JestIcon style={{ height: "40px", width: "auto" }} />,
          title: "Test & Qualité",
          background: "hsla(343, 14%, 52%, 1)",
          progressBarColor: "hsla(343, 40%, 43%, 1)",
          progressBarWidth: "75",
        },
        {
          icon: <AgileIcon style={{ height: "40px" }} />,
          title: "Méthodes agiles",
          background: "hsla(168, 80%, 33%, 1)",
          progressBarColor: "hsla(0, 0%, 20%, 1)",
          progressBarWidth: "75",
        },
        {
          icon: <ContinuousIntegrationIcon style={{ height: "40px" }} />,
          title: "Intégration continue",
          background: "hsla(255, 33%, 40%, 1)",
          progressBarColor: "hsla(14, 79%, 53%, 1)",
          progressBarWidth: "75",
        },
        {
          icon: <DesignSystemIcon style={{ height: "40px" }} />,
          title: "Design systems",
          background: "#fccf00",
          progressBarColor: "#cdd824",
          progressBarWidth: "75",
        },
      ]}
    />
    <TimelineContainer>
      <WorkExperience />
      <Education />
      <Languages />
    </TimelineContainer>
  </Layout>
);

export default IndexPage;
