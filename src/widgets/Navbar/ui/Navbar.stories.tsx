import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {Navbar} from "./Navbar";


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
