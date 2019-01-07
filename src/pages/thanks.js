import React from "react";
import Layout from "../components/layout";

const NotFoundPage = () => (
  <Layout>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}
    >
      <h1
        style={{
          color: "hsla(83, 60%, 45%, 1)"
        }}
      >
        MERCI
      </h1>
      <p>Je reviendrais vers vous dans les plus brefs délais.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
