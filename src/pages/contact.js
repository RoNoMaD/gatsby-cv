import React from "react";
import { css } from "linaria";

import Layout from "../components/layout";
import ContactForm from "../components/contact/contact";

const contactSection = css`
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 0px 1.0875rem 1.45rem;
`;

export default () => {
  return (
    <Layout>
      <section className={contactSection}>
        <ContactForm />
      </section>
    </Layout>
  );
};
