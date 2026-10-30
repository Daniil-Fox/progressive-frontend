import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {ErrorPage} from "./ErrorPage";


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
