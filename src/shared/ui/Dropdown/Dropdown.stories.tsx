import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {Dropdown} from './Dropdown';
import {Button} from "shared/ui";


const meta = {
    component: Dropdown,
    title: 'shared/Dropdown',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'My profile',
            },
            {
                content: 'Settings',
            },
            {
                content: 'Exit',
            }
        ]
    },
};
