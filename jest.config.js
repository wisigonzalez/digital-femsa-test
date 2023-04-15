module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '\\.(js|ts)x?$': 'babel-jest',
  },
  collectCoverage: false,
  coverageReporters: ['lcov', 'text'],
  coveragePathIgnorePatterns: [
    '/.bundle/',
    '/android/',
    '/ios/',
    '/node_modules/',
    '.test.ts',
    '.test.tsx',
  ],
};
