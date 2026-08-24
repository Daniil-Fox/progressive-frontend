import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {CommentList} from './CommentList';


const meta = {
    component: CommentList,
    title: 'enteties/CommentList',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
