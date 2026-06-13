import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';

import {Button, ButtonTheme} from './Button';


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