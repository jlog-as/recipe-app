import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest', // Use Babel to transform TS and TSX files
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'], // Add TypeScript and JSX extensions
  transformIgnorePatterns: ['/node_modules/'], // Ensure node_modules are excluded from transformations
  testEnvironment: 'jest-environment-jsdom',
};

export default config;
