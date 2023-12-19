import { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
    '../views/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storycap'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  staticDirs: ['../public'],
  docs: {
    // Every story will have an automatically generated Autodocs entry
    // See more: https://storybook.js.org/docs/writing-docs/autodocs
    autodocs: true
  },
  webpackFinal: async config => {
    // this modifies the existing image rule to exclude .svg files
    // since we want to handle those files with @svgr/webpack
    // disable whatever is already set to load SVGs
    config?.module?.rules?.forEach(rule => {
      if (!rule || typeof rule !== 'object') return;
      if (rule.test instanceof RegExp && rule.test.test('.svg')) {
        rule.exclude = /\.svg$/;
      }
    });

    // configure .svg files to be loaded with @svgr/webpack
    config?.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
};

export default config;