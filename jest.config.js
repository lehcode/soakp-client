export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ["ts", "tsx", "json", "node", "js"],
  rootDir: 'src',
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  transform: {
    "^.+\\.(ts|tsx)$": ['ts-jest', {
      tsconfig: 'tsconfig.json',
    }]
  },
  coverageDirectory: './coverage',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: [
    '**/*.ts',
    '!main/**/*'
  ],
  coverageReporters: ['text-summary', 'lcov'],
};
