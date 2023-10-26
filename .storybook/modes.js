export const allModes = {
    mobile: {
        viewport: 'smallMobile',
        theme: 'light',
        backgrounds: 'lightbg',
    },
    desktop: {
        viewport: 'desktop',
        theme: 'light',
        backgrounds: 'lightbg',
    },
    dark: {
        backgrounds: 'darkbg',
        theme: 'dark',
        viewport: 'smallMobile',
    },
    light: {
        backgrounds: 'lightbg',
        theme: 'light',
    },
    peach: {
        'backgrounds.value': '!hex(ffa07a)',
      //  theme: 'light',
        viewport: 'desktop',
    },
    'mobile dark': {
        viewport: 'smallMobile',
        theme: 'dark',
        backgrounds: 'peach',
    },
    'desktop dark': {
        viewport: 'desktop',
        theme: 'dark',
        backgrounds: 'peach',
    },
};