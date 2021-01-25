module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/nodule_modules/", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts(x)"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
};
