# super-eslint

Shared ESLint flat config for JavaScript, TypeScript and React projects.

## Installation

```shell
yarn add --dev super-eslint eslint typescript
```

## Usage

Create `eslint.config.mjs` in the root of the project:

```js
import superEslintConfig from 'super-eslint';

export default [
    ...superEslintConfig,
    {
        rules: {
            // Project-specific overrides.
        },
    },
];
```

The config uses TypeScript's project service and resolves `tsconfig.json` files from the directory where ESLint is run. Run ESLint from the root of the consuming project.

## Publishing

Publishing is triggered by a published GitHub Release. The release tag must exactly match the version in `package.json` and use the `v<version>` format, for example `v1.8.0`. GitHub prereleases are published with the npm dist-tag `next`; regular releases use `latest`.

Before the first automated release, choose one of these bootstrap options:

1. Publish the package to npm once from a trusted local machine; or
2. Add a granular npm access token as the `NPM_TOKEN` GitHub Actions secret and publish the first GitHub Release. Delete the secret after the first publication.

After the package exists, open its settings on npmjs.com and add a GitHub Actions trusted publisher. Set the GitHub owner to `kovalevroman7`, repository to `super-eslint`, and workflow filename to `publish.yml`. Allow the `npm publish` action.

Subsequent releases use npm trusted publishing (OIDC), so no long-lived `NPM_TOKEN` secret is required. Publishing requires Node.js 22.14 or newer and npm 11.5.1 or newer; the release workflow uses Node.js 24.

For every release:

1. Update `version` in `package.json` and commit the change.
2. Create and publish a GitHub Release with a matching tag, such as `v1.8.0`.

The workflow installs locked dependencies, runs the tests, validates the tag against the package version, and only then publishes to npm.
