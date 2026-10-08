import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {AvatarDropdown} from './AvatarDropdown';


const meta = {
    component: AvatarDropdown,
    title: 'entities/AvatarDropdown',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof AvatarDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
