import React from "react";
import { css } from "linaria";
import Layout from "../components/layout";

const notFound = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const title = css`
  color: var(--color-brand-primary);
`;

const NotFoundPage = () => (
  <Layout>
    <div className={notFound}>
      <h1 className={title}>MERCI</h1>
      <p>Je reviendrais vers vous dans les plus brefs délais.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
