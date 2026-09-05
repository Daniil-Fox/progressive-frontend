import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {Tabs} from './Tabs';
import {action} from "storybook/actions";


const meta = {
    component: Tabs,
    title: 'enteties/Tabs',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        tabs: [
            {
                value: 'tab1',
                content: 'tab1'
            },
            {
                value: 'tab2',
                content: 'tab2'
            },
            {
                value: 'tab3',
                content: 'tab3'
            }
        ],
        value: 'tab2',
        onTabClick: action('onTabCLick')
    },
};
