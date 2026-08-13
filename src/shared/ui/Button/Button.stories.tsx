import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';

import {Button, ButtonSize, ButtonTheme} from './Button';


const meta = {
    component: Button,
    title: 'shared/Button',
    tags: ['autodocs'],
    args: { onClick: fn(), children: "Button" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};
export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,

    },
};
export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE
    },
};
export const Background: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND
    },
};
export const BackgroundInverted: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED
    },
};
export const BackgroundSquare: Story = {
    args: {
        square: true,
        children: '>'
    },
};
export const BackgroundM: Story = {
    args: {
        size: ButtonSize.M
    },
};
export const BackgroundL: Story = {
    args: {
        size: ButtonSize.L
    },
};
export const BackgroundXL: Story = {
    args: {
        size: ButtonSize.XL
    },
};
export const Disabled: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        disabled: true
    },
};