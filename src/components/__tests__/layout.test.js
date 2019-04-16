import React from "react";
import { render } from "react-testing-library";
import { useStaticQuery } from "gatsby"; // mocked

import Layout from "../layout";

// mock useStaticQuery to return title in siteMetadata
beforeEach(() => {
  useStaticQuery.mockReturnValueOnce({
    site: {
      siteMetadata: {
        title: `GatsbyJS`
      }
    }
  });
});

describe(`Layout`, () => {
  it(`renders children`, () => {
    const text = `__Hello world__`;
    const { getByText } = render(
      <Layout>
        <main>
          <h1>{text}</h1>
        </main>
      </Layout>
    );

    const child = getByText(text);

    expect(child).toBeInTheDocument();
  });
});
