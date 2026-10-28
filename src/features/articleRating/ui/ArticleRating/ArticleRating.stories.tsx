import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {ArticleRating} from './ArticleRating';


const meta = {
    component: ArticleRating,
    title: 'entities/ArticleRating',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
