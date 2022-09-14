const czConfig = require('./.cz-config');
const nxScopes = require('@commitlint/config-nx-scopes');

module.exports = {
  extends: ['@commitlint/config-conventional', '@commitlint/config-nx-scopes'],
  rules: {
    'scope-enum': (ctx) =>
      nxScopes.rules['scope-enum']().then((rule) => {
        const [level, applicable, scopes] = rule;
        return [
          level,
          applicable,
          [...czConfig.scopes.map((e) => e.name), ...scopes],
        ];
      }),
    'type-enum': () => [2, 'always', czConfig.types.map((e) => e.value)],
  },
};
