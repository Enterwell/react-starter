module.exports = {
  stories: [
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
    '../views/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storycap',
    'storybook-addon-next'
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  },
  staticDirs: ['../public'],
  features: { emotionAlias: false }
};
