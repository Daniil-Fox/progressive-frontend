import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';

import {Navbar} from "./Navbar";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "shared/lib/theme/ThemeContext";


const meta = {
    component: Navbar,
    title: 'widgets/Navbar',
    tags: ['autodocs'],
    args: {  },
} satisfies Meta<typeof Navbar>;

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

Light.decorators = [ThemeDecorator(Theme.LIGHT)]
Dark.decorators = [ThemeDecorator(Theme.DARK)]
