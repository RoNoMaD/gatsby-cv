import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
import "@storybook/addon-actions/register";
import "@storybook/addon-links/register";

addons.setConfig({
  theme: themes.dark
});
