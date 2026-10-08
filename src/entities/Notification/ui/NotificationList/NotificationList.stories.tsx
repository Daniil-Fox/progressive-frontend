import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {NotificationList} from './NotificationList';


const meta = {
    component: NotificationList,
    title: 'entities/NotificationList',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
