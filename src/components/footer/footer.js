import React from "react";
import { css } from "linaria";

import TwitterIcon from "../../images/twitter-brands.svg";
import StackOverflowIcon from "../../images/stack-overflow-brands.svg";
import GithubIcon from "../../images/github-brands.svg";
import MaltIcon from "../../images/malt-brand.svg";
import LinkedInIcon from "../../images/linkedin-in-brands.svg";

const footer = css`
  position: sticky;
  bottom: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding: var(--spacing-large);
  background-color: var(--color-brand-grey-dark);
`;

const socialMedias = css`
  display: flex;
  align-items: center;
  justify-content: space-around;

  & > * + * {
    margin-left: var(--spacing);
  }
`;

const socialMediaIcon = css`
  width: 30px;
  height: auto;
`;

const socialMediaLink = css`
  color: var(--color-neutral-white);
  &:hover {
    color: var(--color-brand-green);
  }
`;

const Footer = () => {
  return (
    <footer className={footer}>
      <ul className={socialMedias}>
        <li>
          <a
            href="https://twitter.com/RoNoMaD"
            className={socialMediaLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className={socialMediaIcon} />
            <span className="visually-hidden">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com/users/4554182/romain-lebascle"
            className={socialMediaLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <StackOverflowIcon className={socialMediaIcon} />
            <span className="visually-hidden">Stack Overflow</span>
          </a>
        </li>
        <li className={socialMediaIcon}>
          <a
            href="https://github.com/RoNoMaD"
            className={socialMediaLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
            <span className="visually-hidden">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.malt.fr/profile/romainlebascle"
            className={socialMediaLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MaltIcon className={socialMediaIcon} />
            <span className="visually-hidden">Malt</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/romain-lebascle-a245652b/"
            className={socialMediaLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className={socialMediaIcon} />
            <span className="visually-hidden">LinkedIn</span>
          </a>
        </li>
      </ul>
      <div>© Romain Lebascle 2020</div>
    </footer>
  );
};

export default Footer;
