/**
 * Name: eslint.config.js
 * Description: ESLint configuration file.
 */

import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
    {
        files: ['src/**/*.{ts,tsx}'],
        rules: {
            ...js.configs.recommended.rules,
            ...ts.configs.recommended.rules,
        },
        languageOptions: {
            parser: tsParser,
            globals: {
                ...globals.browser,
                ...globals.es2021,
            },
            ecmaVersion: 'latest',
            sourceType: 'module'
        },
        plugins: {
            '@typescript-eslint': ts,
        },
        rules: {
            'indent': [
                'warn',
                4,
                { "SwitchCase": 1 }
            ],
            'linebreak-style': [
                'error',
                'windows'
            ],
            'semi': [
                'error',
                'always'
            ],
            'no-var': 'error',
            'curly': 'warn',
            'camelcase': 'warn',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-explicit-any': 'error',
        },
    },
];