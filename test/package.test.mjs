import assert from 'node:assert/strict';
import test from 'node:test';

import config from '../index.mjs';

test('exports a non-empty ESLint flat config', () => {
    assert.ok(Array.isArray(config));
    assert.ok(config.length > 0);
    assert.ok(config.every((entry) => typeof entry === 'object' && entry !== null));
});

test('resolves TypeScript projects from the consumer working directory', () => {
    const typedConfig = config.find((entry) => entry.languageOptions?.parserOptions?.projectService === true);

    assert.ok(typedConfig);
    assert.equal(typedConfig.languageOptions.parserOptions.tsconfigRootDir, process.cwd());
});
