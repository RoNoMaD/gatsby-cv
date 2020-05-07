module.exports = {
  stories: ["../src/**/*.stories.(js|mdx)"],
  webpackFinal: (config) => {
    config.module.rules[0].use.push({
      loader: "linaria/loader",
      options: {
        sourceMap: true,
      },
    });
    return config;
  },
  addons: [
    "@storybook/addon-docs",
    // "@storybook/addon-viewport/register",
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
    "@storybook/addon-a11y/register",
    "storybook-dark-mode/register",
  ],
};
