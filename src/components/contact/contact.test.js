import React from "react";
import { render } from "@testing-library/react";

import Contact from "./contact";

describe("Contact", () => {
  it("render a form with a name, email, description and submit", () => {
    const { getByLabelText, getByText } = render(<Contact />);
    getByLabelText(/nom/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);
    getByText(/envoyer/i);
  });
});
