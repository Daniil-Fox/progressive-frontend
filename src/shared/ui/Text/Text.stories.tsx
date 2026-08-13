import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {Text, TextTheme} from "./Text";



const meta = {
    component: Text,
    title: 'shared/Text',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    args: { },
} satisfies Meta<typeof Text>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: "Title",
        text: "Description text"
    }
}
export const Error: Story = {
    args: {
        title: "Title",
        text: "Description text",
        theme: TextTheme.ERROR
    }
}
export const OnlyTitle: Story = {
    args: {
        title: "Title",
    }
}
export const OnlyText: Story = {
    args: {
        text: "Description text",
    }
}