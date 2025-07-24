import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

const importResolverSettings = {
    settings: {
        'import/resolver': {
            typescript: {
                project: './tsconfig.json',
            },
        },
    },
};

export default [
    importResolverSettings,
    js.configs.recommended,
    prettier,
    {
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            globals: {
                __dirname: 'readonly',
                process: 'readonly',
                module: 'readonly',
                require: 'readonly',
                exports: 'readonly',
                console: 'readonly',
                jest: 'readonly',
                describe: 'readonly',
                it: 'readonly',
                beforeAll: 'readonly',
                afterAll: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
                expect: 'readonly',
            },
        },
        files: ['**/*.ts'],
        plugins: {
            import: importPlugin,
            'unused-imports': unusedImports,
            prettier: prettierPlugin,
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            // import plugin rules
            'import/order': ['warn', { 'newlines-between': 'always' }],
            'import/no-unresolved': 'warn',

            // unused imports
            'unused-imports/no-unused-imports': 'warn',

            // console
            'no-console': 'warn',

            // prettier
            'prettier/prettier': 'warn',
        },
    },
];
