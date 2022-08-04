module.exports = {
  types: [
    { value: 'feat', name: 'feat: A new feature' },
    { value: 'fix', name: 'fix: A bug fix' },
    { value: 'docs', name: 'docs: Documentation only changes' },
    {
      value: 'style',
      name: 'style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'
    },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature'
    },
    { value: 'test', name: 'test: Adding missing tests' },
    {
      value: 'chore',
      name: 'chore: Changes to the build process or auxiliary tools and libraries such as documentation generation'
    },
    { value: 'WIP', name: 'WIP: Work in progress' }
  ],
  scopes: [
    { name: 'root' },
    { name: 'core' },
    { name: 'release' },
    { name: 'currency-text-field' }
  ],
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: 'd{1,5}',
  allowCustomScopes: true,
  allowBreakingChanges: [ 'feat', 'fix' ],
  skipQuestions: [ 'body' ],
  subjectLimit: 100
}