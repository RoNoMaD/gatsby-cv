import React from "react";
import { navigate } from "gatsby";
import Recaptcha from "react-google-recaptcha";
import SkillsIcon from "../images/skills.svg";
import { css } from "linaria";

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const contactSection = css`
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 0px 1.0875rem 1.45rem;
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
  background-color: hsla(83, 60%, 45%, 1);
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
`;

const contactFormInput = css`
  width: 300px;
  padding: 10px 15px;
  color: white;
  background: rgba(33, 33, 33, 1);
  border: 0;
  border-radius: 5px;
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.3),
    0 1px rgba(255, 255, 255, 0.06);
`;

const formButton = css`
  float: right;
  margin: 5px 0 0 0;
  padding: 10px 30px;
  color: #fff;
  font-size: 12pt;
  background: transparent;
  outline: 0;
`;

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRecaptcha = value => {
    this.setState({ "g-recaptcha-response": value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <section className={contactSection}>
        <div className={contactTitleContainer}>
          <div className={contactIcon}>
            <SkillsIcon style={{ height: "25px", width: "auto" }} />
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
          <label>
            Votre nom
            <br />
            <input
              className={contactFormInput}
              type="text"
              name="name"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Votre email
            <br />
            <input
              className={contactFormInput}
              type="email"
              name="email"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Votre message
            <br />
            <textarea
              style={{
                padding: "10px 15px",
                minHeight: "150px",
                width: " 300px",
                background: "rgba(33,33,33,1)",
                border: "0",
                color: "white",
                borderRadius: "5px",
                boxShadow:
                  "inset 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.06)"
              }}
              name="message"
              onChange={this.handleChange}
            />
          </label>
          <Recaptcha sitekey={RECAPTCHA_KEY} onChange={this.handleRecaptcha} />
          <p>
            <button className={formButton} type="submit">
              ENVOYER
            </button>
          </p>
        </form>
      </section>
    );
  }
}
