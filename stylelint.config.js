module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-rational-order",
    "linaria/stylelint-config",
  ],
  plugins: ["stylelint-color-format"],
  rules: {
    "color-format/format": {
      format: "hsl",
    },
  },
};
