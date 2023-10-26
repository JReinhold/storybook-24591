import CollapsedAccordion from "./CollapsedAccordion";
import { userEvent, within } from "@storybook/testing-library";
import { allModes } from "../../../.storybook/modes";

export default {
    title: 'Collapsed Accordion',
    component: CollapsedAccordion,
    decorators: [(Story) => <div style={{ width: '50%' }}><Story/></div>],
};

export const Default = {};

export const FirstExpanded = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByText('Accordion To Jim'));
    }
};

export const SecondExpanded = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByText('Another pun!'));
    },
};
