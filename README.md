## Установка
1. Создать [access-token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#:~:text=On%20the%20left%20sidebar%2C%20select,Create%20personal%20access%20token.). В списке "select scopes" выбрать "api"
2. Создать в проекте файл .npmrc, подставив в authToken созданный токен:

```
@sodrujestvo:registry="https://psblab.gitlab.yandexcloud.net/api/v4/projects/67/packages/npm/"
//psblab.gitlab.yandexcloud.net/api/v4/projects/67/packages/npm/:_authToken="your_token"
```
3. Установить
```
npm install --dev @sodrujestvo/community_eslint_config
```

## Использование

Создать `eslint.config.mjs`:

```js
import communityEslintConfig from '@sodrujestvo/community_eslint_config';

export default [
  ...communityEslintConfig,
];
```

Добавить или изменить существующее правило:

```js
import communityEslintConfig from '@sodrujestvo/community_eslint_config';

export default [
  ...communityEslintConfig,

  {
    rules: {
        'example-rule': 'warn',
    },
  }
];
```

Добавить или изменить игнорирование:

```js
import communityEslintConfig from '@sodrujestvo/community_eslint_config';

export default [
  ...communityEslintConfig,

  {
    rules: {
      'example-rule': 'warn',
    },
  },
  {
    ignores: [
      'example.ts',
    ],
  },
];
```
