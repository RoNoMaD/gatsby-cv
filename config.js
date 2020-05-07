module.exports = {
  source: ["design-tokens/**/*.json"],
  platforms: {
    css: {
      transforms: ["attribute/cti", "name/cti/kebab", "color/hsl"],
      buildPath: "design-tokens/css/",
      files: [
        {
          format: "css/variables",
          destination: "colors.css",
          filter: (props) => {
            console.log(props);
            return !props.type || props.type !== "gradient";
          },
        },
      ],
    },
  },
};
