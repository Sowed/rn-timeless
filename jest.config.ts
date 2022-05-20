import type { Config } from '@jest/types';

const jestConfig: Config.InitialOptions = {
  verbose: true,
  preset: 'react-native',
  setupFiles: [
    '<rootDir>/jest.setup.js'
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  testPathIgnorePatterns: [
    '\\.snap$',
    '<rootDir>/__tests__/',
    '<rootDir>/.history/',
    '<rootDir>/node_modules/'
  ],
  transformIgnorePatterns: [
    'node_modules/?!(static-container)'
  ]
};

export default jestConfig;