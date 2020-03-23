import React from "react";
import { navigate } from "gatsby";
import Recaptcha from "react-recaptcha";
import EnvelopeIcon from "../../images/envelope-regular.svg";
import { css } from "linaria";

import TextField from "../text-field/text-field";
import Textarea from "../textarea/textarea";
import Button from "../button/button";

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const contactSection = css`
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 0px var(--spacing) var(--spacing-medium);
`;

const contactTitleContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.45rem;
`;

const contactIcon = css`
  display: flex;
  grid-column-start: 2;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-right: 8px;
  background-color: var(--color-brand-green);
  border-radius: 50%;
`;

const contactTitle = css`
  align-self: center;
`;

const contactSubtitle = css`
  padding: 8px;
  text-align: center;
`;

const contactForm = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * + * {
    margin-top: var(--spacing);
  }

  & > label {
    align-self: flex-start;
  }

  & > input,
  textarea {
    margin-top: var(--spacing-small);
  }
`;

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRecaptcha = (value) => {
    this.setState({ "g-recaptcha-response": value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <section className={contactSection}>
        <div className={contactTitleContainer}>
          <div className={contactIcon}>
            <EnvelopeIcon style={{ height: "25px", width: "auto" }} />
          </div>
          <h3 className={contactTitle}>Contact</h3>
        </div>

        <p className={contactSubtitle}>
          {"Si mon profil vous interesse, n'hésitez pas à me contacter."}
        </p>
        <form
          className={contactForm}
          name="contact-recaptcha"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-recaptcha="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <noscript>
            <p>This form won’t work with Javascript disabled</p>
          </noscript>
          <input type="hidden" name="bot-field" />
          <TextField
            type="text"
            id="name"
            name="name"
            required={true}
            label="Votre nom *"
            placeholder="Bill Gates"
            onChange={this.handleChange}
          />
          <TextField
            type="email"
            id="email"
            name="email"
            required={true}
            label="Votre email *"
            placeholder="billou@msft.com"
            onChange={this.handleChange}
          />
          <Textarea
            id="message"
            name="message"
            required={true}
            label="Votre message *"
            placeholder="I want to hire you !"
            onChange={this.handleChange}
          />
          <Recaptcha
            sitekey={RECAPTCHA_KEY}
            verifyCallback={this.handleRecaptcha}
            theme="dark"
          />
          <Button type="submit">ENVOYER</Button>
        </form>
      </section>
    );
  }
}
