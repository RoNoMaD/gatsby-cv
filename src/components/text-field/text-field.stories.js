import React from "react";
import { action } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";
import TextField from "./text-field";

export default {
  title: "Library / Text field",
  decorators: [withA11y]
};

export const textField = () => (
  <TextField
    id="textField"
    name="textField"
    label="Text field"
    value=""
    onChange={action("changed")}
  />
);
