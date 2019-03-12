import React from "react";
import { render } from "react-testing-library";
import { StaticQuery } from "gatsby"; // mocked

import Layout from "../layout";

// mock StaticQuery to return title in siteMetadata
beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `GatsbyJS`
        }
      }
    })
  );
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
