import type { StorybookConfig } from '@storybook/react-vite';
import rootMain from '../../../.storybook/main';

const config: StorybookConfig = {
  stories: [
    ...rootMain.stories.map((s) => `../../../${s}`),
    '../../**/*.stories.mdx',
    '../../**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [...rootMain.addons, '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'packages/core/vite.config.ts',
      },
    },
  },
  docs: {
    autodocs: true,
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
