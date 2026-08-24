import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {Skeleton} from './Skeleton';


const meta = {
    component: Skeleton,
    title: 'shared/Skeleton',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        width: "100%",
        height: 200
    },
};
export const Circle: Story = {
    args: {
        width: 120,
        height: 120,
        border: "50%",
    },
};
