import type {Meta, StoryObj} from '@storybook/react-webpack5';
import {AvatarDropdown} from './AvatarDropdown';
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import {UserRole} from "@/entities/User/model/types/user";
import avatar from '@/shared/assets/tests/ava.jpg'

const meta = {
    component: AvatarDropdown,
    title: 'features/AvatarDropdown',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof AvatarDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Admin: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'Name',
                    roles: [UserRole.ADMIN],
                    avatar: avatar
                },
                _inited: true
            }
        })
    ]
};


export const User: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'Name',
                    roles: [UserRole.USER],
                    avatar: avatar
                },
                _inited: true
            }
        })
    ]
};