module.exports = {
  types: [
    { value: 'feat', name: '🧩 Features: A new feature' },
    { value: 'fix', name: '🐛 Bug Fixes: A bug fix' },
    {
      value: 'docs',
      name: '📚 Documentation: Documentation only changes'
    },
    {
      value: 'style',
      name: '💎 Styles: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'
    },
    {
      value: 'refactor',
      name: '📦 Code Refactoring: A code change that neither fixes a bug nor adds a feature'
    },
    {
      value: 'perf',
      name: '🚀 Performance Improvements: A code change that improves performance'
    },
    {
      value: 'test',
      name: '🔬 Tests: Adding missing tests or correcting existing tests'
    },
    {
      value: 'build',
      name: '🛠  Builds: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)'
    },
    {
      value: 'ci',
      name: '⚙️  Continuous Integrations: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)'
    },
    {
      value: 'chore',
      name: "☕ Chores: Other changes that don't modify src or test files"
    },
    { value: 'revert', name: '🗑  Reverts: Reverts a previous commit' },
    { value: 'wip', name: '🏗  WIP: Work in progress' }
  ],
  scopes: [
    { name: 'root' },
    { name: 'core' },
    { name: 'release' },
    { name: 'action-footer' },
    { name: 'button' },
    { name: 'checkbox' },
    { name: 'checkbox-field' },
    { name: 'chip' },
    { name: 'currency-text-field' },
    { name: 'divider' },
    { name: 'form' },
    { name: 'input-field' },
    { name: 'masked-text-field' },
    { name: 'radio' },
    { name: 'styles' },
    { name: 'tokens' },
    { name: 'wizard' }
  ],
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'NUI-',
  ticketNumberRegExp: 'd{1,5}',
  allowBreakingChanges: [ 'feat', 'fix' ],
  subjectLimit: 100,
  usePreparedCommit: true
}