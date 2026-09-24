import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {ListBox} from './ListBox';


const meta = {
    component: ListBox,
    title: 'shared/ListBox',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        value: 'value 1',
        onChange: fn(),
        items: [
            {
                value: 'value 1',
                content: 'content value 1'
            },
            {
                value: 'value 2',
                content: 'content value 2'
            },
            {
                value: 'value 3',
                content: 'content value 3'
            },
        ]
    },
};
