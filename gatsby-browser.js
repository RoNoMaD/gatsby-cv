/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
require("./src/css/variables.css");
require("./src/css/reset.css");
require("./src/css/utils.css");
require("prismjs/themes/prism-okaidia.css");

exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation !== null) {
    const skipLink = document.querySelector("#reach-skip-nav");

    if (skipLink) {
      skipLink.tabIndex = -1;
      console.log("#reach-skip-nav", skipLink);
      skipLink.focus();
    }
  }
};
