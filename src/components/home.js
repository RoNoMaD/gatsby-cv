import React from "react";

import QuoteIcon from "../images/iconmonstr-quote-3.svg";

import "./home.css";

const Home = () => (
  <section
    style={{
      height: "100vh",
      // padding: "0 10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "0px 1.0875rem 1.45rem",
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
        Avec 5 ans d'expérience dans le développement de sites et d'applications
        web et mobile et une passion pour l'écosystème Front End.
      </p>
    </div>
  </section>
);

export default Home;
