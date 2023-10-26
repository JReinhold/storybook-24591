import SimplePopover from "./SimplePopover";
import { userEvent, within, waitFor, screen } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { allModes } from "../../../.storybook/modes";

export default {
    title: 'Components/Overlays/Simple Popover',
    component: SimplePopover,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '800px', height: '600px', placeContent: 'center', padding: '300px' }}>
                <Story />
            </div>
        )
    ],
};

export const Default = {
    argTypes: {
        trigger: {
            options: ['hover', 'click', 'focus'],
            control: {type: 'radio'},
        },
        placement: {
            options: ['top', 'right', 'left', 'bottom'],
            control: {type: 'radio'},
        },
    },
};

export const LeftPopover = {
    args: {
        trigger: 'click',
        placement: 'left',
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByRole('button'));
        await waitFor(() => expect(screen.getByText('Make it Pop')).toBeInTheDocument());
        await new Promise((resolve) => setTimeout(resolve, 2000));
    },
};

export const RightPopover = {
    args: {
        trigger: 'click',
        placement: 'right',
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);

        await userEvent.click(canvas.getByRole('button'));
        await waitFor(() => expect(screen.getByText('Make it Pop')).toBeInTheDocument());
        await new Promise((resolve) => setTimeout(resolve, 2000));
    },
};

export const TopPopover = {
    args: {
        trigger: 'click',
        placement: 'top',
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);

        await userEvent.click(canvas.getByRole('button'));
        await waitFor(() => expect(screen.getByText('Make it Pop')).toBeInTheDocument());
        await new Promise((resolve) => setTimeout(resolve, 2000));
    },
};

export const BottomPopover = {
    args: {
        trigger: 'click',
        placement: 'bottom',
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);

        await userEvent.click(canvas.getByRole('button'));
        await waitFor(() => expect(screen.getByText('Make it Pop')).toBeInTheDocument());
        await new Promise((resolve) => setTimeout(resolve, 2000));
    },
};

export const AnotherOne = {
    args: {
        trigger: 'click',
        placement: 'top',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await waitFor(async () => {
            await expect(canvas.getByRole('button')).toBeInTheDocument();
        });

        await userEvent.click(canvas.getByRole('button'));

        const pop = screen.getByText('Make it Pop');

        await waitFor(async () => {
            await expect(pop).toBeInTheDocument()
        });
    },
};

