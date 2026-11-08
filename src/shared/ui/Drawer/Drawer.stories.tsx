import type {Meta, StoryObj} from '@storybook/react-webpack5';
import {fn} from 'storybook/test';
import {Drawer} from './Drawer';

const meta = {
    component: Drawer,
    title: 'shared/Drawer',
    tags: ['autodocs'],
    args: {
        isOpen: true,
        onClose: fn(),
        children: <div>Содержимое drawer</div>,
    },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
