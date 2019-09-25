import React from "react";
import { css } from "linaria";

import QuoteIcon from "../images/iconmonstr-quote-3.svg";

const homeSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0px 1.0875rem 1.45rem;
  background: linear-gradient(
    135deg,
    rgba(33, 33, 33, 1) 0%,
    rgba(48, 48, 48, 1) 35%,
    rgba(66, 66, 66, 1) 100%
  );
`;

const homeAnimatedName = css`
  height: 45px;
  margin: 0 auto 1.45rem auto; /* Gives that scrolling effect as the typing happens */
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  color: hsla(83, 60%, 45%, 1);
  white-space: nowrap; /* Keeps the content on a single line */
  border-right: 0.15em solid hsla(83, 60%, 45%, 1); /* The typwriter cursor */
  animation: typing 2.5s steps(30, end), blink-caret 0.5s step-end infinite;

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: hsla(83, 60%, 45%, 1);
    }
  }
`;

const homeSubtitle = css`
  text-align: center;
`;

const quoteContainer = css`
  display: flex;
`;

const quoteIcon = css`
  width: 50px;
  fill: hsla(83, 60%, 45%, 1);
`;

const quoteText = css`
  padding: 8px;
`;

const Home = () => (
  <section className={homeSection}>
    <h2>Bonjour je suis </h2>
    <div>
      <h1 className={homeAnimatedName}>{"<Romain Lebascle />"}</h1>
    </div>
    <h2 className={homeSubtitle}>Développeur Web Full Stack basé à Nantes.</h2>
    <div className={quoteContainer}>
      <QuoteIcon className={quoteIcon} />
      <p className={quoteText}>
        {
          "Avec 5 ans d'expérience dans le développement de sites et d'applications web et mobile et une passion pour l'écosystème Front End."
        }
      </p>
    </div>
  </section>
);

export default Home;
