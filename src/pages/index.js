import React from "react";

import QuoteIcon from "../images/iconmonstr-quote-3.svg";

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

import SuitcaseIcon from "../images/suitcase.svg";
import UniHatIcon from "../images/uni-hat.svg";
import SpeechBubbleIcon from "../images/speech-bubble.svg";

import UnitedKingdomIcon from "../images/united-kingdom.svg";
import SpainIcon from "../images/spain.svg";

import Layout from "../components/layout";
import Timeline from "../components/timeline";
import Skills from "../components/skills";

const IndexPage = () => (
  <Layout>
    <section
      style={{
        height: "100vh",
        padding: "0 10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "rgb(33,33,33)",
        background:
          "moz-linear-gradient(-45deg, rgba(33,33,33,1) 0%, rgba(48,48,48,1) 35%, rgba(66,66,66,1) 100%)",
        background:
          "linear-gradient(135deg, rgba(33,33,33,1) 0%, rgba(48,48,48,1) 35%, rgba(66,66,66,1) 100%)"
      }}
    >
      <h2>Bonjour je suis </h2>
      <div>
        <h1
          style={{
            color: "hsla(83, 60%, 45%, 1)",
            overflow:
              "hidden" /* Ensures the content is not revealed until the animation */,
            borderRight:
              ".15em solid hsla(83, 60%, 45%, 1)" /* The typwriter cursor */,
            whiteSpace: "nowrap" /* Keeps the content on a single line */,
            margin:
              "0 auto 1.45rem auto" /* Gives that scrolling effect as the typing happens */,
            // letterSpacing: ".15em" /* Adjust as needed */,
            animation:
              "typing 2.5s steps(30, end),    blink-caret .5s step-end infinite"
          }}
        >
          {"<Romain Lebascle />"}
        </h1>
      </div>
      <h2 style={{ textAlign: "center" }}>
        Développeur Web Full Stack basé à Nantes.
      </h2>
      <div style={{ display: "flex" }}>
        <QuoteIcon style={{ width: "50px", fill: "hsla(83, 60%, 45%, 1)" }} />
        <p
          style={{
            padding: "8px"
          }}
        >
          Avec 5 ans d'expérience dans le développement de sites et
          d'applications web et mobile et une passion pour l'écosystème Front
          End.
        </p>
      </div>
    </section>
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
        gridTemplateColumns: "auto-fill, 50px, auto-fill"
      }}
    >
      <Timeline
        icon={<SuitcaseIcon style={{ height: "25px", width: "auto" }} />}
        timelineTitle={"Expériences professionnelles"}
        items={[
          {
            startDate: "2017-06",
            title: "Développeur Front End",
            subtitle: "ADDOCK",
            description:
              "Développeur Front End (P)react / AngularJS sur des supports Web, borne tactile, Widget d’un outil de numérisation des acteurs de loisirs."
          },
          {
            startDate: "2016-09",
            endDate: "2015-03",
            title: "Développeur Front End / Mobile",
            subtitle: "Renault / Accenture Technology Solutions",
            description:
              "Développeur senior sur une application mobile hybride Javascript destinée au grand public pour la gestion de véhicule connecté."
          },
          {
            startDate: "2016-07",
            endDate: "2016-07",
            title: "Développeur AngularJS",
            subtitle: "GRTGaz / Accenture Technology Solutions",
            description:
              "Apport d'une expertise JavaScript et support à une équipe de développement d'une application web."
          },
          {
            startDate: "2015-02",
            endDate: "2015-02",
            title: "Développeur JavaScript",
            subtitle: "GRTGaz / Accenture Technology Solutions",
            description:
              "Expertise JavaScript et résolution de problèmes dans l'urgence au vu d'une mise en production imminente."
          },
          {
            startDate: "2014-08",
            endDate: "2015-02",
            title: "Développeur J2EE",
            subtitle: "ErDF / Accenture Technology Solutions",
            description:
              "Développeur sur une application web J2EE Spring de gestion des incidents."
          },
          {
            startDate: "2008-01",
            endDate: "2009-12",
            title: "Développeur J2EE",
            subtitle: "Sylis / Groupe Open",
            description:
              "Développeur J2EE et responsable intégration continue pour le compte de clients du secteur automobile et bancaire."
          }
        ]}
      />
      <Timeline
        icon={<UniHatIcon style={{ height: "25px", width: "auto" }} />}
        timelineTitle={"Formations"}
        items={[
          {
            endDate: "2007",
            title: "Ingénieur informatique",
            subtitle: "3iL Institut d'Ingénierie Informatique de Limoges"
          },
          {
            endDate: "2004",
            title: "DUT Informatique",
            subtitle: "IUT de Nantes"
          }
        ]}
      />
      <Timeline
        icon={<SpeechBubbleIcon style={{ height: "25px", width: "auto" }} />}
        timelineTitle={"Langues"}
        items={[
          {
            title: "Anglais",
            subtitle: "Courant",
            description: "Plus de 3 années en pays anglophones.",
            icon: <UnitedKingdomIcon style={{ width: "45px" }} />
          },
          {
            title: "Espagnol",
            subtitle: "Courant",
            icon: <SpainIcon style={{ width: "35px" }} />
          }
        ]}
      />
    </div>
  </Layout>
);

export default IndexPage;
