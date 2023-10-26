import SidePills from "./SidePills";
import { userEvent, within } from "@storybook/testing-library";

export default {
    title: 'Left Side Pills',
    component: SidePills,
};

export const Default = {
    args: {
        defaultKey: 'first',
    },
};

export const SecondExpanded = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByText('Tab 2'));
    },
};