const path = require('path');

module.exports = {
  "stories": [
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../views/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async (config) => {
    // Add SCSS support for CSS Modules
    // Source link https://github.com/storybookjs/storybook/issues/12464#issuecomment-824107014
    config.module.rules.push({
      test: /\.scss$/,
      include: path.resolve(__dirname, '../'),
      use: ['style-loader', 'css-loader?modules&importLoaders', 'sass-loader'],
    });

    return config;
  }
}