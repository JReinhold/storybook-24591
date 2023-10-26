/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
    "@storybook/addon-viewport",
    "@storybook/addon-backgrounds",
    "@storybook/addon-themes",
    {
      name: "@storybook/addon-storysource",
      options: {
        loaderOptions: {
          injectStoryParameters: false,
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};
export default config;
