/** @type { import('@storybook/react').Preview } */
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import '../src/index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        mobile: { name: 'Small', styles: {width: '640px', height: '800px'} },
        desktop: { name: 'Large', styles: {width: '1024px', height: '1000px'} },
        smallMobile: { name: 'Small Mobile', styles: {width: '320px', height: '568px'} },
      },
      defaultViewport: 'desktop',
    },
    backgrounds: {
      values: [
        {name: 'lightbg', value: '#fff'},
        {name: 'darkbg', value: '#1E293B'},
        {name: 'peach', value: '#ffa07a'},
      ],
    },
  },
  decorators: [
    withThemeByDataAttribute ({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-bs-theme',
    }),
  ],
};

export default preview;
