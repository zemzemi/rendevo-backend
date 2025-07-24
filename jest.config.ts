import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.ts'],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    roots: ['<rootDir>/src/tests'],
    moduleNameMapper: {
        '^@src/(.*)$': '<rootDir>/src/$1',
        '^@config/(.*)$': '<rootDir>/src/config/$1',
        '^@database/(.*)$': '<rootDir>/src/database/$1',
        '^@models/(.*)$': '<rootDir>/src/models/$1',
        '^@middlewares/(.*)$': '<rootDir>/src/middlewares/$1',
        '^@routes/(.*)$': '<rootDir>/src/routes/$1',
        '^@controllers/(.*)$': '<rootDir>/src/controllers/$1',
        '^@services/(.*)$': '<rootDir>/src/services/$1',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
};

export default config;
