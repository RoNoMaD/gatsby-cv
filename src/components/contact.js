import React from "react";
import { navigate } from "gatsby";
import Recaptcha from "react-google-recaptcha";
import SkillsIcon from "../images/skills.svg";

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

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
      <section
        style={{
          marginTop: "16px",
          marginBottom: "16px",
          padding: "0px 1.0875rem 1.45rem"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1.45rem"
          }}
        >
          <div
            style={{
              gridColumnStart: "2",
              height: "50px",
              width: "50px",
              backgroundColor: "hsla(83, 60%, 45%, 1)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "8px"
            }}
          >
            <SkillsIcon style={{ height: "25px", width: "auto" }} />
          </div>
          <h3 style={{ alignSelf: "center" }}>Contact</h3>
        </div>

        <p
          style={{
            padding: "8px",
            textAlign: "center"
          }}
        >
          Si mon profil vous interesse, n'hésitez pas à me contacter.
        </p>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
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
              style={{
                padding: "10px 15px",
                width: " 300px",
                background: "rgba(33,33,33,1)",
                border: "0",
                color: "white",
                borderRadius: "5px",
                boxShadow:
                  "inset 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.06)"
              }}
              type="text"
              name="name"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Votre email
            <br />
            <input
              style={{
                padding: "10px 15px",
                width: " 300px",
                background: "rgba(33,33,33,1)",
                border: "0",
                color: "white",
                borderRadius: "5px",
                boxShadow:
                  "inset 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.06)"
              }}
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
          <Recaptcha
            ref="recaptcha"
            sitekey={RECAPTCHA_KEY}
            onChange={this.handleRecaptcha}
          />
          <p>
            <button
              style={{
                float: "right",
                margin: "5px 0 0 0",
                fontSize: "12pt",
                padding: "10px 30px",
                color: "#fff",
                background: "transparent",
                outline: "0"
              }}
              type="submit"
            >
              ENVOYER
            </button>
          </p>
        </form>
      </section>
    );
  }
}
