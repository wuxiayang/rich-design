const custom = require('./webpack.config.js');

module.exports = {
  webpackFinal: (config) => {
    console.log('config: ', config);
    return { ...config, module: { ...config.module, rules: custom.module.rules } };
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ]
}