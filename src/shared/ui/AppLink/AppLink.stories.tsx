import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {AppLink, AppLinkTheme} from "./AppLink";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "shared/lib/theme/ThemeContext";


const meta = {
    component: AppLink,
    title: 'shared/AppLink',
    tags: ['autodocs'],
    args: { children: "AppLink", to: '#' },
} satisfies Meta<typeof AppLink>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    },
};
export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY
    },
};
