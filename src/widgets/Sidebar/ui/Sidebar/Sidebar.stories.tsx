import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {Sidebar} from "./Sidebar";


const meta = {
    component: Sidebar,
    title: 'widgets/Sidebar',
    tags: ['autodocs'],
    args: {  },
} satisfies Meta<typeof Sidebar>;
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
