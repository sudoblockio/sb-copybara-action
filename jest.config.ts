import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  clearMocks: true,
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  preset: "ts-jest",
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  testPathIgnorePatterns: ["./dist"],
  verbose: true,
};

export default config;
