import type {Meta, StoryObj} from '@storybook/react-webpack5';
import {http, HttpResponse} from 'msw';
import {Navbar} from "./Navbar";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import {UserRole} from "@/entities/User/model/types/user";
import avatar from '@/shared/assets/tests/ava.jpg';

const meta = {
    component: Navbar,
    title: 'widgets/Navbar',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Guest: Story = {
    decorators: [
        StoreDecorator({
            user: {
                _inited: true,
            },
        }),
    ],
};

export const Auth: Story = {
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'admin',
                    roles: [UserRole.ADMIN],
                    avatar,
                },
                _inited: true,
            },
        }),
    ],
    parameters: {
        msw: {
            handlers: [
                http.get('/notifications', () => {
                    return HttpResponse.json([
                        {id: '1', title: 'Уведомление 1', description: 'Произошло какое-то событие'},
                        {id: '2', title: 'Уведомление 2', description: 'Произошло какое-то событие', href: '#!'},
                    ]);
                }),
            ],
        },
    },
};
