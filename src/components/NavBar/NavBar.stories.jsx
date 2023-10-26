import NavBar from "./NavBar";
import {userEvent, within} from '@storybook/testing-library';
import {expect} from '@storybook/jest';
import { allModes } from "../../../.storybook/modes";

export default {
    title: "Nav Bar",
    component: NavBar,
    decorators: [(Story) => <div style={{ height: '100vh' }}><Story/></div>],
    parameters: {
        chromatic: {
            modes: {
                'desktop': allModes['desktop'],
                'mobile': allModes['mobile'],
                'peach': allModes['peach'],
            },
        },
    },
};

export const Default = {
    argTypes: {
        placement: {
            options: ['start', 'end', 'top', 'bottom'],
            control: {type: 'radio'},
        },
        scroll: {
            control: {type: 'boolean'},
        },
        backdrop: {
            control: {type: 'boolean'},
        },
    },
};

export const LeftExpanded = {
    args: {
        placement: 'start'
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByRole('button'));
    },
};

export const RightExpanded = {
    args: {
        placement: 'end'
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByRole('button'));
    },
};

export const LeftExpandedNoBackdrop = {
    args: {
        placement: 'start',
        backdrop: false,
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByRole('button'));
    },
};

export const RightExpandedNoBackdrop = {
    args: {
        placement: 'end',
        backdrop: false,
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByRole('button'));
    },
};

