import communityEslintConfig from '../index.mjs';

export default [
    ...communityEslintConfig,

    {
        rules: {
            'max-lines': ['error', 300],
            'no-restricted-imports': [
                'warn',
                {
                    patterns: [
                        {
                            regex: '@/features/[^/]+/.*',
                            message:
                                "Импорты формата '@/features/{feature}/...' запрещены. Используйте общие импорты в формате '@/features/{feature}'.",
                        },
                        {
                            regex: '^((\\.\\./){4,})', // 4 и более ../
                            message:
                                'Слишком глубокий относительный импорт. Используйте абсолютные пути или реорганизуйте структуру.',
                        },
                    ],
                },
            ],
            'no-restricted-syntax': [
                'error',
                {
                    selector:
                        'TSTypeAliasDeclaration TSPropertySignature[key.name=page] + TSPropertySignature[key.name=per_page] + TSPropertySignature[key.name=page_count] + TSPropertySignature[key.name=total]',
                    message: 'Please use interface Pagination from src/feature/types.ts',
                },
                {
                    selector: 'ImportDeclaration Literal[value=/^@\\u002Ffeatures\\u002F[^\\u002F]*\\u002F.*$/]',
                    message: 'Please use short alias @/features/featureName',
                },
                {
                    selector:
                        'TSInterfaceDeclaration TSPropertySignature[key.name=page] + TSPropertySignature[key.name=per_page] + TSPropertySignature[key.name=page_count] + TSPropertySignature[key.name=total]',
                    message: 'Please use interface Pagination from src/feature/types.ts',
                },
                {
                    selector: 'TSUnionType TSLiteralType[literal.value=schoolchild] + TSLiteralType[literal.value=student]',
                    message: 'Please use enum CATEGORY from src/shared/consts.ts',
                },
                {
                    selector: 'Literal[value=Школьник], Literal[value=Студент]',
                    message: 'Please use CATEGORY_DICT from src/shared/consts.ts',
                },
                {
                    selector: 'JSXOpeningElement[name.name=Breadcrumb] JSXIdentifier[name=a]',
                    message: 'Prefer Link from react-router-dom instead of tag "a" in Breadcrumbs',
                },
            ],
            'import/extensions': [
                'error',
                'ignorePackages',
                {
                    js: 'never',
                    jsx: 'never',
                    ts: 'never',
                    tsx: 'never',
                    json: 'always',
                },
            ],
            'import/no-restricted-paths': [
                'error',
                {
                    zones: [
                        {
                            from: './src/pages',
                            target: './src/shared',
                            message: 'Слой более низкого уровня (shared) не может импортировать слой более высокого уровня (pages).',
                        },
                        {
                            from: './src/pages',
                            target: './src/features',
                            message:
                                'Слой более низкого уровня (features) не может импортировать слой более высокого уровня (pages).',
                        },
                    ],
                },
            ],
        },
    },
    {
        ignores: ['openapi-config.cjs', 'tools'],
    },
];
