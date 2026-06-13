import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {Loader} from "./Loader";



const meta = {
    component: Loader,
    title: 'shared/Loader',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    args: { },
} satisfies Meta<typeof Loader>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {

    }
}