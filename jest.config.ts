export default {

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  // rootDir: "tests",

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

    // The root directory that Jest should scan for tests and modules within
    roots: ['<rootDir>/tests'],
    

    // An array of glob patterns indicating a set of files for which coverage information should be collected
    collectCoverageFrom: [
      '<rootDir>/tests/**/*.ts',
      '**/tests/**',
      '<rootDir>/tests/**/*.spec.ts',
      '<rootDir>/**/*.spec.ts',
      '<rootDir>/tests/**/*.test.ts',
      '!<rootDir>/../src/**/*.mock.ts',
      '!<rootDir>/../src/**/*.module.ts',
      '!<rootDir>/../src/**/*.spec.ts',
      '!<rootDir>/../src/**/*.test.ts',
      '!<rootDir>/../src/**/*.d.ts'
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: "<rootDir>/../coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",



  // The regexp pattern or array of patterns that Jest uses to detect test files
  // testRegex: [".*\\..*spec\\.ts$"],
  testRegex: '.*\\.spec\\.ts$',

   transform: {
     "^.+\\.ts?$": ["@swc/jest"],
   },
  // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
  maxWorkers: "50%",

  // coverageThreshold: {
  //   global: {
  //     statements: 100,
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //   }
  // }

};
