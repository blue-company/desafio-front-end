module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: ["/node_modules/(?!swiper|ssr-window|dom7)"],
  // if you already have an entry present (as I did), eg. `/node_modules/(?!lodash-es)`, simply add the swiper entries to it
  // eg: `/node_modules/(?!lodash-es|swiper|ssr-window|dom7)`

  transform: {
    "^.+\\.(ts|tsx|js)$": "babel-jest", // this is probably something you already had, if using ts-jest, it's probably fine to leave as ts-jest
  },
};
