import React from "react";
import { action } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";
import Button from "./button";

export default {
  title: 'Library / Button',
  decorators: [withA11y]
};

export const text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍
    </span>
  </Button>
);

export const disabled = () => (
  <Button onClick={action("clicked")} disabled={true}>
    Hola
  </Button>
);
