import NumberBadges from "./NumberBadges";
import { userEvent, within, waitFor } from '@storybook/testing-library';
import { expect } from "@storybook/jest";

export default {
    title: 'Number Badges',
    component: NumberBadges,
    argTypes: {
        variant: {
            control: {type: 'radio'},
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link'],
        },
        buttonLabel: {
            control: {type: 'text'},
        },
        bg: {
            control: {type: 'radio'},
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link'],
        },
        badgeNumber: {
            control: {type: 'number'},
        },
    },
};

export const Default = {
    args: {
        variant: 'primary',
        buttonLabel: 'This is a button',
        bg: 'secondary',
        badgeNumber: 3,
    },
};

export const LargeNumber = {
    args: {
        ...Default.args,
        badgeNumber: 200,
    },
};

export const NegativeNumber = {
    args: {
        ...Default.args,
        badgeNumber: -2,
    },
};

export const FocusState = {
    args: {
        ...Default.args,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.hover(canvas.getByRole('button'));
        await waitFor(() => expect(canvas.getByRole('button').focus()));
    },
    decorators: [(Story) => <div style={{ padding: '20px' }}><Story/></div>],
};