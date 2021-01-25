module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/nodule_modules/", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts(x)?", "!src/**/stories.tsx"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
};
