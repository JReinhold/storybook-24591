import AnimatedTooltip from "./AnimatedTooltip";
import { userEvent, within } from "@storybook/testing-library";

export default {
    title: 'Components/Overlays/Animated Tooltip',
    component: AnimatedTooltip,
    decorators: [(Story) => (<div style={{ padding: '40px' }}><Story/></div>)],
};

export const Default = {};

export const Open = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await userEvent.hover(canvas.getByText('tooltip'));
    },
};