import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {CommentList} from './CommentList';


const meta = {
    component: CommentList,
    title: 'entities/CommentList',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comments: [
            {
                user: {avatar: '', id: '1', username: 'user'},
                text: 'Text of comment',
                id: '1'
            },
            {
                user: {avatar: '', id: '2', username: 'user'},
                text: 'Text of comment',
                id: '1'
            },
            {
                user: {avatar: '', id: '3', username: 'user'},
                text: 'Text of comment',
                id: '1'
            },
        ]
    },
};

export const IsLoading: Story = {
    args: {
        isLoading: true
    },
};
