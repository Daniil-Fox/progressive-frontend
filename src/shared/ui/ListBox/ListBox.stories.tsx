import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {ListBox} from './ListBox';


const meta = {
    component: ListBox,
    title: 'enteties/ListBox',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
