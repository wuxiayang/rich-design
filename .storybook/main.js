// const path = require('path');
module.exports = {
  "stories": [
    // "../src/**/*.stories.mdx",
    "../src/styles/index.scss",
    "../src/**/*.stories.@(ts|tsx)"
  ],
  "addons": [   
    // "@storybook/addon-docs",
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    // "./addons.tsx"
    // path.resolve("./addons.tsx")
  ],
  webpackFinal: async (config, { configType }) => { 
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [require.resolve("babel-preset-react-app")]
          }
        },
        // {
        //   loader: require.resolve("react-docgen-typescript-loader"),
        // }
      ]
    });
  
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  }
}