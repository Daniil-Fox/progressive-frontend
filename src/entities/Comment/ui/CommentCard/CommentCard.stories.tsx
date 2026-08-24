import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {CommentCard} from './CommentCard';


const meta = {
    component: CommentCard,
    title: 'enteties/CommentCard',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
