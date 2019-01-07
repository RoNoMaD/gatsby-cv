import React from "react";

import ReactIcon from "../images/React-icon.svg";
import AngularIcon from "../images/angular2.svg";
// import ReactIcon from "../images/react.svg";
import JavaScriptIcon from "../images/Unofficial_JavaScript_logo.svg";
import CSS3Icon from "../images/css3.svg";
import GitIcon from "../images/Git_icon.svg";
import JestIcon from "../images/jest.svg";
import ESLintIcon from "../images/eslint.svg";
import StyleLintIcon from "../images/stylelint.svg";
import AgileIcon from "../images/agile.svg";
import ContinuousIntegrationIcon from "../images/continuous-integration.svg";

import Layout from "../components/layout";
import Contact from "../components/contact";
import Home from "../components/home";
import Skills from "../components/skills";
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
          titleColor: "hsla(193, 95%, 68%, 1)",
          background: "hsla(222, 14%, 15%, 1)",
          progressBarColor: "hsla(193, 95%, 68%, 1)",
          progressBarWidth: "90"
        },
        {
          icon: <AngularIcon style={{ height: "40px" }} />,
          title: "Angular",
          titleColor: "hsla(0, 100%, 100%, 1)",
          background:
            "linear-gradient(145deg,hsla(216, 85%, 34%, 1),hsla(207, 90%, 61%, 1))",
          progressBarColor: "hsla(359, 59%, 45%, 1)",
          progressBarWidth: "75"
        },
        {
          icon: <JavaScriptIcon style={{ height: "40px" }} />,
          title: "JavaScript",
          titleColor: "hsla(0, 0%, 0%, 1)",
          background: "hsla(53, 93%, 54%, 1)",
          progressBarColor: "hsla(0, 0%, 0%, 1)",
          progressBarWidth: "90"
        },
        {
          icon: <CSS3Icon style={{ height: "40px" }} />,
          title: "CSS 3",
          titleColor: "hsla(0, 100%, 100%, 1)",
          background: "hsla(198, 73%, 51%, 1)",
          progressBarColor: "hsla(205, 90%, 38%, 1)",
          progressBarWidth: "75"
        },
        {
          icon: <GitIcon style={{ height: "40px" }} />,
          title: "git",
          titleColor: "hsla(0, 0%, 0%, 1)",
          background: "hsla(53, 23%, 92%, 1)",
          progressBarColor: "hsla(10, 86%, 57%, 1)",
          progressBarWidth: "75"
        },
        {
          icon: (
            <div style={{ display: "flex" }}>
              <JestIcon style={{ height: "40px", width: "auto" }} />
              <ESLintIcon style={{ height: "40px" }} />
              <StyleLintIcon style={{ height: "40px" }} />
            </div>
          ),
          title: "Test & Qualité",
          titleColor: "hsla(0, 0%, 0%, 1)",
          background: "hsla(343, 14%, 52%, 1)",
          progressBarColor: "hsla(343, 40%, 43%, 1)",
          progressBarWidth: "75"
        },
        {
          icon: <AgileIcon style={{ height: "40px" }} />,
          title: "Méthodes agiles",
          titleColor: "hsla(0, 100%, 100%, 1)",
          background: "hsla(168, 80%, 33%, 1)",
          progressBarColor: "hsla(0, 0%, 20%, 1)",
          progressBarWidth: "75"
        },
        {
          icon: <ContinuousIntegrationIcon style={{ height: "40px" }} />,
          title: "Intégration continue",
          titleColor: "hsla(0, 100%, 100%, 1)",
          background: "hsla(255, 33%, 40%, 1)",
          progressBarColor: "hsla(14, 79%, 53%, 1)",
          progressBarWidth: "75"
        }
      ]}
    />
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto-fill, 50px, auto-fill",
        padding: "0px 1.0875rem 1.45rem"
      }}
    >
      <WorkExperience />
      <Education />
      <Languages />
    </div>
    <Contact />
  </Layout>
);

export default IndexPage;
