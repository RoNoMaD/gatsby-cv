import React from "react";
import { action } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";
import Textarea from "./textarea";

export default {
  title: "Library / Textarea",
  decorators: [withA11y]
};

export const textarea = () => (
  <Textarea
    id="textarea"
    name="textarea"
    label="Text area"
    value=""
    onChange={action("changed")}
  />
);
