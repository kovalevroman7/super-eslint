import js from '@eslint/js';
import globals from 'globals';
import tsPlugin from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import unicornPlugin from 'eslint-plugin-unicorn';
import sonarjsPlugin from 'eslint-plugin-sonarjs';
import jsDocPlugin from 'eslint-plugin-jsdoc';
import stylistic from '@stylistic/eslint-plugin';

export default tsPlugin.config(
    ...tsPlugin.configs.recommended,
    ...tsPlugin.configs.recommendedTypeChecked,
    ...tsPlugin.configs.stylisticTypeChecked,
    js.configs.recommended,
    reactPlugin.configs.flat.recommended,
    importPlugin.flatConfigs.recommended,
    prettierConfig,

    {
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            '@typescript-eslint': tsPlugin.plugin,
            unicorn: unicornPlugin,
            sonarjs: sonarjsPlugin,
            jsdoc: jsDocPlugin,
            '@stylistic': stylistic,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                jest: true,
                it: true,
                expect: true,
                test: true,
                describe: true,
                beforeEach: true,
                beforeAll: true,
                JSX: true,
                NodeJS: true,
            },
            parser: tsPlugin.parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: process.cwd(),
            },
        },

        rules: {
            ...reactHooksPlugin.configs.recommended.rules,

            'jsdoc/require-jsdoc': [
                'error',
                {
                    contexts: [
                        'TSEnumDeclaration',
                        'CallExpression[callee.property.name="injectEndpoints"] Property[key.name="endpoints"] > ArrowFunctionExpression > ObjectExpression > Property',
                    ],

                    require: {
                        ArrowFunctionExpression: false,
                        ClassDeclaration: false,
                        ClassExpression: false,
                        FunctionDeclaration: false,
                        FunctionExpression: false,
                        MethodDefinition: false,
                    },
                },
            ],

            'jsdoc/require-description': [
                'error',
                {
                    contexts: [
                        'TSEnumDeclaration',
                        'CallExpression[callee.property.name="injectEndpoints"] Property[key.name="endpoints"] > ArrowFunctionExpression > ObjectExpression > Property',
                    ],

                    descriptionStyle: 'body',
                },
            ],

            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'enum',
                    format: ['PascalCase'],
                },
                {
                    selector: 'enumMember',
                    format: ['StrictPascalCase'],
                },
                {
                    selector: 'variable',
                    types: ['boolean'],
                    format: ['PascalCase'],
                    prefix: ['is', 'are', 'should', 'has', 'have', 'can', 'did', 'will', 'allow'],
                },
            ],
            
            'jsdoc/multiline-blocks': 'error',
            'jsdoc/no-multi-asterisks': 'error',
            'unicorn/prefer-string-slice': 'error',
            'unicorn/no-useless-undefined': 'error',
            'unicorn/prefer-date-now': 'error',
            'unicorn/numeric-separators-style': 'error',
            'unicorn/no-abusive-eslint-disable': 'error',
            'unicorn/no-typeof-undefined': 'error',
            'unicorn/no-useless-spread': 'error',
            'unicorn/new-for-builtins': 'error',
            'unicorn/no-empty-file': 'error',
            'unicorn/prefer-spread': 'error',
            'unicorn/require-array-join-separator': 'error',
            'unicorn/prefer-switch': 'error',
            'unicorn/no-length-as-slice-end': 'error',
            'unicorn/prefer-array-find': 'error',
            'unicorn/prefer-includes': 'error',
            'unicorn/no-array-for-each': 'error',
            'sonarjs/prefer-immediate-return': 'error',
            'sonarjs/no-nested-template-literals': 'error',
            'sonarjs/prefer-single-boolean-return': 'error',
            'sonarjs/no-identical-functions': 'error',
            'sonarjs/no-duplicated-branches': 'error',
            'sonarjs/no-small-switch': 'error',
            'sonarjs/no-nested-switch': 'error',
            'sonarjs/cognitive-complexity': ['error', 20],
            'sonarjs/no-gratuitous-expressions': 'error',
            'sonarjs/no-dead-store': 'error',
            'sonarjs/concise-regex': 'error',
            'sonarjs/no-redundant-optional': 'error',
            'sonarjs/no-commented-code': 'error',
            'react/prop-types': 'off',
            'react/no-unescaped-entities': 'off',
            'react/display-name': 'off',
            'react/jsx-key': 'error',
            'react/jsx-no-target-blank': 'off',
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/self-closing-comp': 'error',

            'react/jsx-curly-brace-presence': [
                'error',
                {
                    props: 'never',
                },
            ],

            'react/no-array-index-key': 'error',
            'react/jsx-no-useless-fragment': 'error',
            'react/jsx-boolean-value': 'error',
            'react/destructuring-assignment': 'error',
            eqeqeq: 'error',
            'arrow-body-style': ['error', 'as-needed'],
            'no-import-assign': 'error',
            'no-obj-calls': 'error',
            'no-promise-executor-return': 'error',
            'no-self-compare': 'error',
            'no-unmodified-loop-condition': 'error',
            'no-unreachable': 'error',
            'no-unreachable-loop': 'error',
            'no-unsafe-negation': 'error',
            'no-else-return': 'error',
            'no-useless-rename': 'error',

            'no-implicit-coercion': [
                'error',
                {
                    allow: ['!!'],
                },
            ],

            'no-unneeded-ternary': 'error',
            'array-callback-return': 'error',
            'prefer-template': 'error',
            'object-shorthand': 'error',
            'prefer-const': 'error',
            'no-lonely-if': 'error',

            'no-console': [
                'error',
                {
                    allow: ['info', 'warn', 'error'],
                },
            ],

            'no-alert': 'error',
            'no-debugger': 'error',
            curly: ['error', 'all'],
            'no-var': 'error',
            'no-undef': 'error',
            'no-redeclare': 'error',

            'import/order': [
                'error',
                {
                    'newlines-between': 'always',
                    pathGroupsExcludedImportTypes: ['react'],

                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },

                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],

                    pathGroups: [
                        {
                            pattern: 'react',
                            group: 'external',
                            position: 'before',
                        },
                    ],
                },
            ],

            'import/no-duplicates': [
                'error',
                {
                    considerQueryString: true,
                },
            ],

            'import/no-useless-path-segments': 'error',

            'import/extensions': [
                'error',
                {
                    ts: 'never',
                    tsx: 'never',
                    checkTypeImports: true,
                },
            ],

            '@typescript-eslint/restrict-template-expressions': 'off',
            '@typescript-eslint/no-floating-promises': 'off',

            '@typescript-eslint/no-misused-promises': [
                'error',
                {
                    checksVoidReturn: {
                        attributes: false,
                    },
                },
            ],

            'no-unused-vars': 'off',

            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],

            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    prefer: 'type-imports',
                },
            ],

            '@typescript-eslint/no-explicit-any': [
                'error',
                {
                    ignoreRestArgs: true,
                },
            ],

            '@typescript-eslint/array-type': 'error',
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/consistent-indexed-object-style': 'error',
            '@typescript-eslint/consistent-type-definitions': 'off',
            '@typescript-eslint/prefer-nullish-coalescing': 'off',
            '@typescript-eslint/prefer-promise-reject-errors': 'off',
            'react-hooks/exhaustive-deps': 'off',
            '@stylistic/spaced-comment': 'error',
        },

        settings: {
            react: {
                version: 'detect',
            },

            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                    extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
                },
            },

            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx'],
            },
        },

        files: ['**/*.{js,jsx,ts,tsx}'],
    },

    {
        ignores: [
            '**/.husky',
            '**/.infra',
            '**/dist',
            'src/assets/*',
            '**/public/*',
            '**/vite.config.ts',
            '**/src/vite-env.d.ts',
            'eslint.config.mjs',
            '.stylelintrc.cjs',
            '.openapi-config.cjs'
        ],
    },
);
