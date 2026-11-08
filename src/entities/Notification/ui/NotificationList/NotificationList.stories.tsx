import type {Meta, StoryObj} from '@storybook/react-webpack5';
import {http, HttpResponse} from 'msw';
import {NotificationList} from './NotificationList';
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const notifications = [
    {
        id: '1',
        title: 'Уведомление 1',
        description: 'Произошло какое-то событие',
    },
    {
        id: '2',
        title: 'Уведомление 2',
        description: 'Произошло какое-то событие',
        href: '#!',
    },
    {
        id: '3',
        title: 'Уведомление 3',
        description: 'Произошло какое-то событие',
    },
];

const meta = {
    component: NotificationList,
    title: 'entities/NotificationList',
    tags: ['autodocs'],
    args: {},
    decorators: [
        StoreDecorator({}),
    ],
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    parameters: {
        msw: {
            handlers: [
                http.get('/notifications', () => {
                    return HttpResponse.json(notifications);
                }),
            ],
        },
    },
};

export const Empty: Story = {
    parameters: {
        msw: {
            handlers: [
                http.get('/notifications', () => {
                    return HttpResponse.json([]);
                }),
            ],
        },
    },
};
