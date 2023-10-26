import FeatureCard from "./FeatureCard";
import { allModes } from "../../../.storybook/modes";

export default {
    title: 'Components/Cards/Feature Card',
    component: FeatureCard,
    argTypes: {
        title: {
            control: { type: 'string' }
        },
        text: {
            control: { type: 'string' }
        },
        buttonVariant: {
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link'],
            control: { type: 'radio' }
        },
        buttonLabel: {
            control: { type: 'string' }
        },
    },
    parameters: {
        chromatic: {
            modes: {
                'mobile': allModes['mobile'],
                'desktop': allModes['desktop'],
                'mobile dark': allModes['mobile dark'],
                'desktop dark': allModes['desktop dark'],
            },
        },
    },
};

export const Default = {
    args: {
        title: 'George Saint Geegland has a new card!',
        text: "Oh, hello!  I am George and this is my card.  I'm the type of man you would catch at a party going through the coats.",
        buttonVariant: 'primary',
        buttonLabel: "Rifkin's Dilemma",
    },
};

export const SecondaryButtonColor = {
    args: {
        ...Default.args,
        buttonVariant: 'secondary'
    },
}