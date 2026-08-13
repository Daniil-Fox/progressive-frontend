import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';

import {Avatar} from './Avatar';


const meta = {
    component: Avatar,
    title: 'shared/Avatar',
    tags: ['autodocs'],
    args: {  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};