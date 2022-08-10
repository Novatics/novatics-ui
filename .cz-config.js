const nxScopes = require('@commitlint/config-nx-scopes');

module.exports = {
  // feat: {
  //   description: 'A new feature',
  //   title: 'Features',
  //   emoji: '✨',
  // },
  // fix: {
  //   description: 'A bug fix',
  //   title: 'Bug Fixes',
  //   emoji: '🐛',
  // },
  // docs: {
  //   description: 'Documentation only changes',
  //   title: 'Documentation',
  //   emoji: '📚',
  // },
  // style: {
  //   description:
  //     'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
  //   title: 'Styles',
  //   emoji: '💎',
  // },
  // refactor: {
  //   description:
  //     'A code change that neither fixes a bug nor adds a feature',
  //   title: 'Code Refactoring',
  //   emoji: '📦',
  // },
  // perf: {
  //   description: 'A code change that improves performance',
  //   title: 'Performance Improvements',
  //   emoji: '🚀',
  // },
  // test: {
  //   description: 'Adding missing tests or correcting existing tests',
  //   title: 'Tests',
  //   emoji: '🚨',
  // },
  // build: {
  //   description:
  //     'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
  //   title: 'Builds',
  //   emoji: '🛠',
  // },
  // ci: {
  //   description:
  //     'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
  //   title: 'Continuous Integrations',
  //   emoji: '⚙️',
  // },
  // chore: {
  //   description: "Other changes that don't modify src or test files",
  //   title: 'Chores',
  //   emoji: '♻️',
  // },
  // revert: {
  //   description: 'Reverts a previous commit',
  //   title: 'Reverts',
  //   emoji: '🗑',
  // },
  types: [
    { value: 'feat', name: 'feat: A new feature' },
    { value: 'fix', name: '🐛 fix: A bug fix' },
    { value: 'docs', name: 'docs: Documentation only changes' },
    {
      value: 'style',
      name: 'style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    { value: 'test', name: 'test: Adding missing tests' },
    {
      value: 'chore',
      name: 'chore: Changes to the build process or auxiliary tools and libraries such as documentation generation',
    },
    { value: 'wip', name: 'WIP: Work in progress' },
  ],
  scopes: [
    { name: 'root' },
    { name: 'core' },
    { name: 'release' },
    { name: 'collapse-list' },
    { name: 'styles' },
  ],
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'NUI-',
  ticketNumberRegExp: 'd{1,5}',
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body'],
  subjectLimit: 100,
};
