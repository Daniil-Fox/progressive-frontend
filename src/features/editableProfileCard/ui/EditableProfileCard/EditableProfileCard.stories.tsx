import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {EditableProfileCard} from './EditableProfileCard';


const meta = {
    component: EditableProfileCard,
    title: 'pages/EditableProfileCard',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
