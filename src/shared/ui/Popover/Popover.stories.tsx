import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {Popover} from './Popover';


const meta = {
    component: Popover,
    title: 'entities/Popover',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        children: <>content content</>,
        trigger: <div>trigger</div>
    },
};
