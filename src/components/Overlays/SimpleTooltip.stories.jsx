import SimpleTooltip from "./SimpleTooltip";
import { within, userEvent } from "@storybook/testing-library";

export default {
    title: 'Components/Overlays/Simple Tooltip',
    component: SimpleTooltip,
    decorators: [(Story) => (<div style={{ padding: '40px' }}><Story/></div>)],
};

export const Default = {};

export const Open = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await userEvent.hover(canvas.getByText('tooltip'));
    },
};
