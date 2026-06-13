import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';

import {ErrorPage} from "./ErrorPage";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "shared/lib/theme/ThemeContext";


const meta = {
    component: ErrorPage,
    title: 'widgets/ErrorPage',
    tags: ['autodocs'],
    args: {  },
} satisfies Meta<typeof ErrorPage>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
    },
};
export const Dark: Story = {
    args: {
    },
};
