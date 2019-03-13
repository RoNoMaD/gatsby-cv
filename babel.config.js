module.exports = {
  presets: [
    "babel-preset-gatsby",
    [
      "linaria/babel",
      {
        evaluate: true,
        displayName: false
      }
    ]
  ]
};
