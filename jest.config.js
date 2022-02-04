const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and
  // .env files in your test environment
  dir: './'
});

// Add any custom config to be passed to Jest
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/configuration
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],

  // Automatically clear mock calls, instances and results before every test
  clearMocks: true,

  // The root directory that Jest should scan for tests and modules within
  rootDir: './tests/unit',

  // The paths to modules that run some code to configure
  // or set up the testing environment before each test
  // setupFiles: [],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/*.@(spec|test).@(js|jsx|ts|tsx)'
  ]
};

// createJestConfig is exported this way to ensure that next/jest
// can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
