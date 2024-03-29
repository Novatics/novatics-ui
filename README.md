<h1 align="center">NOVATICS UI</h1>

**NOVATICS UI** contains simple and complex React components, is based on [_Material UI_](https://mui.com/material-ui/getting-started/overview/)

## Installation

### Novatics UI

Install Novatics UI, it is available as an [npm package](https://www.npmjs.com/package/novatics)

**npm:**

```sh
npm install @novatics-ui/core
```

**yarn:**

```sh
yarn add @novatics-ui/core
```

## Getting started with Novatics UI

Check our [documentation](https://components.novatics.com.br/?path=/story/intro--page)

Here is an example of a basic app using Novatics UI's `CurrencyTextField` component:

```jsx
import * as React from 'react';
import CurrencyTextField from '@novatics-ui/currency-text-field';

function App() {
  return (
    <CurrencyTextField
      value={123456}
      onChange={() => {
        /* setup on change */
      }}
    />
  );
}
```

In this [playground](https://components.novatics.com.br/?path=/docs/currency-textfield--playground), try changing the props and see how it affects the output and the code.

## Contributing

### Developing

1. Download the project and install dependencies

```shell
yarn install
```

2. Use nx generators to create the component and the storybook documentation. Visit the [Nx Documentation](https://nx.dev) to learn more.

```shell
yarn component:generate
```

3. Run the storybook to start developing

```shell
yarn dev

```

4. Sign-up all commits, Here is [How to Sign using gpg, ssh or S/MIME](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits)

5. Create a Pull request and wait for approval.

### Local Publishing on Docker

Deploy Verdaccio on local Docker

```shell
yarn verdaccio:up
```

Add user to verdaccio

```shell
yarn verdaccio:addUser
```

**note** On linux, there may be a permission error, in this case it is necessary to give permission on the sudo folder.

```shell
sudo chown 10001:65533 -R storage
```

Create versions, push to git and deploy.

```shell
yarn versions:create:push:deploy
```

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
