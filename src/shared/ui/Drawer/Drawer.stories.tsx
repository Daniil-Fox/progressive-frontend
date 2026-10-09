import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {Drawer} from './Drawer';


const meta = {
    component: Drawer,
    title: 'entities/Drawer',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        children: <div>Some els</div>
    },
};
