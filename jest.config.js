module.exports = {
  // js or jsx files need to be transformed using jest-preprocess.js file
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    // mocking stylesheets with identity-obj-proxy
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    // mocking other assets with custom mock
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `.cache`,
    `.linaria-cache`,
    `public`,
  ],
  modulePathIgnorePatterns: ["<rootDir>/node_modules"],
  watchPathIgnorePatterns: ["<rootDir>/node_modules/"],
  // tell Jest to transpile Gatsby files
  transformIgnorePatterns: [`node_modules/(?!(gatsby)|lodash-es/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFiles: [`<rootDir>/loadershim.js`],
  setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
  collectCoverageFrom: ["**/**/*.js"],
  // watch plugin to filter on file name
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};
