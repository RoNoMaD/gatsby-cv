import React from 'react';
import LinkButton from './link-button/link-button';
import { css } from 'linaria';

import QuoteIcon from '../images/iconmonstr-quote-3.svg';

const homeSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: calc(var(--header-height) * -1);
  padding: var(--spacing);
  background: linear-gradient(
    135deg,
    rgba(33, 33, 33, 1) 0%,
    rgba(48, 48, 48, 1) 35%,
    rgba(66, 66, 66, 1) 100%
  );

  & > * + * {
    margin-top: var(--spacing);
  }
`;

const homeAnimatedName = css`
  max-width: 356px;
  height: 45px;
  margin: inherit auto inherit auto; /* Gives that scrolling effect as the typing happens */
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  color: var(--color-brand-green);
  font-size: var(--font-size-xl-number);
  line-height: 1.1;
  white-space: nowrap; /* Keeps the content on a single line */
  border-right: 0.15em solid var(--color-brand-green); /* The typwriter cursor */
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
      border-color: var(--color-brand-green);
    }
  }
`;

const homeSubtitle = css`
  text-align: center;
`;

const quoteContainer = css`
  display: flex;
  max-width: 550px;
`;

const quoteIcon = css`
  width: 50px;
  fill: var(--color-brand-green);
`;

const quoteText = css`
  padding: var(--spacing-small);
  text-align: center;
`;

const Home = () => (
  <section className={homeSection}>
    <h2>Bonjour je suis </h2>
    <h1 className={homeAnimatedName}>{'<Romain Lebascle />'}</h1>
    <h2 className={homeSubtitle}>Développeur Web Front End basé à Nantes</h2>
    <div className={quoteContainer}>
      <QuoteIcon className={quoteIcon} />
      <p className={quoteText}>
        {
          "Avec 6 ans d'expérience dans le développement de sites et d'applications web, et une passion pour l'écosystème Front End."
        }
      </p>
    </div>
    <LinkButton to="/#competences">En savoir plus</LinkButton>
  </section>
);

export default Home;
