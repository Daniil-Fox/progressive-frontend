import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {NotificationItem} from './NotificationItem';


const meta = {
    component: NotificationItem,
    title: 'entities/NotificationItem',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        notification: {
            id: '1',
            title: 'Title',
            description: 'Desc',
            href: '#!'
        }
    },
};
