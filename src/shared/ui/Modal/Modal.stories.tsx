import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';

import {Modal} from './Modal';


const meta = {
    component: Modal,
    title: 'shared/Modal',
    tags: ['autodocs'],
    args: { onClose: fn(), children: "Some text in the modal", isOpen: true },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};