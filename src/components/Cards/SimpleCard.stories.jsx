import SimpleCard from "./SimpleCard";

export default {
    title: 'Components/Cards/Simple Card',
    component: SimpleCard,
    argTypes: {
        cardWidth: {
            control: { type: 'string' }
        },
        title: {
            control: { type: 'string' }
        },
        text: {
            control: { type: 'string' }
        },
        variant: {
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link'],
            control: { type: 'radio' }
        },
        buttonLabel: {
            control: { type: 'string' }
        },
    },
};

export const Default = {
    args: {
        cardWidth: '18rem',
        title: "Gil Faizon's Tuna Card",
        text: "Oh, hello!  This is Gil Faizon's card.  It's also not tuna, can you really believe that?",
        variant: 'primary',
        buttonLabel: 'Too much tuna',
    },
};