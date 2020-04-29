import React from "react";
import { navigate } from "gatsby";
import EnvelopeIcon from "../../images/envelope-regular.svg";
import { css } from "linaria";

import TextField from "../text-field/text-field";
import Textarea from "../textarea/textarea";
import Button from "../button/button";

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

export default function Contact(props) {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  const Heading = `h${props.level || 1}`;
  return (
    <section className={contactSection}>
      <div className={contactTitleContainer}>
        <div className={contactIcon}>
          <EnvelopeIcon style={{ height: "25px", width: "auto" }} />
        </div>
        <Heading className={contactTitle}>Contact</Heading>
      </div>

      <p className={contactSubtitle}>
        {"Si mon profil vous interesse, n'hésitez pas à me contacter."}
      </p>
      <form
        className={contactForm}
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        <TextField
          type="text"
          id="name"
          name="name"
          required={true}
          label="Votre nom *"
          placeholder="Bill Gates"
          onChange={handleChange}
        />
        <TextField
          type="email"
          id="email"
          name="email"
          required={true}
          label="Votre email *"
          placeholder="billou@msft.com"
          onChange={handleChange}
        />
        <Textarea
          id="message"
          name="message"
          required={true}
          label="Votre message *"
          placeholder="I want to hire you !"
          onChange={handleChange}
        />
        <Button type="submit">ENVOYER</Button>
      </form>
    </section>
  );
}
