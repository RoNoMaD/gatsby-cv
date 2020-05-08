import React from "react";
import { render } from "@testing-library/react";
import { useStaticQuery } from "gatsby"; // mocked

import { ThemeProvider } from "./theme";
import Layout from "./layout";

// mock useStaticQuery to return title in siteMetadata
beforeEach(() => {
  useStaticQuery.mockReturnValueOnce({
    site: {
      siteMetadata: {
        title: `GatsbyJS`,
      },
    },
  });
});

describe(`Layout`, () => {
  it(`renders children`, () => {
    const text = `__Hello world__`;
    const { getByText } = render(
      <ThemeProvider>
        <Layout>
          <h1>{text}</h1>
        </Layout>
      </ThemeProvider>
    );

    const child = getByText(text);

    expect(child).toBeInTheDocument();
  });
});
