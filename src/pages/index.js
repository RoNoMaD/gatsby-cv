import React from "react";
import AngularIcon from "../images/angular2.svg";
import QuoteIcon from "../images/iconmonstr-quote-3.svg";
import ReactIcon from "../images/React-icon.svg";
// import ReactIcon from "../images/react.svg";
import JavaScriptIcon from "../images/Unofficial_JavaScript_logo.svg";
import CSS3Icon from "../images/css3.svg";
import GitIcon from "../images/Git_icon.svg";
import JestIcon from "../images/jest.svg";
import ESLintIcon from "../images/eslint.svg";
import StyleLintIcon from "../images/stylelint.svg";
import UnitedKingdomIcon from "../images/united-kingdom.svg";
import SpainIcon from "../images/spain.svg";

import Layout from "../components/layout";
import Timeline from "../components/timeline";

const IndexPage = () => (
  <Layout>
    <h1 style={{ color: "hsla(83, 60%, 45%, 1)" }}>Romain Lebascle</h1>
    <h2>Développeur Web Full Stack</h2>
    <p
      style={{
        padding: "8px",
        backgroundColor: "hsla(0, 0%, 89%, 1)"
      }}
    >
      <QuoteIcon style={{ fill: "hsla(83, 60%, 45%, 1)" }} />5 ans d'expérience
      dans le développement de sites et d'applications web et mobile et une
      passion pour l'écosystème Front End
    </p>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        padding: "10px"
      }}
    >
      <div
        style={{
          width: "23.5%",
          backgroundColor: "#20232a",
          marginBottom: "0.5rem"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "0.5rem"
          }}
        >
          {/* <img
            style={{ marginBottom: "0" }}
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            height="40px"
          /> */}
          <ReactIcon style={{ height: "40px" }} />
          <h3 style={{ color: "#61dafb" }}>React</h3>
        </div>
        <div style={{ padding: "2px" }}>
          <div style={{ backgroundColor: "#fff" }}>
            <div
              style={{
                borderRadius: "4px",
                backgroundColor: "#61dafb",
                height: "24px",
                width: "90%",
                animation: "slide90 1.5s ease-in-out"
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          width: "23.5%",
          backgroundImage: "linear-gradient(145deg,#0d47a1,#42a5f5)",
          marginBottom: "0.5rem"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "0.5rem"
          }}
        >
          <AngularIcon style={{ height: "40px" }} />
          <h3 style={{ color: "#FFF" }}>Angular</h3>
        </div>
        <div style={{ padding: "2px" }}>
          <div style={{ backgroundColor: "#fff" }}>
            <div
              style={{
                borderRadius: "0 4px 4px 0",
                backgroundColor: "#B52E31",
                height: "24px",
                width: "75%",
                animation: "slide75 1.5s ease-in-out"
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          width: "23.5%",
          backgroundColor: "#f7df1e",
          marginBottom: "0.5rem"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "0.5rem"
          }}
        >
          <JavaScriptIcon style={{ height: "40px" }} />
          <h3>JavaScript</h3>
        </div>
        <div style={{ padding: "2px" }}>
          <div style={{ backgroundColor: "#fff" }}>
            <div
              style={{
                borderRadius: "0 4px 4px 0",
                backgroundColor: "#000",
                height: "24px",
                width: "90%",
                animation: "slide90 1.5s ease-in-out"
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          width: "23.5%",
          backgroundColor: "#28A7DE",
          marginBottom: "0.5rem"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "0.5rem"
          }}
        >
          <CSS3Icon style={{ height: "40px" }} />
          <h3 style={{ color: "#FFF" }}>CSS 3</h3>
        </div>
        <div style={{ padding: "1px" }}>
          <div style={{ backgroundColor: "#fff" }}>
            <div
              style={{
                borderRadius: "0 4px 4px 0",
                backgroundColor: "#0A71B9",
                height: "24px",
                width: "75%",
                animation: "slide75 1.5s ease-in-out"
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          width: "23.5%",
          backgroundColor: "#f0efe7",
          marginBottom: "0.5rem"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "0.5rem"
          }}
        >
          <GitIcon style={{ height: "40px" }} />
          <h3>git</h3>
        </div>
        <div style={{ padding: "1px" }}>
          <div style={{ backgroundColor: "#fff" }}>
            <div
              style={{
                borderRadius: "0 4px 4px 0",
                backgroundColor: "#F05133",
                height: "24px",
                width: "75%",
                animation: "slide75 1.5s ease-in-out"
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          width: "23.5%",
          backgroundColor: "#96737d",
          marginBottom: "0.5rem"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "0.5rem"
          }}
        >
          <div style={{ display: "flex" }}>
            <JestIcon style={{ height: "40px" }} />
            <ESLintIcon style={{ height: "40px" }} />
            <StyleLintIcon style={{ height: "40px" }} />
          </div>
          <h3>Test & Qualité</h3>
        </div>
        <div style={{ padding: "1px" }}>
          <div style={{ backgroundColor: "#fff" }}>
            <div
              style={{
                borderRadius: "0 4px 4px 0",
                backgroundColor: "#99425b",
                height: "24px",
                width: "75%",
                animation: "slide75 1.5s ease-in-out"
              }}
            />
          </div>
        </div>
      </div>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto-fill, 50px, auto-fill"
      }}
    >
      <Timeline
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
