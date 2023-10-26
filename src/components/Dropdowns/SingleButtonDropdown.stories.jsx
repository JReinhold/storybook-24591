import SingleButtonDropdown from "./SingleButtonDropdown";
import {userEvent, within} from '@storybook/testing-library';
import {expect} from '@storybook/jest';

export default {
    title: 'Single Button Dropdown',
    component: SingleButtonDropdown
};

export const Default = {};

export const Expanded = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByRole('button'));
        const dropdownButtonClicked = canvas.getByText('First Drop');
        await expect(dropdownButtonClicked).toBeInTheDocument();
    },
};