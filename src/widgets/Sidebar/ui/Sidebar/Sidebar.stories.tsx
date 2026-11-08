import type {Meta, StoryObj} from '@storybook/react-webpack5';
import {Sidebar} from "./Sidebar";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import {UserRole} from "@/entities/User/model/types/user";
import avatar from '@/shared/assets/tests/ava.jpg';

const meta = {
    component: Sidebar,
    title: 'widgets/Sidebar',
    tags: ['autodocs'],
    args: {},
    decorators: [
        (Story) => (
            <div style={{height: '100vh'}}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Sidebar>;

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
};
